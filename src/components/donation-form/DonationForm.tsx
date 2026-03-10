'use client';
import React, { useState } from 'react';
import FormProgress from './FormProgress';
import RadioCard from './RadioCard';
import Button from '../ui/Button';
import Select from './Select';
import AmountSelector from './AmountSelector';

export default function DonationForm() {
  const [donationTarget, setDonationTarget] = useState<
    'shelter' | 'foundation'
  >('foundation');
  const [shelterId, setShelterId] = useState('');
  const [amount, setAmount] = useState(0);
  const shelterOptions = [
    { label: 'Útulok Žilina', value: '1' },
    { label: 'Útulok Martin', value: '2' },
    { label: 'Útulok Trenčín', value: '3' },
  ];

  const handleDonationTargetChange = (value: 'shelter' | 'foundation') => {
    setDonationTarget(value);
    if (value === 'foundation') {
      setShelterId('');
    }
  };
  return (
    <div className='flex flex-col gap-10'>
      <FormProgress currentStep={1} />
      <h1 className='text-gray-900 text-5xl font-bold'>
        Vyberte si možnosť, ako chcete pomôcť
      </h1>
      <RadioCard value={donationTarget} onChange={handleDonationTargetChange} />
      <div className='flex flex-col gap-4 mt-10'>
        <h2 className='font-bold text-gray-900'>O projekte</h2>

        <div className='flex flex-col gap-2'>
          <label htmlFor='shelterId' className='text-sm text-gray-900'>
            Útulok
            <span className='ml-1 text-gray-400'>
              {donationTarget === 'foundation' ? '(Nepovinné)' : '(Povinné)'}
            </span>
          </label>

          <Select
            id='shelterId'
            value={shelterId}
            onChange={e => setShelterId(e.target.value)}
            options={shelterOptions}
            placeholder='Vyberte útulok zo zoznamu'
          />
        </div>
      </div>
      <AmountSelector value={amount} onChange={setAmount} />
      <div className='flex flex-row justify-between items-center gap-3'>
        <Button arrowLeft={true} variant='secondary'>
          Späť
        </Button>
        <Button arrowRight={true} variant='primary'>
          Pokračovať{' '}
        </Button>
      </div>
    </div>
  );
}
