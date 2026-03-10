import { useQuery } from '@tanstack/react-query';
import { getShelters } from './api';
import { queryKeys } from '@/lib/queryKeys';

export function useShelters() {
  return useQuery({
    queryKey: queryKeys.shelters,
    queryFn: getShelters
  });
}
