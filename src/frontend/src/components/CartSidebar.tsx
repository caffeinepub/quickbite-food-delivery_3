import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useApp } from "../context/AppContext";

export default function CartSidebar() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartRestaurantName,
    setIsCheckoutOpen,
    user,
    setIsAuthOpen,
  } = useApp();

  const handleCheckout = () => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-food-lg z-50 flex flex-col"
            data-ocid="cart.panel"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h2 className="font-display font-bold text-lg">Your Cart</h2>
                {cartRestaurantName && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cartRestaurantName}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
                data-ocid="cart.close_button"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {cart.length === 0 ? (
                  <div
                    className="flex flex-col items-center justify-center h-48 text-center"
                    data-ocid="cart.empty_state"
                  >
                    <ShoppingCart className="w-12 h-12 text-muted-foreground/30 mb-3" />
                    <p className="font-medium text-muted-foreground">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      Add items to get started
                    </p>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <motion.div
                      key={item.menuItem.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {item.menuItem.name}
                        </p>
                        <p className="text-primary text-sm font-semibold mt-0.5">
                          ${(item.menuItem.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-7 h-7"
                          onClick={() => updateQuantity(item.menuItem.id, -1)}
                          data-ocid={`cart.secondary_button.${idx + 1}`}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-7 h-7"
                          onClick={() => updateQuantity(item.menuItem.id, 1)}
                          data-ocid={`cart.primary_button.${idx + 1}`}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-7 h-7 text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.menuItem.id)}
                          data-ocid={`cart.delete_button.${idx + 1}`}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <Separator />
                <Button
                  className="w-full bg-primary text-white hover:opacity-90 font-semibold"
                  onClick={handleCheckout}
                  data-ocid="cart.submit_button"
                >
                  Proceed to Checkout · ${cartTotal.toFixed(2)}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
