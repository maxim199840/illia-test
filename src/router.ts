import Vue from 'vue';
import Router from 'vue-router';
import User from './views/User.vue';
import Users from './views/Users.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user/:user?',
      props: true,
      name: 'user',
      component: User,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (router.resolve(to.path).route.name) {
    next();
  } else {
    return next({ name: 'users' });
  }
  next();
});
