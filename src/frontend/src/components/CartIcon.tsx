import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useGetCart } from "../hooks/useQueries";

interface CartIconProps {
  onClick: () => void;
}

export default function CartIcon({ onClick }: CartIconProps) {
  const { data: cart } = useGetCart();

  const itemCount =
    cart?.items.reduce((sum, item) => sum + Number(item.quantity), 0) || 0;

  return (
    <Button variant="ghost" size="sm" onClick={onClick} className="relative">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {itemCount}
        </Badge>
      )}
    </Button>
  );
}
