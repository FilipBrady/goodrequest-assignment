'use client';

import { useEffect, useRef, useState } from 'react';
import CzechIcon from '../icons/CzechIcon';
import SlovakIcon from '../icons/SlovakIcon';

type Prefix = '+421' | '+420';

type PhonePrefixSelectProps = {
  value: Prefix;
  onChange: (value: Prefix) => void;
};

const OPTIONS: Array<{
  value: Prefix;
  label: string;
  Icon: React.ComponentType<{ width?: number; height?: number }>;
}> = [
  { value: '+421', label: 'Slovensko', Icon: SlovakIcon },
  { value: '+420', label: 'Cesko', Icon: CzechIcon },
];

export default function PhonePrefixSelect({
  value,
  onChange,
}: PhonePrefixSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = OPTIONS.find(option => option.value === value) ?? OPTIONS[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={rootRef} className='relative w-31'>
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label='Vyberte predvolbu'
        className='flex w-full items-center justify-between rounded-2xl border border-transparent bg-gray-100 p-4 text-gray-900 outline-none transition'
      >
        <selected.Icon width={20} height={20} />

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='12'
          viewBox='0 0 18 12'
          fill='none'
          className={`${open ? 'rotate-180' : ''} transition-transform`}
        >
          <path
            d='M16 2L9 9L2 2'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {open && (
        <div className='absolute left-0 right-0 z-20 mt-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg'>
          <ul role='listbox' className='flex flex-col gap-1'>
            {OPTIONS.map(option => (
              <li key={option.value}>
                <button
                  type='button'
                  role='option'
                  aria-selected={option.value === value}
                  aria-label={option.label}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-center rounded-xl p-3 ${
                    option.value === value ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <option.Icon width={20} height={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
