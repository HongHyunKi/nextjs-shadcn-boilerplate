'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SwitchDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Default</p>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Checked</p>
        <div className="flex items-center space-x-2">
          <Switch id="wifi" defaultChecked />
          <Label htmlFor="wifi">Wi-Fi</Label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Disabled</p>
        <div className="flex items-center space-x-2">
          <Switch id="disabled" disabled />
          <Label htmlFor="disabled" className="opacity-50">
            Disabled
          </Label>
        </div>
      </div>
    </div>
  );
}
