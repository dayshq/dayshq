import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Channel from '../views/Channel.vue';
import PeopleView from '../views/PeopleView.vue';
import PageView from '../views/PageView.vue';
import Start from '../views/Start.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Start
  },
  {
    path: '/channel/:name',
    name: 'Channel',
    component: Channel
  },
  {
    path: '/people/:username',
    name: 'PeopleView',
    component: PeopleView
  },
  {
    path: '/page/:name',
    name: 'PageView',
    component: PageView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
