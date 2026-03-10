'use client';

import Input from '@/components/ui/Input';
import PhonePrefixSelect from './PhonePrefixSelect';

type DonationStepPersonalProps = {
  firstName?: string;
  lastName: string;
  email: string;
  phonePrefix: '+421' | '+420';
  phone: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhonePrefixChange: (value: '+421' | '+420') => void;
  onPhoneChange: (value: string) => void;
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  phoneError?: string;
};
export default function DonationStepPersonal({
  firstName,
  lastName,
  email,
  phonePrefix,
  phone,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhonePrefixChange,
  onPhoneChange,
  firstNameError,
  lastNameError,
  emailError,
  phoneError,
}: DonationStepPersonalProps) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-gray-900 text-5xl font-bold'>
          Potrebujeme od Vás zopár informácií
        </h1>
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='font-bold text-gray-900'>O vás</h2>

        <div className='grid grid-cols-2 gap-6'>
          <Input
            id='firstName'
            label='Meno'
            placeholder='Zadajte Vaše meno'
            value={firstName}
            onChange={e => onFirstNameChange(e.target.value)}
            error={firstNameError}
          />

          <Input
            id='lastName'
            label='Priezvisko'
            placeholder='Zadajte Vaše priezvisko'
            value={lastName}
            onChange={e => onLastNameChange(e.target.value)}
            error={lastNameError}
          />
        </div>

        <Input
          id='email'
          type='email'
          label='E-mailová adresa'
          placeholder='Zadajte Váš e-mail'
          value={email}
          onChange={e => onEmailChange(e.target.value)}
          error={emailError}
        />

        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='text-sm font-medium text-gray-900'>
            Telefónne číslo
          </label>

          <div className='flex gap-4'>
            <PhonePrefixSelect
              value={phonePrefix}
              onChange={onPhonePrefixChange}
            />

            <Input
              type='tel'
              value={phone}
              prefix={phonePrefix}
              onChange={e => onPhoneChange(e.target.value)}
              placeholder='123 321 123'
              className='bg-transparent outline-none w-full'
              error={phoneError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
