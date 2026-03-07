import { ButtonHTMLAttributes, ReactNode } from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  children: ReactNode;
  className?: string;
};

const Button = ({
  variant = 'primary',
  arrowLeft,
  arrowRight,
  children,
  className,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-gray-100 text-gray-700',
    tertiary: 'bg-transparent text-primary',
  };
  const arrowColorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-700',
    tertiary: 'text-primary',
  };

  return (
    <button
      className={`font-medium text-gray-50 flex items-center gap-2 rounded-lg px-8 py-4 hover:opacity-90 cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {arrowLeft && <ArrowLeftIcon className={arrowColorClasses[variant]} />}
      {children}
      {arrowRight && <ArrowRightIcon className={arrowColorClasses[variant]} />}
    </button>
  );
};

export default Button;
