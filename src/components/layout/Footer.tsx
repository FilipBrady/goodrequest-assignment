import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`max-w-7xl mx-auto border-t border-gray-300 bg-white ${className}`}
    >
      <div className='flex flex-wrap items-center justify-center sm:justify-between gap-5 pt-6 pb-14'>
        <Link href='/'>
          <Image src='/logo.svg' alt='GoodBoy logo' width={124} height={32} />
        </Link>
        <nav className='flex items-center gap-4 text-sm text-gray-700'>
          <Link
            href='https://www.facebook.com/'
            className='text-gray-600 font-normal cursor-pointer hover:underline'
          >
            <FacebookIcon width={16} height={16} />
          </Link>
          <Link
            href='https://www.instagram.com/'
            className='text-gray-600 font-normal cursor-pointer hover:underline'
          >
            <InstagramIcon width={16} height={16} />
          </Link>
          <Link
            href='/kontakt'
            className='text-gray-600 font-normal cursor-pointer hover:underline'
          >
            Kontakt
          </Link>
          <Link
            href='/o-projekte'
            className='text-gray-600 font-normal cursor-pointer hover:underline'
          >
            O projekte
          </Link>
        </nav>
      </div>
    </footer>
  );
}
