import type { Metadata } from 'next';
import '../config/globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
