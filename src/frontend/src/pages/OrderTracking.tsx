import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bike,
  CheckCircle2,
  ChefHat,
  Clock,
  MapPin,
  Package,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import type { OrderStatus } from "../types";

const STATUS_STEPS: {
  key: OrderStatus;
  label: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    key: "placed",
    label: "Order Placed",
    description: "Your order has been received",
    icon: Package,
  },
  {
    key: "preparing",
    label: "Preparing",
    description: "The restaurant is cooking your food",
    icon: ChefHat,
  },
  {
    key: "out_for_delivery",
    label: "Out for Delivery",
    description: "Your rider is on the way",
    icon: Bike,
  },
  {
    key: "delivered",
    label: "Delivered!",
    description: "Enjoy your meal!",
    icon: CheckCircle2,
  },
];

const STATUS_ORDER: OrderStatus[] = [
  "placed",
  "preparing",
  "out_for_delivery",
  "delivered",
];

export default function OrderTracking() {
  const { orderId } = useParams({ from: "/order-tracking/$orderId" });
  const { orders, updateOrderStatus } = useApp();
  const navigate = useNavigate();
  const order = orders.find((o) => o.id === orderId);
  const orderStatus = order?.status;

  useEffect(() => {
    if (!orderStatus || orderStatus === "delivered") return;
    const currentIdx = STATUS_ORDER.indexOf(orderStatus);
    if (currentIdx >= STATUS_ORDER.length - 1) return;
    const timer = setInterval(() => {
      updateOrderStatus(orderId, STATUS_ORDER[currentIdx + 1]);
    }, 8000);
    return () => clearInterval(timer);
  }, [orderStatus, orderId, updateOrderStatus]);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-xl font-display font-bold">Order not found</p>
        <Button className="mt-4" onClick={() => navigate({ to: "/" })}>
          Back to Home
        </Button>
      </div>
    );
  }

  const currentStepIdx = STATUS_ORDER.indexOf(order.status);
  const isDelivered = order.status === "delivered";

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <button
        type="button"
        onClick={() => navigate({ to: "/" })}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        data-ocid="tracking.button"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-card mb-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-display font-bold text-2xl">Tracking Order</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{order.id}</p>
          </div>
          {isDelivered ? (
            <span className="bg-success/10 text-success font-semibold text-sm px-3 py-1 rounded-full">
              ✓ Delivered
            </span>
          ) : (
            <span className="bg-accent/10 text-accent font-semibold text-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Live
            </span>
          )}
        </div>
        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{order.address}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-card mb-5">
        <h2 className="font-semibold mb-5">Order Status</h2>
        <div className="space-y-0">
          {STATUS_STEPS.map((step, idx) => {
            const isComplete = idx <= currentStepIdx;
            const isCurrent = idx === currentStepIdx;
            const Icon = step.icon;

            return (
              <div key={step.key} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: isCurrent ? [1, 1.15, 1] : 1 }}
                    transition={{
                      duration: 0.6,
                      repeat: isCurrent ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 1.5,
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      isComplete
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  {idx < STATUS_STEPS.length - 1 && (
                    <div
                      className={`w-0.5 h-10 mt-1 ${
                        idx < currentStepIdx ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>

                <div className="pb-8 pt-2">
                  <p
                    className={`font-semibold text-sm ${
                      isComplete ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {step.description}
                  </p>
                  {isCurrent && !isDelivered && (
                    <p className="text-xs text-primary font-medium mt-1">
                      In progress…
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-card">
        <h2 className="font-semibold mb-4">
          Order from {order.restaurantName}
        </h2>
        <div className="space-y-2">
          {order.items.map((item) => (
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
        </div>
        <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span className="text-primary">${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
