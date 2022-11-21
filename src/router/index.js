import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/home',
    //   redirect: { name: 'home' }
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home',
      params: {
        requiresAuth: false
      }
    },
    {
      path: '/session',
      component: () => import('../views/Session/index.vue'),
      params: {
        requiresAuth: false
      },
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
      params: {
        requiresAuth: false
      },
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: '/chats',
      name: 'chats',
      params: {
        requiresAuth: true
      },
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
      }],
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name === 'chats' && (!sessionStorage.toRequiresAuth && !localStorage.toRequiresAuth)) {
    next('/session');
  } else next()
})

export default router;