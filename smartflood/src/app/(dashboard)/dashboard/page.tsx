import StatCard from '../components/StatCard';
import MapPlaceholder from '../components/MapPlceholder';
import AIInsights from '../components/AIInsights';
import ActivityTable from '../components/ActivityTable';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* STAT CARDS */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Flood Zones" value="12" status="+3 today" />
        <StatCard title="Sensors Online" value="48/52" status="Stable" />
        <StatCard title="Relief Requests" value="27" status="Pending" />
        <StatCard title="Critical Alerts" value="3" status="Immediate" />
      </div>

      {/* MAP + AI */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <MapPlaceholder />
        </div>

        <AIInsights />
      </div>

      {/* TABLE */}
      <ActivityTable />
    </div>
  );
}
