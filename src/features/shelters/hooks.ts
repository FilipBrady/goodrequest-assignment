import { useQuery } from '@tanstack/react-query';
import { getShelters } from './api';
import { queryKeys } from '@/lib/queryKeys';

export function useShelters(enabled = false) {
  return useQuery({
    queryKey: queryKeys.shelters,
    queryFn: getShelters,
    enabled,
  });
}
