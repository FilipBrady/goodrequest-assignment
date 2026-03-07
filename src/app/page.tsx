import PageContainer from '@/components/page-container';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GoodBoy – Podporte útulky',
  description: 'Prispievajte na slovenské útulky pre psy prostredníctvom nadácie GoodBoy.',
};

export default function Home() {
  return (
    <main>
      <PageContainer>
        <h1>Good Boy Donation Form</h1>
      </PageContainer>
    </main>
  );
}
