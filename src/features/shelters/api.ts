import { fetcher } from '@/lib/api';
import { Shelter } from '@/types/api';

export function getShelters() {
  return fetcher<Shelter[]>('/shelters');
}