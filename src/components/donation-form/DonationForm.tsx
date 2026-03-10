'use client';
import React, { useState } from 'react';
import FormProgress from './FormProgress';
import RadioCard from './RadioCard';
import Button from '../ui/Button';
import Select from './Select';
import AmountSelector from './AmountSelector';
import DonationStep from './DonationStep';
import DonationStepPersonal from './DonationStepPersonal';

export default function DonationForm() {
  const [step, setStep] = useState(1);

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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonePrefix, setPhonePrefix] = useState<'+421' | '+420'>('+421');
  const [phone, setPhone] = useState('');
  return (
    <div className='flex flex-col gap-10'>
      <FormProgress currentStep={step} />
      {step === 1 && (
        <DonationStep
          donationTarget={donationTarget}
          shelterId={shelterId}
          amount={amount}
          onDonationTargetChange={setDonationTarget}
          onShelterIdChange={setShelterId}
          onAmountChange={setAmount}
        />
      )}
      {step === 2 && (
        <DonationStepPersonal
          firstName={firstName}
          lastName={lastName}
          email={email}
          phonePrefix={phonePrefix}
          phone={phone}
          onFirstNameChange={setFirstName}
          onLastNameChange={setLastName}
          onEmailChange={setEmail}
          onPhonePrefixChange={setPhonePrefix}
          onPhoneChange={setPhone}
        />
      )}
      <div className='flex flex-row justify-between items-center gap-3'>
        <Button
          arrowLeft={true}
          variant='secondary'
          onClick={() => setStep(step !== 1 ? step - 1 : step)}
        >
          Späť
        </Button>
        <Button
          arrowRight={true}
          variant='primary'
          onClick={() => setStep(step !== 3 ? step + 1 : step)}
        >
          Pokračovať
        </Button>
      </div>
    </div>
  );
}
