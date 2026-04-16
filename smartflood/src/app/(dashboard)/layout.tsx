import Sidebar from '@/src/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = 'SUPER_ADMIN'; // temporary

  return (
    <div className="flex h-screen bg-[#f5f9ff]">
      <Sidebar role={role} />

      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}

// allocation status cahngte to relief distribiution
