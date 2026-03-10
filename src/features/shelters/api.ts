import { fetcher } from '@/lib/api';
import { Shelter } from '@/types/api';

type SheltersResponse = {
  shelters: Array<{
    id: number;
    name: string;
  }>;
};

export async function getShelters(): Promise<Shelter[]> {
  const data = await fetcher<SheltersResponse>('/shelters');

  return data.shelters.map(shelter => ({
    id: String(shelter.id),
    name: shelter.name,
  }));
}
