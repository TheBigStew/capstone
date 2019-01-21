//jshint esversion: 6

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './components/Users.vue';
import Home from './components/Home.vue';
import  { store } from './store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
