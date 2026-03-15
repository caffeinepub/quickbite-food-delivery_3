import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Float "mo:core/Float";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import Storage "blob-storage/Storage";

actor {
  public type Product = {
    id : Nat;
    title : Text;
    description : Text;
    price : Float;
    sizes : [Text];
    colors : [Text];
    image : Storage.ExternalBlob;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  public type CartItem = {
    productId : Nat;
    quantity : Nat;
    size : Text;
    color : Text;
  };

  public type Cart = {
    items : [CartItem];
  };

  public type OrderType = {
    id : Nat;
    user : Principal;
    cart : Cart;
    total : Float;
    shippingAddress : Text;
    status : Text;
  };

  module OrderType {
    public func compare(order1 : OrderType, order2 : OrderType) : Order.Order {
      Nat.compare(order1.id, order2.id);
    };
  };

  public type UserProfile = {
    name : Text;
    email : Text;
    phone : Text;
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  var nextProductId = 1;
  var nextOrderId = 1;

  let products = Map.empty<Nat, Product>();
  let orders = Map.empty<Principal, List.List<OrderType>>();
  let carts = Map.empty<Principal, Cart>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  public shared ({ caller }) func addProduct(
    title : Text,
    description : Text,
    price : Float,
    sizes : [Text],
    colors : [Text],
    image : Storage.ExternalBlob,
  ) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can add products");
    };

    let product = {
      id = nextProductId;
      title;
      description;
      price;
      sizes;
      colors;
      image;
    };

    products.add(nextProductId, product);
    nextProductId += 1;
  };

  public shared ({ caller }) func addToCart(
    productId : Nat,
    quantity : Nat,
    size : Text,
    color : Text,
  ) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can add to cart");
    };

    let cart = switch (carts.get(caller)) {
      case (?existingCart) { existingCart };
      case (null) { { items = [] } };
    };

    let newItem = {
      productId;
      quantity;
      size;
      color;
    };

    let filteredItems = cart.items.filter(
      func(item) {
        not (
          item.productId == productId and
          item.size == size and
          item.color == color
        );
      }
    );

    let updatedItems = filteredItems;
    carts.add(caller, { items = updatedItems.concat([newItem]) });
  };

  public shared ({ caller }) func checkout(shippingAddress : Text) : async OrderType {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can checkout");
    };

    let cart = switch (carts.get(caller)) {
      case (?existingCart) { existingCart };
      case (null) { Runtime.trap("Cart is empty") };
    };

    var total = 0.0;
    for (item in cart.items.values()) {
      let product = switch (products.get(item.productId)) {
        case (?p) { p };
        case (null) { Runtime.trap("Product not found") };
      };
      total += product.price * item.quantity.toFloat();
    };

    let order = {
      id = nextOrderId;
      user = caller;
      cart;
      total;
      shippingAddress;
      status = "Pending";
    };

    let userOrders = switch (orders.get(caller)) {
      case (?existingOrders) { existingOrders };
      case (null) { List.empty<OrderType>() };
    };

    userOrders.add(order);
    orders.add(caller, userOrders);

    nextOrderId += 1;
    carts.remove(caller);

    order;
  };

  public query ({ caller }) func getCart() : async Cart {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view cart");
    };

    switch (carts.get(caller)) {
      case (?cart) { cart };
      case (null) { { items = [] } };
    };
  };

  public query ({ caller }) func getOrders() : async [OrderType] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view orders");
    };

    let userOrders = switch (orders.get(caller)) {
      case (?existingOrders) { existingOrders };
      case (null) { List.empty<OrderType>() };
    };

    let ordersArray = userOrders.toArray();
    ordersArray.sort();
  };

  public query ({ caller }) func getProducts() : async [Product] {
    let productsArray = products.values().toArray();
    productsArray.sort();
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
