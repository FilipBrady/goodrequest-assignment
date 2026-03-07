import EmailIcon from '@/components/icons/EmailIcon';
import MarkerIcon from '@/components/icons/MarkerIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/page-container';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontakt | GoodBoy',
  description: 'Kontaktné údaje nadácie GoodBoy.',
};

export default function ContactPge() {
  const contacts = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      subtitle: 'Our friendly team is here to help.',
      linkText: 'hello@goodrequest.com',
      link: 'mailto:hello@goodrequest.com',
    },
    {
      icon: <MarkerIcon />,
      title: 'Office',
      subtitle: 'Come say hello at our office HQ.',
      linkText: 'Obchodná 3D, 010 08 Žilina, Slovakia',
      link: 'https://maps.app.goo.gl/rPKNqseQj5c1Dpo58',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      subtitle: 'Mon-Fri from 8am to 5pm.',
      linkText: '+421 911 750 750',
      link: 'tel:+421 911 750 750',
    },
  ];

  return (
    <PageContainer>
      <Link href='/' className='mb-10'>
        <Button variant='tertiary' arrowLeft className='!px-0'>
          Späť
        </Button>
      </Link>
      <h1 className='text-gray-900 font-bold text-5xl'>Kontakt</h1>
      <main className='flex flex-col gap-10 px-3 md:px-10 lg:px-20 my-10'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20'>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center gap-5 text-cetner'
            >
              <div className='bg-[#A5B4FC1A] p-3 rounded-xl'>
                {contact.icon}
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h4 className='text-xl text-gray-900 font-semibold text-center'>
                  {contact.title}
                </h4>
                <p className='text-gray-600 font-normal text-center'>
                  {contact.subtitle}
                </p>
              </div>
              <a
                href={contact.link}
                target='_blank'
                className='text-primary font-medium text-center cursor-pointer hover:underline'
              >
                {contact.linkText}
              </a>
            </div>
          ))}
        </div>
        <Image
          src='/goldenretriever.jpg'
          alt='Krásny Zlatý Retríver'
          width={200}
          height={100}
          className='w-full h-auto max-h-92.5 object-cover rounded-3xl'
        />
      </main>
      <Footer />
    </PageContainer>
  );
}
