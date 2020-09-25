import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
  {
    path: '/votacoes',
    name: 'Votacoes',
    component: () => import(/* webpackChunkName: "votacoes" */ '../pages/Votacoes.vue'),
  },
  {
    path: '/resultados',
    name: 'Resultados',
    component: () => import(/* webpackChunkName: "resultados" */ '../pages/Resultados.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
