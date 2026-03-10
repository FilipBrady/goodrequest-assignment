import { CreateDonationResponse, CreateDonationPayload } from '@/types/api';
import { UseMutationResult } from '@tanstack/react-query';

type DonationStepSummaryProps = {
  donationTarget: 'shelter' | 'foundation';
  shelterName?: string;
  amount: number;
  firstName?: string;
  lastName: string;
  email: string;
  phonePrefix: '+421' | '+420';
  phone: string;
  consent: boolean;
  onConsentChange: (value: boolean) => void;
  consentError?: string;
  submitDonationMutation: UseMutationResult<
    CreateDonationResponse,
    Error,
    CreateDonationPayload,
    unknown
  >;
};

export default function DonationStepSummary({
  donationTarget,
  shelterName,
  amount,
  firstName,
  lastName,
  email,
  phonePrefix,
  phone,
  consent,
  onConsentChange,
  consentError,
  submitDonationMutation,
}: DonationStepSummaryProps) {
  const donationTargetLabel =
    donationTarget === 'shelter'
      ? 'Finančný príspevok konkrétnemu útulku'
      : 'Finančný príspevok celej nadácii';

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-5xl font-bold text-gray-900'>
        Skontrolujte si zadané údaje
      </h1>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-semibold text-gray-900'>Zhrnutie</h2>

          <div className='grid grid-cols-2 gap-y-5'>
            <p className='text-gray-700'>Forma pomoci</p>
            <p className='text-right font-semibold text-gray-900'>
              {donationTargetLabel}
            </p>

            <p className='text-gray-700'>Útulok</p>
            <p className='text-right font-semibold text-gray-900'>
              {shelterName || '-'}
            </p>

            <p className='text-gray-700'>Suma príspevku</p>
            <p className='text-right font-semibold text-gray-900'>{amount} €</p>
          </div>
        </div>

        <div className='h-px w-full bg-gray-300' />

        <div className='grid grid-cols-2 gap-y-5'>
          <p className='text-gray-700'>Meno a priezvisko</p>
          <p className='text-right font-semibold text-gray-900'>
            {[firstName, lastName].filter(Boolean).join(' ')}
          </p>

          <p className='text-gray-700'>E-mail</p>
          <p className='text-right font-semibold text-gray-900'>{email}</p>

          <p className='text-gray-700'>Telefónne číslo</p>
          <p className='text-right font-semibold text-gray-900'>
            {phonePrefix} {phone}
          </p>
        </div>

        <div className='h-px w-full bg-gray-300' />

        <label className='flex flex-col items-start gap-2 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <input
              type='checkbox'
              checked={consent}
              onChange={e => onConsentChange(e.target.checked)}
              className='h-5 w-5 rounded border-gray-300 accent-primary'
            />
            <span className='text-gray-700'>
              Súhlasím so spracovaním mojich osobných údajov
            </span>
          </div>
          {consentError && (
            <p className='text-sm text-red-500'>{consentError}</p>
          )}
        </label>
      </div>
      {submitDonationMutation.isError && (
        <p className='text-sm text-red-500'>
          {submitDonationMutation.error instanceof Error
            ? submitDonationMutation.error.message
            : 'Nepodarilo sa odoslať formulár.'}
        </p>
      )}

      {submitDonationMutation.isSuccess && (
        <p className='text-sm text-green-600'>Formulár bol úspešne odoslaný.</p>
      )}
    </div>
  );
}
