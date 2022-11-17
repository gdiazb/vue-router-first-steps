import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/session',
      component: () => import('../views/Session/index.vue'),
      children: [
        { 
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: '/chats',
      component: () => import('../views/Chats/index.vue'),
      children: [{
        path: ':chatId',
        component: () => import('../views/Chat/index.vue')
      }]
    },
  ]
})

export default router;