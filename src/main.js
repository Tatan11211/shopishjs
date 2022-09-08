// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/* import './assets/sass/custom.scss'; */
import Vuelidate from 'vuelidate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Admin from './layouts/Admin.vue';
import Default from './layouts/Default.vue';

Vue.component('admin-layout', Admin);
Vue.component('default-layout', Default);

Vue.use(Vuelidate);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
