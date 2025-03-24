'use client';

import { Button } from '@micro-frontend-demo/shared';

export function ButtonContainer() {
  return (
    <div className="space-y-4">
      <Button onClick={() => console.log('Primary clicked')}>
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
        Secondary Button
      </Button>
    </div>
  );
} 