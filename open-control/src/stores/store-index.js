import { defineStore } from 'pinia';
import { ROUTE_PATHS } from 'src/constants/paths';

export const useIndexStore = defineStore('index', {
  state: () => ({
    navItems: {
      home: { root: ROUTE_PATHS.HOME, to: ROUTE_PATHS.HOME, label: 'Главная' },
      chats: { root: ROUTE_PATHS.CHATS, to: ROUTE_PATHS.CHATS, label: 'Чаты' },
      meetings: {
        root: ROUTE_PATHS.MEETINGS,
        to: ROUTE_PATHS.MEETINGS,
        label: 'Встречи',
      },
      profile: {
        root: ROUTE_PATHS.PROFILE,
        to: ROUTE_PATHS.PROFILE,
        label: 'Я',
      },
    },
    usePageTransition: false,
    allowPageBackTransitionOnIOS: false,
  }),
});
