import React from 'react';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="mx-auto mt-[var(--header-height)] flex w-full max-w-[var(--container-max-width)] flex-1 flex-col p-8 px-[var(--container-px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
