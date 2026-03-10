type RadioCardProps = {
  value: 'shelter' | 'foundation';
  onChange: (value: 'shelter' | 'foundation') => void;
};

export default function RadioCard({ value, onChange }: RadioCardProps) {
  return (
    <div className='flex flex-row border border-gray-300 p-1 gap-2 rounded-xl'>
      <button
        type='button'
        onClick={() => onChange('shelter')}
        className={`flex-1 rounded-xl px-6 py-4 text-lg font-medium cursor-pointer transition ${
          value === 'shelter'
            ? 'bg-primary text-white'
            : 'text-gray-900 hover:bg-gray-100'
        }`}
      >
        Prispieť konkrétnemu útulku
      </button>
      <button
        type='button'
        onClick={() => onChange('foundation')}
        className={`flex-1 rounded-xl px-6 py-4 text-lg font-medium cursor-pointer transition ${
          value === 'foundation'
            ? 'bg-primary text-white'
            : 'text-gray-900 hover:bg-gray-100'
        }`}
      >
        Prispieť celej nadácii
      </button>
    </div>
  );
}
