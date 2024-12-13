import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
