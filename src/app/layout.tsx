import type { Metadata } from 'next';
import '../assets/css/globals.css';
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My Project',
  },
  description: 'the best project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth">
      <body className="font-pretendard flex min-h-screen flex-col">
        <Header />
        <main className="mt-[64px] flex flex-1 flex-col mx-auto w-full max-w-[1200px] p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
