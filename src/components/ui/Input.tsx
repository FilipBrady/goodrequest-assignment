import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    return (
      <div className='flex w-full flex-col gap-0'>
        {label && (
          <label htmlFor={id} className='text-sm font-medium text-gray-900'>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={`text-gray-900 placeholder-gray-400 font-normal w-full bg-gray-100 rounded-lg border border-transparent p-4 outline-none transition focus:border-gray-900 ${error ? 'border-red-500' : ''} ${className}`}
          arial-invalid={!!error}
          arial-describeby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className='text-sm font-normal text-red-500'>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
