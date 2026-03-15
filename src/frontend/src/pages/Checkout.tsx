import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, ShoppingBag } from "lucide-react";
import { useState } from "react";
import AuthGuard from "../components/AuthGuard";
import ShippingAddressForm, {
  type ShippingAddress,
} from "../components/ShippingAddressForm";
import { useCheckout } from "../hooks/useCheckout";
import { useGetCart, useGetProducts } from "../hooks/useQueries";
import { calculateCartTotal } from "../utils/cart";
import { formatUSD } from "../utils/currency";
import {
  formatShippingAddress,
  validateShippingAddress,
} from "../utils/validation";

export default function Checkout() {
  const navigate = useNavigate();
  const { data: cart } = useGetCart();
  const { data: products = [] } = useGetProducts();
  const checkout = useCheckout();

  const [address, setAddress] = useState<ShippingAddress>({
    fullName: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ShippingAddress, string>>
  >({});

  const cartItems = cart?.items || [];
  const total = calculateCartTotal(cart, products);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateShippingAddress(address);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const formattedAddress = formatShippingAddress(address);

    checkout.mutate(formattedAddress, {
      onSuccess: () => {
        navigate({ to: "/" });
      },
    });
  };

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
          Checkout
        </h1>

        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-6">Your cart is empty</p>
              <Button onClick={() => navigate({ to: "/" })}>
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ShippingAddressForm
                      value={address}
                      onChange={setAddress}
                      errors={errors}
                    />
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {cartItems.map((item) => {
                        const product = products.find(
                          (p) => p.id === item.productId,
                        );
                        if (!product) return null;
                        const itemKey = `${item.productId}-${item.color}-${item.size}`;
                        const itemTotal = product.price * Number(item.quantity);

                        return (
                          <div
                            key={itemKey}
                            className="flex justify-between text-sm"
                          >
                            <div className="flex-1">
                              <p className="font-medium">{product.title}</p>
                              <p className="text-muted-foreground text-xs">
                                {item.color} • {item.size} • Qty:{" "}
                                {Number(item.quantity)}
                              </p>
                            </div>
                            <span className="font-medium">
                              {formatUSD(itemTotal)}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>{formatUSD(total)}</span>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={checkout.isPending}
                    >
                      {checkout.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Place Order"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        )}
      </div>
    </AuthGuard>
  );
}
