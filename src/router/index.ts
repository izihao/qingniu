import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/dashboard/mb',
      children: [
        {
          path:'/dashboard',
          name:'dashboard',
          component:()=>import('../views/dashboard/mb.vue'),
          children:[
            {
              path:'/dashboard/mb',
              name:'mb',
              component:()=>import('../views/dashboard/mb.vue')
            }
          ]
        },
        {
          path: '/permission',
          name: 'permission',
          children: [
            {
              path: '/permission/menu',
              name: 'menu',
              component: () => import('../views/permission/menu.vue')
            },
            {
              path: '/permission/role',
              name: 'role',
              component: () => import('../views/permission/role.vue')
            },
            {
              path: '/permission/user',
              name: 'user',
              component: () => import('../views/permission/user.vue')
            }
          ]
        },
        {
          path: '/train',
          name: 'train',
          children: [
            {
              path: '/train/afterclass',
              name: 'afterclass',
              component: () => import('../views/train/afterclass.vue')
            },
            {
              path: '/train/character',
              name: 'character',
              component: () => import('../views/train/character.vue')
            },
            {
              path: '/train/classroom',
              name: 'classroom',
              component: () => import('../views/train/classroom.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    }
  ]
})


export default router
