import { boot } from 'quasar/wrappers';
import { storeToRefs } from 'pinia';
import { useIndexStore } from 'stores/store-index';
import { ROUTE_PATHS } from 'src/constants/paths';

const state = storeToRefs(useIndexStore());

let routerInstance = null;

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    routerInstance = router;

    const fromRootPath = '/' + from.path.split('/')[1];
    const toRootPath = '/' + to.path.split('/')[1];

    // prevent animation on changing a section
    state.usePageTransition.value =
      fromRootPath === toRootPath ||
      [from.path, to.path].includes(ROUTE_PATHS.CHAT_BOT);

    // go to root page when on the same section
    if (from.path === to.path && to.path !== toRootPath) {
      next(toRootPath);
    }

    // save child path to return to it when user will come back from another section
    for (const key in state.navItems.value) {
      if (toRootPath === state.navItems.value[key].root) {
        state.navItems.value[key].to = to.path;
      }
    }

    next();
  });
});

export { routerInstance };
