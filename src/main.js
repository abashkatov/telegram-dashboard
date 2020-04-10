import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'
import Axios from 'axios'
import App from './App.vue'
import routes from './routes';
import CoreuiVue from '@coreui/vue';

Vue.use(CoreuiVue);
Vue.prototype.$http = Axios;
var user;
try {
  user = JSON.parse(localStorage.getItem('user') || '{}');
} catch(e) {
  user = {};
  localStorage.setItem('user', JSON.stringify(user));
}

if (user.token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = user.token;
}

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

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
