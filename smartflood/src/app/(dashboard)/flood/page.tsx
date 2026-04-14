import Card from '@/src/components/ui/card';

export default function FloodPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-[var(--primary)]">
        Flood Monitoring
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <p className="text-sm text-gray-500">Active Alerts</p>
          <h2 className="text-2xl font-bold text-[var(--primary)]">3</h2>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Sensors Online</p>
          <h2 className="text-2xl font-bold text-[var(--primary)]">12</h2>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">High Risk Areas</p>
          <h2 className="text-2xl font-bold text-red-500">2</h2>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <div className="h-[400px] flex items-center justify-center text-gray-400">
          Flood Heatmap (coming soon)
        </div>
      </Card>
    </div>
  );
}
