import DonationStatsSection from '@/components/DonationStatsSection';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/page-container';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O Projekte | GoodBoy',
  description: 'Informácie o projekte podpory útulkov.',
};

export default function AboutProjectPage() {
  return (
    <PageContainer>
      <Link href='/' className='mb-10'>
        <Button variant='tertiary' arrowLeft className='!px-0'>
          Späť
        </Button>
      </Link>
      <h1 className='text-gray-900 font-bold text-5xl'>O projekte</h1>
      <main className='flex flex-col gap-10 my-10'>
        <p className='text-black'>
          Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na
          Slovensku. Zachraňujeme opustené, týrané a bezdomovské psy,
          poskytujeme im lekársku starostlivosť, útočisko a lásku, ktorú si
          zaslúžia. Naším poslaním je dať týmto verným spoločníkom druhú šancu
          na život tým, že im nájdeme milujúci domov. Okrem záchrany a
          rehabilitácie sa zameriavame aj na podporu zodpovedného vlastníctva
          zvierat a ochrany zvierat prostredníctvom vzdelávacích a komunitných
          programov.
        </p>
        <DonationStatsSection />
        <p className='text-black'>
          Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých
          darcov a komunity, ktorá sa hlboko stará o dobro zvierat. Organizujeme
          aj kastračné a sterilizačné iniciatívy, aby sme riešili problém
          túlavých psov a zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme,
          že každý pes si zaslúži bezpečný, milujúci domov a šťastný život.
          Pridajte sa k nám a pomôžte nám robiť zmeny – či už dobrovoľníctvom,
          darovaním alebo adopciou chlpatého priateľa. Spoločne môžeme vytvoriť
          lepšiu budúcnosť pre psy v Žiline.
        </p>
      </main>
      <Footer />
    </PageContainer>
  );
}
