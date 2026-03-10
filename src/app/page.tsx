import { Metadata } from 'next';
import FormPageLayout from '@/components/layout/FormPageLayout';
import DonationForm from '@/components/donation-form/DonationForm';

export const metadata: Metadata = {
  title: 'GoodBoy – Podporte útulky',
  description:
    'Prispievajte na slovenské útulky pre psy prostredníctvom nadácie GoodBoy.',
};

export default function Home() {

  return (
    <FormPageLayout>
      <DonationForm />
    </FormPageLayout>
  );
}
