import { useQuery } from '@tanstack/react-query';
import { getDonationStats } from './api';
import { queryKeys } from '@/lib/queryKeys';

export function useDonationStats(enabled = false) {
  return useQuery({
    queryKey: queryKeys.donationStatus,
    queryFn: getDonationStats,
    enabled,
  });
}
