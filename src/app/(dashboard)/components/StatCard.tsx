type Props = {
  title: string;
  value: string;
  status: string;
};

export default function StatCard({ title, value, status }: Props) {
  return (
    <div className="bg-[#112E42] p-4 rounded-xl border border-white/10">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <p className="text-xs text-blue-400 mt-1">{status}</p>
    </div>
  );
}
