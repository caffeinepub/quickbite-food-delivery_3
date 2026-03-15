import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface AddToCartParams {
  productId: bigint;
  quantity: bigint;
  size: string;
  color: string;
}

interface RemoveFromCartParams {
  productId: bigint;
  size: string;
  color: string;
}

interface UpdateQuantityParams {
  productId: bigint;
  size: string;
  color: string;
  quantity: bigint;
}

export function useAddToCart() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
      size,
      color,
    }: AddToCartParams) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addToCart(productId, quantity, size, color);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useRemoveFromCart() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, size, color }: RemoveFromCartParams) => {
      if (!actor) throw new Error("Actor not available");
      // Remove by setting quantity to 0 - backend will filter it out
      return actor.addToCart(productId, BigInt(0), size, color);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useUpdateCartQuantity() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      size,
      color,
      quantity,
    }: UpdateQuantityParams) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addToCart(productId, quantity, size, color);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
