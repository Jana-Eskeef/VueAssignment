// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
