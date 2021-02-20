import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Channel from '../views/Channel.vue';
import PeopleView from '../views/PeopleView.vue';
import PageView from '../views/PageView.vue';
import Start from '../views/Start.vue';
import Form from '../views/Form.vue';
import GroupView from '../views/GroupView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Start
  },
  {
    path: '/verify',
    name: 'Form',
    component: Form,
    props: { name: 'verification' }
  },
  {
    path: '/create/page',
    name: 'CreatePage',
    component: Form,
    props: { name: 'NewPage' }
  },
  {
    path: '/create/group',
    name: 'CreateGroup',
    component: Form,
    props: { name: 'NewGroup' }
  },
  {
    path: '/group/:name/invite',
    name: 'GroupInvite',
    component: Form,
    props: { name: 'GroupInvite' }
  },
  {
    path: '/group/:name',
    name: 'GroupView',
    component: GroupView
  },
  {
    path: '/chat/:name',
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
