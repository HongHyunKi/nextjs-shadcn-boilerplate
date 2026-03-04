'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Animated</p>
        <Progress value={progress} className="max-w-md" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Static Values</p>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">25%</p>
            <Progress value={25} className="max-w-md" />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">50%</p>
            <Progress value={50} className="max-w-md" />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">75%</p>
            <Progress value={75} className="max-w-md" />
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">100%</p>
            <Progress value={100} className="max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
