'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProgress from './FormProgress';
import Button from '../ui/Button';
import DonationStep from './DonationStep';
import DonationStepPersonal from './DonationStepPersonal';
import DonationStepSummary from './DonationStepSummary';
import { donationFormSchema, DonationFormValues } from './schema';
import { useSubmitDonation } from '@/features/donations/hooks';
import { useShelters } from '@/features/shelters/hooks';
import DonationStepThankYou from './DonationStepThankYou';

export default function DonationForm() {
  const [step, setStep] = useState(1);
  const submitDonationMutation = useSubmitDonation();
  const { data: shelters = [], isLoading, isError } = useShelters();

  const shelterOptions = shelters.map(s => ({
    value: s.id,
    label: s.name,
  }));

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      donationTarget: 'foundation',
      shelterId: '',
      amount: 0,
      firstName: '',
      lastName: '',
      email: '',
      phonePrefix: '+421',
      phone: '',
      consent: false,
    },
  });

  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = form;

  const donationTarget = watch('donationTarget');
  const shelterId = watch('shelterId');
  const amount = watch('amount');
  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const email = watch('email');
  const phonePrefix = watch('phonePrefix');
  const phone = watch('phone');
  const consent = watch('consent');

  const handleNextStep = async () => {
    if (step === 1) {
      const isValid = await trigger(['donationTarget', 'shelterId', 'amount']);
      if (!isValid) return;
      setStep(2);
      return;
    }

    if (step === 2) {
      const isValid = await trigger([
        'firstName',
        'lastName',
        'email',
        'phonePrefix',
        'phone',
      ]);
      if (!isValid) return;
      setStep(3);
    }
  };

  const handleBackStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitForm = async () => {
    const isValid = await form.trigger();
    if (!isValid) return;

    const values = form.getValues();
    const payload = {
      contributors: [
        {
          firstName: values.firstName?.trim() || ' ',
          lastName: values.lastName?.trim(),
          email: values.email?.trim(),
          phone: `${values.phonePrefix}${values.phone.replace(/\s/g, '')}`,
        },
      ],
      value: values.amount,
      ...(values.shelterId ? { shelterID: values.shelterId } : {}),
    };
    console.log(JSON.stringify(payload));
    try {
      await submitDonationMutation.mutateAsync(payload);
      form.reset({
        donationTarget: 'foundation',
        shelterId: '',
        amount: 0,
        firstName: '',
        lastName: '',
        email: '',
        phonePrefix: '+421',
        phone: '',
        consent: false,
      });

      setStep(4);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex h-full w-full flex-col gap-10'>
      <FormProgress currentStep={step} />

      {step === 1 && (
        <DonationStep
          donationTarget={donationTarget}
          shelterId={shelterId}
          amount={amount}
          onDonationTargetChange={value => {
            setValue('donationTarget', value);

            if (value === 'foundation') {
              setValue('shelterId', '');
            }
          }}
          onShelterIdChange={value => setValue('shelterId', value)}
          onAmountChange={value => setValue('amount', value)}
          shelterError={errors.shelterId?.message}
          amountError={errors.amount?.message}
          shelterOptions={shelterOptions}
          shelterLoading={isLoading}
          shelterLoadError={
            isError ? 'Nepodarilo sa načítať útulky.' : undefined
          }
        />
      )}

      {step === 2 && (
        <DonationStepPersonal
          firstName={firstName}
          lastName={lastName}
          email={email}
          phonePrefix={phonePrefix}
          phone={phone}
          onFirstNameChange={value => setValue('firstName', value)}
          onLastNameChange={value => setValue('lastName', value)}
          onEmailChange={value => setValue('email', value)}
          onPhonePrefixChange={value => setValue('phonePrefix', value)}
          onPhoneChange={value => setValue('phone', value)}
          firstNameError={errors.firstName?.message}
          lastNameError={errors.lastName?.message}
          emailError={errors.email?.message}
          phoneError={errors.phone?.message}
        />
      )}

      {step === 3 && (
        <DonationStepSummary
          donationTarget={donationTarget}
          shelterName={
            shelterId === '1'
              ? 'Mestský útulok, Žilina'
              : shelterId === '2'
                ? 'Útulok Martin'
                : shelterId === '3'
                  ? 'Útulok Trenčín'
                  : ''
          }
          amount={amount}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phonePrefix={phonePrefix}
          phone={phone}
          consent={consent}
          onConsentChange={value => setValue('consent', value)}
          consentError={errors.consent?.message}
          submitDonationMutation={submitDonationMutation}
        />
      )}
      {step === 4 && (
        <DonationStepThankYou
          onBackHome={() => {
            form.reset({
              donationTarget: 'foundation',
              shelterId: '',
              amount: 0,
              firstName: '',
              lastName: '',
              email: '',
              phonePrefix: '+421',
              phone: '',
              consent: false,
            });
            submitDonationMutation.reset();
            setStep(1);
          }}
        />
      )}

      <div className='mt-auto flex flex-row items-center justify-between gap-3'>
        <Button arrowLeft variant='secondary' onClick={handleBackStep}>
          Späť
        </Button>

        {step < 3 && (
          <Button arrowRight variant='primary' onClick={handleNextStep}>
            Pokračovať
          </Button>
        )}

        {step === 3 && (
          <Button
            variant='primary'
            onClick={handleSubmitForm}
            disabled={submitDonationMutation.isPending}
          >
            {submitDonationMutation.isPending
              ? 'Odosielam...'
              : 'Odoslať formulár'}
          </Button>
        )}
      </div>
    </div>
  );
}
