import FloodMapClient from '@/src/components/map/FloodMapClient';

export default function FloodPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Flood Monitoring</h1>

      <FloodMapClient />
    </div>
  );
}
