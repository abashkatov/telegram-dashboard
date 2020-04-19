import Vue from 'vue'
import {createStore} from './store'
import Axios from 'axios'
import App from './App.vue'
import {createRouter} from './routes';
import CoreuiVue from '@coreui/vue';
import { sync } from 'vuex-router-sync';

const store = createStore();
const router = createRouter();
sync(store, router);

Vue.use(CoreuiVue);
Vue.prototype.$http = Axios;

// if (user.token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = user.token;
// }

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.requiresAuth);
  const loggedIn = store.getters.isLoggedIn;

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  computed: {

  }
}).$mount('#app');
