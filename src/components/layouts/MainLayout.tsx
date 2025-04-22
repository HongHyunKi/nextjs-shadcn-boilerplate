import React from 'react';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

function MainLayout({ children }) {
  return (
    <div className="max-w flex min-h-screen w-full flex-col">
      <Header />
      <main
        className={
          'flex-co mx-auto mt-[var(--header-height)] flex w-full max-w-[var(--container-max-width)] flex-1 p-8 px-[var(--container-px)]'
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
