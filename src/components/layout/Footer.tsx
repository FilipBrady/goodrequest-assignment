import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';

export default function Footer() {
  return (
    <footer className='border-t border-gray-300 bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between pt-6'>
        <Link href='/'>
          <Image src='logo.svg' alt='GoodBoy logo' width={124} height={32} />
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
