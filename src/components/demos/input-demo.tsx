'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default</p>
        <Input type="email" placeholder="Email" className="max-w-sm" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">With Label</p>
        <div className="grid max-w-sm gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Disabled</p>
        <Input disabled placeholder="Disabled" className="max-w-sm" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">File</p>
        <div className="grid max-w-sm gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </div>
    </div>
  );
}
