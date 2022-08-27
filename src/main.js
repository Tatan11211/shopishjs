// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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
