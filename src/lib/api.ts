const API_URL = 'https://frontend-assignment-api.goodrequest.dev/api/v1';

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(`${API_URL}${url}`);

  if (!res.ok) {
    throw new Error('API request failed');
  }

  return res.json();
}
