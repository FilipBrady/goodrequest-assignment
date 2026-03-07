import { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};
export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className='mx-auto min-h-screen w-full max-w-7xl px-4 py-6'>
      {children}
    </div>
  );
}
