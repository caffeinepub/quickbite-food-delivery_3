import { useQuery } from "@tanstack/react-query";
import type { Cart, OrderType, Product } from "../backend";
import { useActor } from "./useActor";

export function useGetProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCart() {
  const { actor, isFetching } = useActor();

  return useQuery<Cart>({
    queryKey: ["cart"],
    queryFn: async () => {
      if (!actor) return { items: [] };
      try {
        return await actor.getCart();
      } catch {
        return { items: [] };
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetOrders() {
  const { actor, isFetching } = useActor();

  return useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getOrders();
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}
