
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/study',
    name: 'Study',
    component: () => import('@/views/Study.vue')
  },
  /* 动态路由 */
  {
    path: '/learn/:name',
    name: 'Learn',
    component: () => import('@/views/learn.vue'),
    props: true // 路由传参
  },
  /* 嵌套路由 */
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  /* 命名视图 */
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      eamil: () => import('@/views/eamil.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  /* 路由重定向 */
  {
    path: '/main',
    redirect: '/'
    // redirect: {
    //   name: 'Home'
    // }
  }
]
