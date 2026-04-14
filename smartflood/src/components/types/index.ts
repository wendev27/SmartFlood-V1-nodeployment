export type Role =
  | 'SUPER_ADMIN'
  | 'NDRRMO_OFFICER'
  | 'CITY_WELFARE'
  | 'BARANGAY';

export type NavItem = {
  label: string;
  href: string;
  roles: Role[];
};
