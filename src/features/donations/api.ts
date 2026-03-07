import { CreateDonationResponse, CreateDonationPayload } from '@/types/api';

export async function submitDonation(
  payload: CreateDonationPayload,
): Promise<CreateDonationResponse> {
  const res = await fetch(
    'https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );
  if (!res.ok) {
    throw new Error('Donation failed');
  }
  return res.json();
}
