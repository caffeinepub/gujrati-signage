import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { EnquiryInput, OrderInput } from '../backend';

export function useSubmitEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: EnquiryInput) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitEnquiry(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enquiries'] });
    },
  });
}

export function useSubmitOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: OrderInput) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitOrder(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}
