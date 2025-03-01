import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  return (
    <div>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        😎 메인 페이지 !
      </h3>
    </div>
  );
}
