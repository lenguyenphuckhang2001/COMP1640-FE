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
      routing: "/Account/admin",
    },
    {
      icon: UilClipboardAlt,
      heading: "Post",
      routing: "/Account/admin/post",
    },
    {
      icon: UilUsersAlt,
      heading: "User",
      routing: "/Account/admin/user",
    },
    {
      icon: UilChart,
      heading: 'Analytics',
      routing: "/Account/admin/analytics",
    },
  ];
  export const cardsData = [
    {
      title: "Users",
      color: {
        backGround: "#144272",
        boxShadow: "0px 10px 20px 0px rgb(10, 38, 71)",
      },
      barValue: 70,
      value: "25,970",
      png: UilUser,
      series: [
        {
          name: "Users",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Q&A Account",
      color: {
        backGround: "#144272",
        boxShadow: "0px 10px 20px 0px rgb(10, 38, 71)",
      },
      barValue: 80,
      value: "14,270",
      png: UilUsersAlt,
      series: [
        {
          name: "Q&A Account",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Posts",
      color: {
        backGround:
          "#144272",
        boxShadow: "0px 10px 20px 0px rgb(10, 38, 71)",
      },
      barValue: 60,
      value: "60",
      png: UilClipboardAlt,
      series: [
        {
          name: "Posts",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  export const DetailTagData = [
    {
      title: "JS",
      color: {
        backGround:
          "#144272",
        boxShadow: "0px 10px 20px 0px rgb(10, 38, 71)",
      },
      barValue: 60,
      value: "60",
      series: [
        {
          name: "JS",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
      ],
    },
    {
      title: "HTML",
      color: {
        backGround:
          "#144272",
        boxShadow: "0px 10px 20px 0px rgb(10, 38, 71)",
      },
      barValue: 30,
      value: "50",
      series: [
        {
          name: "HTML",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
      ],
    },
  ]

  