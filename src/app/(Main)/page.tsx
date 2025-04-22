import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function MainPage() {
  return (
    <div>
      <h3>Main</h3>
    </div>
  );
}
