import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { RESTAURANTS } from "../data/restaurants";
import type { CartItem, Order, OrderStatus, User } from "../types";

interface AppContextType {
  // Auth
  user: User | null;
  isAuthOpen: boolean;
  setIsAuthOpen: (v: boolean) => void;
  login: (u: User) => void;
  logout: () => void;

  // Admin
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;

  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  cartRestaurantName: string | null;

  // Checkout
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (v: boolean) => void;

  // Orders
  orders: Order[];
  placeOrder: (address: string) => Order | null;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const ADMIN_PASSWORD = "admin123";

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem("fd_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem("fd_admin") === "true";
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem("fd_cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const stored = localStorage.getItem("fd_orders");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    if (user) localStorage.setItem("fd_user", JSON.stringify(user));
    else localStorage.removeItem("fd_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("fd_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("fd_orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("fd_admin", isAdminLoggedIn ? "true" : "false");
  }, [isAdminLoggedIn]);

  const login = useCallback((u: User) => {
    setUser(u);
    setIsAuthOpen(false);
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const adminLogin = useCallback((password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  }, []);

  const adminLogout = useCallback(() => setIsAdminLoggedIn(false), []);

  const addToCart = useCallback((item: CartItem) => {
    setCart((prev) => {
      // Clear cart if different restaurant
      const base =
        prev.length > 0 && prev[0].restaurantId !== item.restaurantId
          ? []
          : prev;
      const existing = base.find((c) => c.menuItem.id === item.menuItem.id);
      if (existing) {
        return base.map((c) =>
          c.menuItem.id === item.menuItem.id
            ? { ...c, quantity: c.quantity + 1 }
            : c,
        );
      }
      return [...base, item];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    setCart((prev) => prev.filter((c) => c.menuItem.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.menuItem.id === itemId ? { ...c, quantity: c.quantity + delta } : c,
        )
        .filter((c) => c.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce(
    (sum, c) => sum + c.menuItem.price * c.quantity,
    0,
  );
  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);
  const cartRestaurantName = cart.length > 0 ? cart[0].restaurantName : null;

  const placeOrder = useCallback(
    (address: string): Order | null => {
      if (cart.length === 0) return null;
      const restaurant = RESTAURANTS.find((r) => r.id === cart[0].restaurantId);
      if (!restaurant) return null;

      const subtotal = cartTotal;
      const deliveryFee = restaurant.deliveryFee;
      const now = new Date();
      const eta = new Date(now.getTime() + 45 * 60 * 1000);

      const order: Order = {
        id: `ORD-${Date.now()}`,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        items: [...cart],
        subtotal,
        deliveryFee,
        total: subtotal + deliveryFee,
        status: "placed",
        address,
        placedAt: now.toISOString(),
        estimatedDelivery: eta.toISOString(),
      };

      setOrders((prev) => [order, ...prev]);
      clearCart();
      setIsCheckoutOpen(false);
      setIsCartOpen(false);
      return order;
    },
    [cart, cartTotal, clearCart],
  );

  const updateOrderStatus = useCallback(
    (orderId: string, status: OrderStatus) => {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status } : o)),
      );
    },
    [],
  );

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthOpen,
        setIsAuthOpen,
        login,
        logout,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        cartRestaurantName,
        isCheckoutOpen,
        setIsCheckoutOpen,
        orders,
        placeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
