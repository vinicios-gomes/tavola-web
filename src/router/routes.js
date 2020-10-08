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

export default routes;
