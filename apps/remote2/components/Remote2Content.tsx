'use client';

import { Button } from '@micro-frontend-demo/shared';

export function Remote2Content() {
  return (
    <div className="space-y-4">
      <p className="text-lg">This is the second remote application.</p>
      <Button onClick={() => console.log('Remote 2 clicked')}>
        Remote 2 Button
      </Button>
    </div>
  );
} 