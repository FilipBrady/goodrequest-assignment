'use client';

import { useDonationStats } from '@/features/stats/hooks';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('sk-SK').format(value);
}

export default function DonationStatsSection() {
  const { data, isLoading, isError, error } = useDonationStats();

  if (isLoading) {
    return (
      <div className='mx-8 flex flex-row flex-wrap items-center justify-evenly gap-10 border-y-2 border-gray-300 py-16'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h2 className='text-6xl font-semibold text-primary'>...</h2>
          <p className='text-lg font-medium text-gray-900'>
            Celková vyzbieraná hodnota
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h2 className='text-6xl font-semibold text-primary'>...</h2>
          <p className='text-lg font-medium text-gray-900'>Počet darcov</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='mx-8 border-y-2 border-gray-300 py-16 text-center'>
        <p className='text-red-500'>
          Nepodarilo sa načítať štatistiky
          {error instanceof Error ? `: ${error.message}` : '.'}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className='flex flex-row flex-wrap items-center justify-evenly gap-10 py-16 mx-8 border-2 border-t-gray-300 border-b-gray-300 border-l-0 border-r-0'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='text-primary text-6xl font-semibold'>
          {formatCurrency(data.contribution)}
        </h2>
        <p className='text-gray-900 text-lg font-medium'>
          Celková vyzbieraná hodnota
        </p>
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='text-primary text-6xl font-semibold'>
          {formatNumber(data.contributors)}
        </h2>
        <p className='text-gray-900 text-lg font-medium'>Počet darcov</p>
      </div>
    </div>
  );
}
