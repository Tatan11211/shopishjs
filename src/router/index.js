import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Fishing from '../views/Fishing.vue';
import Login from '../views/admin/Login.vue';
import ProductsCrud from '../views/admin/ProductsCrud.vue';
import AddProduct from '../views/admin/AddProduct.vue';
import Notfound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fishing',
    name: 'Fishing',
    component: Fishing,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'default' },
    component: Login,
  },
  {
    path: '/ProductsCrud',
    name: 'ProductsCrud',
    meta: { layout: 'admin' },
    component: ProductsCrud,
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    meta: { layout: 'admin' },
    component: AddProduct,
  },
  {
    path: '*',
    name: '404-view',
    meta: { layout: 'default' },
    component: Notfound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
