'use client';
import { NAV_ITEMS } from '../config/navigation';
import { Role } from '../types';
import { useState } from 'react';

// const role: Role = 'CITY_WELFARE'; // temporary
type SidebarProps = {
  role: Role;
};

export default function Sidebar({ role }: SidebarProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <aside className="w-64 bg-[#0b3a66] text-white p-4">
      <h1 className="text-xl font-bold mb-6">
        {role}
        <div className="text-sm font-normal opacity-70">{role} Portal</div>
      </h1>

      {NAV_ITEMS.map((module) => {
        if (!module.roles.includes(role)) return null;

        return (
          <div key={module.label} className="mb-3">
            <button
              onClick={() =>
                setOpen(open === module.label ? null : module.label)
              }
              className="w-full flex justify-between items-center p-2 hover:bg-white/10 rounded"
            >
              {module.label}
            </button>

            {open === module.label && (
              <div className="ml-3 mt-1 space-y-1 text-sm">
                {module.children?.map((sub) => {
                  if (!sub.roles.includes(role)) return null;

                  return (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className="block p-1 hover:text-[#61c2ff]"
                    >
                      • {sub.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
