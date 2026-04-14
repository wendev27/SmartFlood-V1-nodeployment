import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Flood Monitoring',
    href: '/flood',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  {
    label: 'Sensor Management',
    href: '/sensors',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  {
    label: 'Relief Allocation',
    href: '/relief',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
  },
  {
    label: 'Residents',
    href: '/residents',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
  },
  {
    label: 'Accounts',
    href: '/accounts',
    roles: ['SUPER_ADMIN'],
  },
];
