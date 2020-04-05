import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'
import Axios from 'axios'
import App from './App.vue'
import routes from './routes';
import CoreuiVue from '@coreui/vue';

Vue.use(CoreuiVue);
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
