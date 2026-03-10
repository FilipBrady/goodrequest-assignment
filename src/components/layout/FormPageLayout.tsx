import Image from 'next/image';
import { ReactNode } from 'react';
import Footer from './Footer';

type FormPageLayoutProps = {
  children: ReactNode;
};

export default function FormPageLayout({ children }: FormPageLayoutProps) {
  return (
    <div>
      <div className='flex flex-row flew-wrap justify-between p-5'>
        <section className='w-1/2 px-16 pt-10'>
          <div className='w-full mb-10'>{children}</div>
          <Footer />
        </section>
        <section className='relative w-[45%] h-[calc(100vh-40px)]'>
          <Image
            src='/puppy.jpg'
            alt='Obrázok malého šteniatka'
            fill
            priority
            className='rounded-3xl object-cover'
          />
        </section>
      </div>
    </div>
  );
}
