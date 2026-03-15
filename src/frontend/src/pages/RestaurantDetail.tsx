import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock, Flame, Leaf, Plus, Star, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { RESTAURANTS } from "../data/restaurants";
import type { MenuItem } from "../types";

function MenuItemCard({
  item,
  restaurantId,
  restaurantName,
}: { item: MenuItem; restaurantId: string; restaurantName: string }) {
  const { addToCart, cart } = useApp();
  const inCart = cart.find((c) => c.menuItem.id === item.id);

  const handleAdd = () => {
    addToCart({ menuItem: item, restaurantId, restaurantName, quantity: 1 });
    toast.success(`Added ${item.name}`, { duration: 1500 });
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border hover:shadow-card transition-shadow">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {item.isVeg ? (
            <span className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-600" />
            </span>
          ) : (
            <span className="w-4 h-4 border-2 border-red-600 rounded-sm flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-600" />
            </span>
          )}
          <h4 className="font-semibold text-sm">{item.name}</h4>
          {item.popular && (
            <Badge variant="secondary" className="text-xs py-0 px-1.5">
              Popular
            </Badge>
          )}
          {item.spicy && <Flame className="w-3.5 h-3.5 text-orange-500" />}
          {item.isVeg && <Leaf className="w-3.5 h-3.5 text-green-600" />}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <p className="font-bold text-primary mt-2">${item.price.toFixed(2)}</p>
      </div>
      <Button
        size="sm"
        variant={inCart ? "default" : "outline"}
        className={`shrink-0 rounded-lg ${
          inCart
            ? "bg-primary text-white"
            : "border-primary text-primary hover:bg-primary hover:text-white"
        }`}
        onClick={handleAdd}
      >
        <Plus className="w-4 h-4 mr-1" />
        {inCart ? `${inCart.quantity} Added` : "Add"}
      </Button>
    </div>
  );
}

export default function RestaurantDetail() {
  const { id } = useParams({ from: "/restaurant/$id" });
  const navigate = useNavigate();
  const restaurant = RESTAURANTS.find((r) => r.id === id);
  const [activeCategory, setActiveCategory] = useState(
    restaurant?.categories[0]?.name ?? "",
  );

  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-2xl font-display font-bold">Restaurant not found</p>
        <Button className="mt-4" onClick={() => navigate({ to: "/" })}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <button
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          data-ocid="restaurant.button"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-white">
            {restaurant.name}
          </h1>
          <p className="text-white/90 text-sm mt-0.5">
            {restaurant.description}
          </p>
        </div>
      </div>

      <div className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-6 text-sm flex-wrap">
          <span className="flex items-center gap-1.5 font-semibold">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {restaurant.rating}{" "}
            <span className="text-muted-foreground font-normal">
              ({restaurant.reviewCount.toLocaleString()} reviews)
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {restaurant.deliveryTime}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Tag className="w-4 h-4" />
            {restaurant.deliveryFee === 0
              ? "Free delivery"
              : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
          </span>
          <span className="text-muted-foreground">
            Min order: ${restaurant.minOrder}
          </span>
          <Badge variant="outline" className="text-xs">
            {restaurant.cuisine}
          </Badge>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList
            className="flex-wrap h-auto gap-1 bg-muted p-1 mb-6"
            data-ocid="restaurant.tab"
          >
            {restaurant.categories.map((cat) => (
              <TabsTrigger
                key={cat.name}
                value={cat.name}
                className="text-xs font-medium"
                data-ocid="restaurant.tab"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {restaurant.categories.map((cat) => (
            <TabsContent key={cat.name} value={cat.name}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {cat.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name}
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
