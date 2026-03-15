import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { RESTAURANTS } from "../data/restaurants";

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    placeOrder,
    user,
  } = useApp();
  const [address, setAddress] = useState(user?.address || "");
  const navigate = useNavigate();

  const restaurant =
    cart.length > 0
      ? RESTAURANTS.find((r) => r.id === cart[0].restaurantId)
      : null;
  const deliveryFee = restaurant?.deliveryFee ?? 0;
  const total = cartTotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      toast.error("Please enter a delivery address");
      return;
    }
    const order = placeOrder(address);
    if (order) {
      toast.success("Order placed! Tracking your delivery...");
      navigate({
        to: "/order-tracking/$orderId",
        params: { orderId: order.id },
      });
    }
  };

  return (
    <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
      <DialogContent className="max-w-md" data-ocid="checkout.dialog">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handlePlaceOrder} className="space-y-5">
          {/* Delivery Address */}
          <div>
            <Label
              htmlFor="checkout-address"
              className="text-sm font-medium flex items-center gap-1.5 mb-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" /> Delivery Address
            </Label>
            <Input
              id="checkout-address"
              placeholder="123 Main St, Apt 4B, San Jose, CA 95110"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
              data-ocid="checkout.input"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold text-sm mb-3">Order Summary</h3>
            {cart.map((item) => (
              <div
                key={item.menuItem.id}
                className="flex justify-between text-sm"
              >
                <span className="text-muted-foreground">
                  {item.menuItem.name} × {item.quantity}
                </span>
                <span className="font-medium">
                  ${(item.menuItem.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <Separator className="my-2" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsCheckoutOpen(false)}
              data-ocid="checkout.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white hover:opacity-90 font-semibold"
              data-ocid="checkout.submit_button"
            >
              Place Order · ${total.toFixed(2)}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
