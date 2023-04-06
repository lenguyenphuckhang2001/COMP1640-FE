import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilUser,
} from '@iconscout/react-unicons';
import { useState } from 'react';
import { useEffect } from 'react';

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

export const DetailTagData = [
  {
    title: 'JS',
    color: {
      backGround: '#144272',
      boxShadow: '0px 10px 20px 0px rgb(10, 38, 71)',
    },
    barValue: 60,
    value: '60',
    series: [
      {
        name: 'JS',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'HTML',
    color: {
      backGround: '#144272',
      boxShadow: '0px 10px 20px 0px rgb(10, 38, 71)',
    },
    barValue: 30,
    value: '50',
    series: [
      {
        name: 'HTML',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  },
];
