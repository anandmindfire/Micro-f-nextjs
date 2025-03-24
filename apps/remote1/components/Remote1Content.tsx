'use client';

import { Button } from '@micro-frontend-demo/shared';

export function Remote1Content() {
  return (
    <div className="space-y-4">
      <p className="text-lg">This is the first remote application.</p>
      <Button onClick={() => console.log('Remote 1 clicked')}>
        Remote 1 Button
      </Button>
    </div>
  );
} 