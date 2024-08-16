import { createRouter, createWebHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SignIn from '@view/auth/SignInView.vue'
import ForgotPassword from '@view/auth/ForgotPasswordView.vue'
import Recovery from '@view/auth/RecoveryView.vue'
import RolePrivilage from '@view/admin/RolePrivilages.vue'
import Users from '@view/admin/UsersView.vue'
import AddOnArea from '@view/addon/AreaView.vue'
import AddOnUsers from '@view/addon/UserView.vue'
import Home from '@view/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    component: SignIn,
    meta: {}
  },
  {
    path: '/auth/forgot-password',
    component: ForgotPassword,
    meta: {}
  },
  {
    path: '/auth/recovery/:id',
    component: Recovery,
    meta: {}
  },
  {
    path: "/auth/sign-out",
    component: {
      beforeRouteEnter(_to, _from, next) {
        next();
      },
    },
    beforeEnter: async (_to, _from, next) => {
      next({ path: "/auth" });
    },
  },
  {
    path: '/',
    component: Home,
    meta: {}
  },
  {
    path: '/admin/users',
    component: Users,
    meta: {}
  },
  {
    path: '/admin/role-privilages',
    component: RolePrivilage,
    meta: {}
  },
  {
    path: '/add-on/area',
    component: AddOnArea,
    meta: {}
  },
  {
    path: '/add-on/users',
    component: AddOnUsers,
    meta: {}
  },
  // Sample Component
  {
    path: '/clinic-info',
    component: AddOnUsers,
    meta: {}
  },
  {
    path: '/practice-schedule',
    component: AddOnUsers,
    meta: {}
  },
  {
    path: '/contacts',
    component: AddOnUsers,
    meta: {}
  },
  {
    path: '/outpatient',
    component: AddOnUsers,
    meta: {}
  },
  {
    path: '/payments',
    component: AddOnUsers,
    meta: {}
  },
  {
    path: '/payments/process',
    component: AddOnUsers,
    meta: {}
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
