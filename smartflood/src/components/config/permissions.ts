import { Permission } from '../types';

export const PERMISSIONS: Permission[] = [
  // Accounts
  { path: '/dashboard', roles: ['SUPER_ADMIN', 'BARANGAY', 'NDRRMO_OFFICER'] },
  // Sensors
  {
    path: '/sensors',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'CITY_WELFARE'],
  },
  {
    path: '/sensors/history',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  { path: '/sensors/add', roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'] },

  // Flood
  { path: '/flood', roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'] },

  // Relief
  { path: '/relief', roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'] },
  { path: '/relief/request', roles: ['BARANGAY'] },

  // Residents
  { path: '/residents', roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'] },

  // Accounts
  { path: '/accounts', roles: ['SUPER_ADMIN'] },
];
