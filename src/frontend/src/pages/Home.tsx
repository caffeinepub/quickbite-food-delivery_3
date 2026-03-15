import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight, Clock, Flame, Search, Star, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { CUISINE_TAGS, RESTAURANTS } from "../data/restaurants";
import type { Restaurant } from "../types";

function RestaurantCard({
  restaurant,
  index,
}: { restaurant: Restaurant; index: number }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer group"
      onClick={() =>
        navigate({ to: "/restaurant/$id", params: { id: restaurant.id } })
      }
      data-ocid={`restaurants.item.${index + 1}`}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {restaurant.promoted && (
          <Badge className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2 py-0.5">
            <Flame className="w-3 h-3 mr-1" />
            Promoted
          </Badge>
        )}
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Closed</span>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold">{restaurant.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({restaurant.reviewCount.toLocaleString()})
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-base leading-tight truncate">
          {restaurant.name}
        </h3>
        <p className="text-muted-foreground text-sm mt-0.5">
          {restaurant.cuisine}
        </p>
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {restaurant.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            {restaurant.deliveryFee === 0
              ? "Free delivery"
              : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
          </span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">
            Min ${restaurant.minOrder}
          </span>
          <Button
            size="sm"
            className="bg-primary text-white hover:opacity-90 text-xs h-7 px-3 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigate({
                to: "/restaurant/$id",
                params: { id: restaurant.id },
              });
            }}
            data-ocid={`restaurants.primary_button.${index + 1}`}
          >
            Order Now <ChevronRight className="w-3 h-3 ml-0.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = RESTAURANTS.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === "All" || r.cuisineTag === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-food-delivery.dim_1200x500.jpg"
            alt="Delicious food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Order food you <br />
              <span className="text-yellow-300">love, delivered</span> fast.
            </h1>
            <p className="text-white/90 text-lg mt-4 mb-8">
              Discover restaurants near you and get your favorite meals
              delivered in 30 minutes.
            </p>
            <div className="relative max-w-lg" data-ocid="hero.section">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for restaurants or cuisines…"
                className="pl-12 pr-4 h-14 text-base rounded-xl shadow-food-lg bg-white border-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                data-ocid="hero.search_input"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {CUISINE_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              data-ocid="restaurants.tab"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-bold text-2xl">
            {activeTag === "All"
              ? "All Restaurants"
              : `${activeTag} Restaurants`}
            <span className="text-muted-foreground font-normal text-base ml-2">
              ({filtered.length})
            </span>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div
            className="text-center py-20"
            data-ocid="restaurants.empty_state"
          >
            <p className="text-2xl mb-2">🍽️</p>
            <p className="font-semibold text-lg">No restaurants found</p>
            <p className="text-muted-foreground mt-1">
              Try a different search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => (
              <RestaurantCard key={r.id} restaurant={r} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
