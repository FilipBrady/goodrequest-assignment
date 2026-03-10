import CzechIcon from '../icons/CzechIcon';
import SlovakIcon from '../icons/SlovakIcon';

type PhonePrefixSelectProps = {
  value: '+421' | '+420';
  onChange: (value: '+421' | '+420') => void;
};

export default function PhonePrefixSelect({
  value,
  onChange,
}: PhonePrefixSelectProps) {
  return (
    <div className='relative w-31'>
      <select
        value={value}
        onChange={e => onChange(e.target.value as '+421' | '+420')}
        className='w-full appearance-none rounded-2xl border border-transparent bg-gray-100 p-4 pr-10 text-gray-900 outline-none transition focus:rounded-b-none'
      >
        <option value='+421'>+421</option>
        <option value='+420'>+420</option>
      </select>

      <div className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='12'
          viewBox='0 0 18 12'
          fill='none'
        >
          <path
            d='M16 2L9 9L2 2'
            stroke='currentColor'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  );
}
