type IconProps = {
  className?: string;
};

export default function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      className={className}
    >
      <path
        d='M1 6.83333H12.6667M12.6667 6.83333L6.83333 1M12.6667 6.83333L6.83333 12.6667'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
