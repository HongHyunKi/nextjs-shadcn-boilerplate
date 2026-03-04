'use client';

import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

export default function ToggleDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default</p>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Outline</p>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Disabled</p>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle disabled aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </div>
  );
}
