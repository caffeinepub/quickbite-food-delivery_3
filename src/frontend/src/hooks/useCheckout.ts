import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { OrderType } from "../backend";
import { useActor } from "./useActor";

export function useCheckout() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation<OrderType, Error, string>({
    mutationFn: async (shippingAddress: string) => {
      if (!actor) throw new Error("Actor not available");
      return actor.checkout(shippingAddress);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
