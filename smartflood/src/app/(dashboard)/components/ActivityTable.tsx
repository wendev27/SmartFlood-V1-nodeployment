export default function ActivityTable() {
  return (
    <div className="bg-[#112E42] p-4 rounded-xl border border-white/10">
      <h3 className="font-semibold mb-3">Recent Activity</h3>

      <table className="w-full text-sm text-left">
        <thead className="text-gray-400">
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="text-gray-300">
          <tr>
            <td>5:30</td>
            <td>Water Level ↑</td>
            <td>Brgy. Longos</td>
            <td className="text-yellow-400">Warning</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
