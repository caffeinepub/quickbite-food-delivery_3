import type { Cart, Product } from "../backend";

export function calculateCartTotal(
  cart: Cart | undefined,
  products: Product[],
): number {
  if (!cart || !cart.items.length) return 0;

  return cart.items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return total;
    return total + product.price * Number(item.quantity);
  }, 0);
}

export function calculateItemSubtotal(
  productId: bigint,
  quantity: bigint,
  products: Product[],
): number {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;
  return product.price * Number(quantity);
}
