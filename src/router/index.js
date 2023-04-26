import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Signup_Login from '@/components/Signup_Login.vue';
import Order from '@/components/Order.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'signup_login',
    component: Signup_Login
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
