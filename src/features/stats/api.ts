import { fetcher } from '@/lib/api';
import { DonationStats } from '@/types/api';

export function getDonationStats() {
  return fetcher<DonationStats>('/shelters/results');
}
