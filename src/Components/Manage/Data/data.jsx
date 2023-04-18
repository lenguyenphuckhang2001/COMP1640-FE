import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilUser,
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
    icon: UilClipboardAlt,
    heading: 'Categories',
    routing: '/Account/Manage',
  },
  {
    icon: UilUsersAlt,
    heading: 'Statiscal analytics',
    routing: '/Account/Manage/statistical',
  },
  {
    icon: UilChart,
    heading: 'Download data',
    routing: '/Account/Manage/downloadData',
  },
];
