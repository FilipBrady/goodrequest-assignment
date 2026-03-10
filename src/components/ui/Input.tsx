import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  prefix?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, prefix, id, className = '', ...props }, ref) => {
    return (
      <div className='flex w-full flex-col gap-1'>
        {label && (
          <label htmlFor={id} className='text-sm font-medium text-gray-900'>
            {label}
          </label>
        )}

        <div
          className={`flex items-center w-full bg-gray-100 rounded-lg border border-transparent px-4 py-4 transition focus-within:border-gray-900 ${
            error ? 'border-red-500' : ''
          }`}
        >
          {prefix && <span className='mr-2 text-gray-900'>{prefix}</span>}

          <input
            ref={ref}
            id={id}
            className={`flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 font-normal ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
        </div>

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
