'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default</p>
        <div className="flex items-center space-x-2">
          <Checkbox id="default" />
          <Label htmlFor="default">Default checkbox</Label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Disabled</p>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">
            Disabled checkbox
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Multiple</p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="notifications" defaultChecked />
            <Label htmlFor="notifications">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing">Marketing emails</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="social" defaultChecked />
            <Label htmlFor="social">Social notifications</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
