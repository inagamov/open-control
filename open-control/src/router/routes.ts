import { RouteRecordRaw } from 'vue-router';
import { ROUTE_PATHS } from 'src/constants/paths';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      {
        path: ROUTE_PATHS.HOME,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: ROUTE_PATHS.CHATS,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: ROUTE_PATHS.CHECKUPS,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: ROUTE_PATHS.PROFILE,
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
