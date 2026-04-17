'use client';

import dynamic from 'next/dynamic';

const FloodMap = dynamic(() => import('./FloodMap'), {
  ssr: false,
});

export default function FloodMapClient() {
  return <FloodMap />;
}
