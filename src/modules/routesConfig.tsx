export interface NavItemProps {
  id: string;
  messageId: string;
  title: string;
  icon?: string;
  exact?: boolean;
  url?: string;
  type?: string;
  count?: number;
  color?: string;
  auth?: string[];
  children?: NavItemProps[] | NavItemProps;
}

const routesConfig: NavItemProps[] = [
  {
    id: 'setting',
    title: 'Setting',
    messageId: 'sidebar.app.setting',
    type: 'item',
    icon: 'settings',
    url: '/setting',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    messageId: 'sidebar.app.dashboard',
    type: 'item',
    icon: 'dashboard',
    url: '/dashboards/ctv',
  },
];
export default routesConfig;
