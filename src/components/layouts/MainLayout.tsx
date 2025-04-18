import React from 'react';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto mt-[64px] flex w-full max-w-[1200px] flex-1 flex-col p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
