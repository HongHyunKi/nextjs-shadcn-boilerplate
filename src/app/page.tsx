import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="p-4">
      <h1>hello world</h1>
      {/*<h1 className="text-3xl font-bold underline"> TailWind ! </h1>*/}
      <Button> Hello shadcn </Button>
    </div>
  );
}
