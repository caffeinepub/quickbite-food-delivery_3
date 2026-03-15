import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  Bike,
  CheckCircle2,
  ChefHat,
  Eye,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import type { OrderStatus } from "../types";

const STATUS_OPTIONS: { value: OrderStatus; label: string }[] = [
  { value: "placed", label: "Order Placed" },
  { value: "preparing", label: "Preparing" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
];

const STATUS_COLORS: Record<OrderStatus, string> = {
  placed: "bg-blue-100 text-blue-700",
  preparing: "bg-orange-100 text-orange-700",
  out_for_delivery: "bg-yellow-100 text-yellow-700",
  delivered: "bg-green-100 text-green-700",
};

function AdminLoginForm() {
  const { adminLogin } = useApp();
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = adminLogin(password);
    if (!ok) toast.error("Incorrect password. Hint: admin123");
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-20">
      <div className="bg-white rounded-2xl p-8 shadow-card">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-display font-bold text-2xl mb-1">Admin Login</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Restaurant owner portal
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="admin-password">Admin Password</Label>
            <Input
              id="admin-password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
              autoComplete="current-password"
              data-ocid="admin.input"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:opacity-90"
            data-ocid="admin.submit_button"
          >
            Access Dashboard
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Demo password: <code>admin123</code>
        </p>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const { isAdminLoggedIn, adminLogout, orders, updateOrderStatus } = useApp();

  if (!isAdminLoggedIn) return <AdminLoginForm />;

  const handleStatusChange = (orderId: string, status: OrderStatus) => {
    updateOrderStatus(orderId, status);
    toast.success("Order status updated");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="font-display font-bold text-3xl">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage incoming orders</p>
        </div>
        <Button
          variant="outline"
          onClick={adminLogout}
          data-ocid="admin.secondary_button"
        >
          Sign Out
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Orders",
            value: orders.length,
            icon: Eye,
            color: "text-primary",
          },
          {
            label: "Preparing",
            value: orders.filter((o) => o.status === "preparing").length,
            icon: ChefHat,
            color: "text-orange-500",
          },
          {
            label: "In Delivery",
            value: orders.filter((o) => o.status === "out_for_delivery").length,
            icon: Bike,
            color: "text-yellow-500",
          },
          {
            label: "Delivered",
            value: orders.filter((o) => o.status === "delivered").length,
            icon: CheckCircle2,
            color: "text-green-600",
          },
        ].map((stat, idx) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-card"
            data-ocid={`admin.card.${idx + 1}`}
          >
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-5 border-b border-border">
          <h2 className="font-display font-bold text-lg">All Orders</h2>
        </div>
        {orders.length === 0 ? (
          <div className="p-10 text-center" data-ocid="admin.empty_state">
            <AlertCircle className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold">No orders yet</p>
            <p className="text-sm text-muted-foreground">
              Orders will appear here as customers place them
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {orders.map((order, idx) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.04 }}
                className="p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                data-ocid={`admin.row.${idx + 1}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{order.id}</span>
                    <Badge className={`text-xs ${STATUS_COLORS[order.status]}`}>
                      {
                        STATUS_OPTIONS.find((s) => s.value === order.status)
                          ?.label
                      }
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {order.restaurantName} · ${order.total.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {order.address}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {order.items
                      .map((i) => `${i.menuItem.name} ×${i.quantity}`)
                      .join(", ")}
                  </p>
                </div>
                <div className="shrink-0 w-full sm:w-44">
                  <Select
                    value={order.status}
                    onValueChange={(v) =>
                      handleStatusChange(order.id, v as OrderStatus)
                    }
                  >
                    <SelectTrigger
                      className="h-8 text-xs"
                      data-ocid={`admin.select.${idx + 1}`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="text-xs"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
