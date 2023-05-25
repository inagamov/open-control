import { routerInstance } from 'boot/router';

export default function useGoBack() {
  let path = routerInstance.currentRoute.value.path.split('/');

  if (path.length > 2) {
    path.pop();
    path = path.join('/');
    routerInstance.push(path);
  }
}
