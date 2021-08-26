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
    id: 'dashboard',
    title: 'Dashboard',
    messageId: 'sidebar.sample',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'page-1',
        title: 'Page -1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        url: '/sample/page-1',
      },
      {
        id: 'page-2',
        title: 'Page -2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        url: '/sample/page-2',
      },
    ],
  },
  {
    id: 'setting',
    title: 'Setting',
    messageId: 'sidebar.sample',
    type: 'collapse',
    icon: 'settings',
    children: [
      {
        id: 'page-3',
        title: 'Page -1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        url: '/sample/page-3',
      },
      {
        id: 'page-4',
        title: 'Page -2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        url: '/sample/page-4',
      },
    ],
  },
];
export default routesConfig;
