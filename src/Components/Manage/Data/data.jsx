import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilChart,
    UilUser,
  } from "@iconscout/react-unicons";

export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
      routing: "/Account/Manage",
    },
    {
      icon: UilClipboardAlt,
      heading: "Categories",
      routing: "/Account/Manage/categories",
    },
    {
        icon: UilClipboardAlt,
        heading: "Department",
        routing: "/Account/Manage/department",
      },
    {
      icon: UilUsersAlt,
      heading: "Statiscal analytics",
      routing: "/Account/Manage/statistical",
    },
    {
      icon: UilChart,
      heading: 'Download data',
      routing: "/Account/Manage/downloadData",
    },
  ];