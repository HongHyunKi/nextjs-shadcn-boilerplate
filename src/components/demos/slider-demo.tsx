'use client';

import { Slider } from '@/components/ui/slider';

export default function SliderDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default (50)</p>
        <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">With Step (25)</p>
        <Slider defaultValue={[25]} max={100} step={25} className="max-w-sm" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Range (75)</p>
        <Slider defaultValue={[75]} max={100} step={1} className="max-w-sm" />
      </div>
    </div>
  );
}
