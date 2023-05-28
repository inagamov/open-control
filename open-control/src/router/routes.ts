import { RouteRecordRaw } from 'vue-router';
import { ROUTE_PATHS } from 'src/constants/paths';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: ROUTE_PATHS.HOME },
      {
        path: ROUTE_PATHS.HOME,
        component: () => import('pages/HomePage.vue'),
        children: [
          {
            path: ROUTE_PATHS.CHAT_BOT,
            component: () => import('pages/ChatBotPage.vue'),
          },
        ],
      },
      {
        path: ROUTE_PATHS.CHATS,
        component: () => import('pages/ChatsPage.vue'),
        children: [
          {
            path: ROUTE_PATHS.HOME + ROUTE_PATHS.CHAT_BOT,
            component: () => import('pages/ChatBotPage.vue'),
          },
        ],
      },
      {
        path: ROUTE_PATHS.MEETINGS,
        component: () => import('pages/HomePage.vue'),
        children: [
          {
            path: ROUTE_PATHS.HOME + ROUTE_PATHS.CHAT_BOT,
            component: () => import('pages/ChatBotPage.vue'),
          },
        ],
      },
      {
        path: ROUTE_PATHS.PROFILE,
        component: () => import('pages/ProfilePage.vue'),
        children: [
          {
            path: ROUTE_PATHS.PROFILE + ROUTE_PATHS.CHAT_BOT,
            component: () => import('pages/ChatBotPage.vue'),
          },
        ],
      },
    ],
  },

  {
    path: ROUTE_PATHS.SIGN_IN,
    component: () => import('pages/SignInPage.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
