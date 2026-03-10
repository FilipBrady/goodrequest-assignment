export type Shelter = {
  id: string;
  name: string;
};

export type DonationStats = {
  contributors: number;
  contribution: number;
};
export type DonationContributor = {
  firstName?: string;
  lastName: string;
  email: string;
  phone: string;
};
export type CreateDonationPayload = {
  contributors: DonationContributor[];
  shelterID?: string;
  value: number;
};

export type CreateDonationResponse = {
  type: string;
  message: string;
};
