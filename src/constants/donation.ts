export const QuickDonationAmmount = [10, 20, 30, 40, 50, 100] as const;

export const DonationType = {
  SHELTER: 'shelter',
  FOUNDATION: 'foundation',
} as const;

export const FormSteps = [
  {
    id: 1,
    key: 'donation',
    label: 'Výber útulku',
  },
  {
    id: 2,
    key: 'personal-info',
    label: 'Osobné údaje',
  },
  {
    id: 3,
    key: 'summary',
    label: 'Potvrdenie',
  },
] as const;
