export type Role =
  | 'SUPER_ADMIN'
  | 'NDRRMO_OFFICER'
  | 'CITY_WELFARE'
  | 'BARANGAY';

export type SubItem = {
  label: string;
  href: string;
  roles: Role[];
};

export type NavItem = {
  label: string;
  icon?: string;
  roles: Role[];
  children?: SubItem[];
};

export type Permission = {
  path: string;
  roles: Role[];
};
