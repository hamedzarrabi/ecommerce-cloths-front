import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Signup_Login from '@/components/Signup_Login.vue';
import Order from '@/components/Order.vue';
import Shop from '@/views/ShopView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogView from "@/views/BlogView.vue";

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
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('accessToken');
  console.log();
  console.log("test token => " + token);
  console.log('UserId: ' + localStorage.getItem('userId'));
  if(to.matched.some(recored => recored.meta.requiresAuth) && !token) {
    if(!token) {
      next('/login');
    } else {
      next('/');
    }
  } else {
    next();
  }  
});

export default router
