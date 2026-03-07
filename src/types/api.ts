export type Shelter = {
  id: string;
  name: string;
};

export type DonationStats = {
  contributors: number;
  contribution: number;
};

export type CreateDonationPayload = {
  firstName?: string;
  lastName: string;
  email: string;
  phone: string;
  shelterId?: string;
  value: number;
};

export type CreateDonationResponse = {
  type: string;
  message: string;
};
