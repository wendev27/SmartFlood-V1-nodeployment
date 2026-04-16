import { Permission } from '../types';

export const PERMISSIONS: Permission[] = [
  // Flood Monitoring
  {
    path: '/flood/heatmap',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  {
    path: '/flood/sensors',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  {
    path: '/flood/history',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  { path: '/flood/alerts', roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'] },

  // Sensors
  {
    path: '/sensors/history',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
  },
  { path: '/sensors/add', roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'] },
  { path: '/sensors/update', roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'] },

  // Relief
  {
    path: '/relief/manual',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
  },
  { path: '/relief/ai', roles: ['SUPER_ADMIN', 'CITY_WELFARE'] },
  { path: '/relief/history', roles: ['SUPER_ADMIN', 'CITY_WELFARE'] },
  { path: '/relief/request', roles: ['BARANGAY'] },
  {
    path: '/relief/status',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
  },

  // Residents
  { path: '/residents', roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'] },

  // Accounts
  { path: '/accounts', roles: ['SUPER_ADMIN'] },
];
