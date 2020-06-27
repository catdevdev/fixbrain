import Vue from 'vue';
import VueRoutes from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common = {
  Authorization: `Bearer ${store.getters.token}`
};

Vue.config.productionTip = false;

Vue.use(VueRoutes);

const router = new VueRoutes({ routes, mode: 'history' });

// router.beforeEach((to, from, next) => {
//   to;
//   from;
//   if (store.state.typeTraining === 'multiplicationtable') {
//     next('/training/multiplicationtablen');
//     router.push('/training/multiplicationtablen');
//     console.log(1);
//   } else {
//     next();
//     console.log(2);
//   }
// });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
