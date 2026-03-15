import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "../backend";
import { formatUSD } from "../utils/currency";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image.getDirectURL()}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-foreground">
            {formatUSD(product.price)}
          </span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <Badge key={color} variant="outline" className="text-xs">
                {color}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={() => onViewDetails(product)} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
