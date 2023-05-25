import { boot } from 'quasar/wrappers';
import { storeToRefs } from 'pinia';
import { useIndexStore } from 'stores/store-index';
import { ROUTE_PATHS } from 'src/constants/paths';

const state = storeToRefs(useIndexStore());

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    const fromRootPath = from.path.split('/')[1];
    const toRootPath = to.path.split('/')[1];

    state.usePageTransition.value =
      fromRootPath === toRootPath ||
      [from.path, to.path].includes(ROUTE_PATHS.CHAT_BOT);

    next();
  });
});
