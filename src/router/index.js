import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('../views/AboutView.vue') },
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