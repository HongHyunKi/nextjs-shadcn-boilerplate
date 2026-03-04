'use client';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function TextareaDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default</p>
        <Textarea placeholder="Type your message here." className="max-w-lg" />
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">With Label</p>
        <div className="grid max-w-lg gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
          <p className="text-muted-foreground text-sm">
            Your message will be copied to the support team.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Disabled</p>
        <Textarea disabled placeholder="Disabled" className="max-w-lg" />
      </div>
    </div>
  );
}
