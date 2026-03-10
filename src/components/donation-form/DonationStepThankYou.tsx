import Button from '../ui/Button';

type DonationStepThankYouProps = {
  onBackHome: () => void;
};

export default function DonationStepThankYou({
  onBackHome,
}: DonationStepThankYouProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M20 6L9 17L4 12'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-primary'
          />
        </svg>
      </div>

      <div className='flex flex-col gap-3'>
        <h1 className='text-5xl font-bold text-gray-900'>
          Ďakujeme za Váš príspevok
        </h1>
        <p className='max-w-xl text-lg text-gray-600'>
          Váš formulár bol úspešne odoslaný. Veľmi si vážime, že pomáhate psíkom
          v útulkoch.
        </p>
      </div>

      <Button variant='primary' onClick={onBackHome}>
        Späť na začiatok
      </Button>
    </div>
  );
}
