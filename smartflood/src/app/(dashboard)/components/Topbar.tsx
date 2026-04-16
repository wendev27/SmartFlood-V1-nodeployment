export default function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#0B1E2D]">
      <div>
        <h2 className="text-lg font-semibold">Command Center</h2>
        <p className="text-xs text-gray-400">Real-time Monitoring</p>
      </div>

      <div className="flex items-center gap-6 text-sm">
        <span>🌧 Rainfall: Moderate</span>
        <span>⚠ Alerts: 3</span>
        <span>👤 Admin</span>
      </div>
    </header>
  );
}
