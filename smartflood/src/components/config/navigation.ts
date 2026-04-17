import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY', 'CITY_WELFARE'],
    children: [
      {
        label: 'Home',
        href: '/dashboard',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
    ],
  },
  {
    label: 'Flood Monitoring',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
    children: [
      {
        label: 'Flood Dashboard',
        href: '/flood',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
      {
        label: 'Flood Heatmap',
        href: '/flood/heatmap',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
      {
        label: 'Sensor Map',
        href: '/flood/sensors',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
      {
        label: 'Flood History',
        href: '/flood/history',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
      {
        label: 'Alert Levels',
        href: '/flood/alerts',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'],
      },
    ],
  },

  {
    label: 'Sensor Management',
    roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
    children: [
      {
        label: 'Add Sensor',
        href: '/sensors/add',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'],
      },
      {
        label: 'Update Sensor',
        href: '/sensors/update',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER'],
      },
      {
        label: 'Sensor History',
        href: '/sensors/history',
        roles: ['SUPER_ADMIN', 'NDRRMO_OFFICER', 'BARANGAY'],
      },
    ],
  },

  {
    label: 'AI Relief Allocation',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
    children: [
      {
        label: 'Manual Allocation',
        href: '/relief/manual',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
      {
        label: 'AI-Optimized Suggestion',
        href: '/relief/ai',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
      {
        label: 'Allocation History',
        href: '/relief/history',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
      {
        label: 'Relief Request Form',
        href: '/relief/request',
        roles: ['BARANGAY'],
      },
      {
        label: 'Request History',
        href: '/relief/requests',
        roles: ['BARANGAY'],
      },
      {
        label: 'Allocation Status',
        href: '/relief/status',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
    ],
  },

  {
    label: 'Resident Information',
    roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
    children: [
      {
        label: 'Add Resident',
        href: '/residents/add',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
      {
        label: 'Update Resident',
        href: '/residents/update',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
      {
        label: 'Delete Resident',
        href: '/residents/delete',
        roles: ['SUPER_ADMIN', 'CITY_WELFARE', 'BARANGAY'],
      },
    ],
  },
];
