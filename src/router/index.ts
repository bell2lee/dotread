import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignInView from '@/views/SignInView.vue';
import HomeView from '@/views/HomeView.vue';
import SignupView from '@/views/SignupView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
