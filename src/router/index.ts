import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';

Vue.use(VueRouter);

const Concat = () => import(/* webpackChunkName: "concat" */ '../views/concat.vue');
const Solution = () => import(/* webpackChunkName: "solution" */ '../views/solution.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/solution',
    component: Solution,
  },
  {
    path: '/concat',
    name: 'concat',
    component: Concat,
  },
  {
    path: '*',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((_, __, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
