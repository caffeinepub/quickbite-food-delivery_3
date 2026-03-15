import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, Package } from "lucide-react";
import AuthGuard from "../components/AuthGuard";
import { useGetOrders, useGetProducts } from "../hooks/useQueries";
import { formatUSD } from "../utils/currency";

export default function OrderHistory() {
  const navigate = useNavigate();
  const { data: orders = [], isLoading } = useGetOrders();
  const { data: products = [] } = useGetProducts();

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
          Order History
        </h1>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : orders.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Package className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-6">
                You haven&apos;t placed any orders yet
              </p>
              <Button onClick={() => navigate({ to: "/" })}>
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={Number(order.id)}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-serif">
                        Order #{Number(order.id)}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {order.cart.items.length}{" "}
                        {order.cart.items.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                    <Badge variant="outline">{order.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {order.cart.items.map((item) => {
                      const product = products.find(
                        (p) => p.id === item.productId,
                      );
                      if (!product) return null;
                      const itemKey = `${item.productId}-${item.color}-${item.size}`;

                      return (
                        <div key={itemKey} className="flex gap-4">
                          <img
                            src={product.image.getDirectURL()}
                            alt={product.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{product.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {item.color} • {item.size} • Qty:{" "}
                              {Number(item.quantity)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      Total: {formatUSD(order.total)}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => navigate({ to: "/profile" })}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
