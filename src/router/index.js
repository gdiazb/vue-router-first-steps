import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/home',
    //   redirect: { name: 'home' }
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home'
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
        component: () => import('../views/Chat/index.vue'),
        // props: true
        props: (route) => {
          return {
            chatId: route.params.chatId
          }
        }
      }]
    },
  ]
})

export default router;