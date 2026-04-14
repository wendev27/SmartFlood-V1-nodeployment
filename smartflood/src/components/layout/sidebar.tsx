'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '../config/navigation';
import { Role } from '../types';

type SidebarProps = {
  role: Role;
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const filteredNav = NAV_ITEMS.filter((item) => item.roles.includes(role));

  return (
    <aside className="w-64 bg-[var(--sidebar)] text-white flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10">
        <h1 className="text-lg font-semibold tracking-wide">SmartFlood</h1>
        <p className="text-xs text-white/60 mt-1">Command Center</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {filteredNav.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-[var(--primary)] text-white shadow'
                  : 'text-white/80 hover:bg-[var(--accent)] hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/10 text-xs text-white/50">
        SmartFlood v1.0
      </div>
    </aside>
  );
}
