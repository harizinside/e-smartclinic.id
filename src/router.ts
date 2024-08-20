import { createRouter, createWebHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import { useAuthStore } from '@/stores/auth'
import SignIn from '@view/auth/SignInView.vue'
import ForgotPassword from '@view/auth/ForgotPasswordView.vue'
import Recovery from '@view/auth/RecoveryView.vue'
import RolePrivilage from '@view/admin/RolePrivilages.vue'
import Users from '@view/admin/UsersView.vue'
import AddOnArea from '@view/addon/AreaView.vue'
import AddOnUsers from '@view/addon/UserView.vue'
import Home from '@view/HomeView.vue'
import NotFound from '@view/NotFoundView.vue'

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
      next({ path: "/auth" })
    },
  },
  {
    path: '/',
    component: Home,
    meta: { auth: true }
  },
  {
    path: '/admin/users',
    component: Users,
    meta: { auth: true }
  },
  {
    path: '/admin/role-privilages',
    component: RolePrivilage,
    meta: { auth: true }
  },
  {
    path: '/add-on/area',
    component: AddOnArea,
    meta: { auth: true }
  },
  {
    path: '/add-on/users',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/clinic-info',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/practice-schedule',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/contacts',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/outpatient',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/payments',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/payments/process',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { auth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach(async (to, from) => {
  const authState = useAuthStore()

  if (to.meta.auth && import.meta.env.VITE_ENV !== 'development') {
    const url = HTTP_URI + '/legacy/token-valid';
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...HTTP_HEADER,
        Authorization: `Bearer ${authState.auth.TOKEN}`,
      }
    })

    if (!response.ok) {
      return { path: '/auth' }
    }
  }
})

export default router
