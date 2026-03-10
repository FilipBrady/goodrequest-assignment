import RadioCard from './RadioCard';
import AmountSelector from './AmountSelector';
import Select from './Select';

type DonationStepProps = {
  donationTarget: 'shelter' | 'foundation';
  shelterId: string;
  amount: number;
  onDonationTargetChange: (value: 'shelter' | 'foundation') => void;
  onShelterIdChange: (value: string) => void;
  onAmountChange: (value: number) => void;
};

export default function DonationStep({
  donationTarget,
  shelterId,
  amount,
  onDonationTargetChange,
  onShelterIdChange,
  onAmountChange,
}: DonationStepProps) {
  const shelterOptions = [
    { label: 'Útulok Žilina', value: '1' },
    { label: 'Útulok Martin', value: '2' },
    { label: 'Útulok Trenčín', value: '3' },
  ];

  const handleDonationTargetChange = (value: 'shelter' | 'foundation') => {
    onDonationTargetChange(value);

    if (value === 'foundation') {
      onShelterIdChange('');
    }
  };

  return (
    <div className='flex flex-col gap-8'>
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
            onChange={e => onShelterIdChange(e.target.value)}
            options={shelterOptions}
            placeholder='Vyberte útulok zo zoznamu'
          />
        </div>
      </div>
      <AmountSelector value={amount} onChange={onAmountChange} />
    </div>
  );
}
