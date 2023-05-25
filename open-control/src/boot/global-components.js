import { boot } from 'quasar/wrappers';
import Page from 'components/Page/PageComponent.vue';
import PageBody from 'components/Page/PageBody.vue';
import PageNavbar from 'components/Page/PageNavbar.vue';

const globalComponents = {
  page: Page,
  'page-body': PageBody,
  'page-navbar': PageNavbar,
};

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key, globalComponents[key]);
  }
});
