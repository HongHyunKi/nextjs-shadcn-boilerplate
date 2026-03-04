'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function SonnerDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Toast Types</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            onClick={() => toast('Event has been created.')}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success('Event has been created.')}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error('Something went wrong.')}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast('Event has been created.', {
                description: 'Sunday, December 03, 2023 at 9:00 AM',
              })
            }
          >
            With Description
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast('Event has been created.', {
                action: {
                  label: 'Undo',
                  onClick: () => toast('Event undone.'),
                },
              })
            }
          >
            With Action
          </Button>
        </div>
      </div>
    </div>
  );
}
