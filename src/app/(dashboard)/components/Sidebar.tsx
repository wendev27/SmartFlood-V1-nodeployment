export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#071821] border-r border-white/10 p-4">
      <h1 className="text-xl font-bold mb-6">🌊 SmartFlood</h1>

      <div className="text-xs text-gray-400 mb-2">MONITORING</div>
      <nav className="flex flex-col gap-2 mb-6">
        <a className="hover:bg-blue-500/20 p-2 rounded">Flood Monitoring</a>
        <a className="hover:bg-blue-500/20 p-2 rounded">Sensor Management</a>
      </nav>

      <div className="text-xs text-gray-400 mb-2">OPERATIONS</div>
      <nav className="flex flex-col gap-2 mb-6">
        <a className="hover:bg-blue-500/20 p-2 rounded">Relief Allocation</a>
        <a className="hover:bg-blue-500/20 p-2 rounded">Resident Info</a>
      </nav>

      <div className="text-xs text-gray-400 mb-2">SYSTEM</div>
      <nav className="flex flex-col gap-2">
        <a className="hover:bg-blue-500/20 p-2 rounded">Account Management</a>
      </nav>
    </aside>
  );
}
