import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight, Clock, LogOut, Package, User } from "lucide-react";
import { motion } from "motion/react";
import { useApp } from "../context/AppContext";
import type { OrderStatus } from "../types";

const STATUS_LABELS: Record<OrderStatus, { label: string; color: string }> = {
  placed: { label: "Order Placed", color: "bg-blue-100 text-blue-700" },
  preparing: { label: "Preparing", color: "bg-orange-100 text-orange-700" },
  out_for_delivery: {
    label: "Out for Delivery",
    color: "bg-yellow-100 text-yellow-700",
  },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-700" },
};

export default function Profile() {
  const { user, orders, logout, setIsAuthOpen } = useApp();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="font-display font-bold text-2xl mb-2">
          Sign in to view your profile
        </h2>
        <p className="text-muted-foreground mb-6">
          Track your orders and manage your account.
        </p>
        <Button
          className="bg-primary text-white hover:opacity-90"
          onClick={() => setIsAuthOpen(true)}
          data-ocid="profile.primary_button"
        >
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Profile header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-card mb-6"
        data-ocid="profile.card"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {user.name[0].toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display font-bold text-xl">{user.name}</h1>
            <p className="text-muted-foreground text-sm">{user.email}</p>
            {user.phone && (
              <p className="text-muted-foreground text-sm">{user.phone}</p>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-destructive hover:text-destructive shrink-0"
            data-ocid="profile.delete_button"
          >
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </motion.div>

      {/* Orders */}
      <div>
        <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
          <Package className="w-5 h-5" /> Order History
          <span className="text-muted-foreground font-normal text-base ml-1">
            ({orders.length})
          </span>
        </h2>

        {orders.length === 0 ? (
          <div
            className="bg-white rounded-2xl p-10 shadow-card text-center"
            data-ocid="profile.empty_state"
          >
            <Package className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold">No orders yet</p>
            <p className="text-muted-foreground text-sm mt-1">
              Your order history will appear here
            </p>
            <Button
              className="mt-4 bg-primary text-white hover:opacity-90"
              onClick={() => navigate({ to: "/" })}
              data-ocid="profile.primary_button"
            >
              Order Now
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((order, idx) => {
              const statusInfo = STATUS_LABELS[order.status];
              return (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-card cursor-pointer hover:shadow-food transition-shadow"
                  onClick={() =>
                    navigate({
                      to: "/order-tracking/$orderId",
                      params: { orderId: order.id },
                    })
                  }
                  data-ocid={`profile.item.${idx + 1}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">
                        {order.restaurantName}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {order.items.map((i) => i.menuItem.name).join(", ")}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusInfo.color}`}
                        >
                          {statusInfo.label}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(order.placedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-primary">
                        ${order.total.toFixed(2)}
                      </p>
                      <ChevronRight className="w-4 h-4 text-muted-foreground mt-1 ml-auto" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
