const test_menu = [
  {
    name: 'test',
    path: '/test',
    // component: Test,
    icon: 'ChatRound',
    children: [
      {
        name: 'test1',
        path: '/test/test1',
        // component: Test1,
        icon: 'RefreshRight',
      },
      {
        name: 'test2',
        path: '/test/test2',
        // component: Test2,
        icon: 'RefreshLeft',
        children: [
          {
            name: 'test2-1',
            path: '/test/test2/test2-1',
            // component: Test2_1,
            icon: 'Bell',
          }
        ],
      },
    ],
  },
  {
    name: 'test3',
    path: '/test3',
    // component: Test3,
    icon: 'Close',
  },
  {
    name: 'test4',
    path: '/test4',
    // component: Test4,
    icon: 'MoreFilled',
  }
];

export default {
  routes: test_menu,
};