type AmountSelectorProps = {
  value: number;
  onChange: (value: number) => void;
  error?: string;
};

const amountOptions = [5, 10, 20, 30, 50, 100];

export default function AmountSelector({
  value,
  onChange,
  error,
}: AmountSelectorProps) {
  const handleInputChange = (inputValue: string) => {
    const parsedValue = parseInt(inputValue);
    if (Number.isNaN(parsedValue)) {
      onChange(0);
      return;
    }
    onChange(parsedValue);
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <h3 className='w-full font-semibold text-gray-900'>
          Suma, ktorou chcem prispieť
        </h3>

        <div className='flex flex-col items-center gap-3'>
          <div className='flex items-end p-2.5 border-b-2 border-b-primary'>
            <input
              type='number'
              min='0'
              value={value}
              onChange={e => handleInputChange(e.target.value)}
              className='w-24 border-0 bg-transparent text-center text-6xl font-light text-gray-900 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            />
            <span className='text-3xl font-light text-gray-700'>€</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4'>
        {amountOptions.map(amount => {
          const isActive = value === amount;

          return (
            <button
              key={amount}
              type='button'
              onClick={() => onChange(amount)}
              className={`w-fit rounded-lg py-3 px-8 font-medium transition ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {amount} €
            </button>
          );
        })}
      </div>
      {error && <p className='text-sm text-red-500 text-center'>{error}</p>}
    </div>
  );
}
