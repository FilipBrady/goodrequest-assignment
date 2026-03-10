import { SelectHTMLAttributes } from 'react';

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  label?: string;
  error?: string;
  placeholder?: string;
};

export default function Select({
  options,
  label,
  error,
  placeholder,
  id,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className='flex w-full flex-col gap-2'>
      {label && (
        <label htmlFor={id} className='text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}

      <div className='relative'>
        <select
          id={id}
          className={`w-full appearance-none rounded-2xl border border-transparent bg-gray-100 p-4 pr-14 text-lg text-gray-900 placeholder-gray-400 outline-none transition focus:rounded-b-none ${error ? 'border-red-500' : ''} ${className}`}
          aria-invalid={!!error}
          {...props}
        >
          {placeholder && <option value=''>{placeholder}</option>}

          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className='pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='14'
            viewBox='0 0 22 14'
            fill='none'
          >
            <path
              d='M20 2L11 11L2 2'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>

      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
}
