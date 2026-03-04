'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, Mail } from 'lucide-react';

export default function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Variants</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">With Icon</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="outline">
            <ChevronRight className="mr-2 h-4 w-4" />
            Continue
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">States</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button disabled>Disabled</Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
        </div>
      </div>
    </div>
  );
}
