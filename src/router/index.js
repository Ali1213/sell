import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello'
import header from 'components/header/header';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/header',
      component: header
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
});

export default router;
