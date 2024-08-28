import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import { useAuthStore } from '@/stores/auth'
import SignIn from '@view/auth/SignInView.vue'
import ForgotPassword from '@view/auth/ForgotPasswordView.vue'
import Recovery from '@view/auth/RecoveryView.vue'
import RolePrivilage from '@view/admin/role-privilage/IndexView.vue'
import RolePrivilageCreate from '@view/admin/role-privilage/AdditionalView.vue'
import Users from '@view/admin/UsersView.vue'
import AddOnArea from '@view/addon/AreaView.vue'
import AddOnUsers from '@view/addon/UserView.vue'
import Home from '@view/HomeView.vue'
import ClinicInfo from '@view/clinic-info/IndexView.vue'
import Patients from '@view/outpatient/IndexView.vue'
import Schedule from '@view/PracticeScheduleView.vue'
import OutPatients from '@view/outpatient/IndexView.vue'
import Payments from '@view/payment/IndexView.vue'
import MedicalRecord from '@view/MedicalRecordView.vue'
import NotFound from '@view/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  // TODO need to check if session still availbe then go to home
  {
    path: '/auth',
    component: SignIn,
    meta: {}
  },
  //* Authorization
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
    path: '/auth/sign-out',
    component: {
      beforeRouteEnter(_to, _from, next) {
        next()
      }
    },
    beforeEnter: async (_to, _from, next) => {
      const authState = useAuthStore()

      //! Delete session to server
      fetch(`${HTTP_URI}/legacy/auth/logout`, {
          method: 'DELETE',
          headers: {
              ...HTTP_HEADER,
              Authorization: `Bearer ${authState.auth.TOKEN}`
          }
      })
      
      localStorage.removeItem('__auth')
      next({ path: '/auth' })
    },
    meta: {}
  },
  {
    path: '/',
    component: Home,
    meta: { auth: true }
  },
  //* Administrator Router
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
    path: '/admin/role-privilages/create',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  //* Add On Router
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
  //* Clinic Info
  {
    path: '/clinic-info',
    component: ClinicInfo,
    meta: { auth: true }
  },
  {
    path: '/practice-schedule',
    component: Schedule,
    meta: { auth: true }
  },
  //* Pasien Route
  {
    path: '/contacts',
    component: Patients,
    meta: { auth: true }
  },
  {
    path: '/contacts/create',
    component: {
      beforeRouteLeave () {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (!answer) return false
      }
    },
    meta: { auth: true }
    
  },
  {
    path: '/outpatient',
    component: OutPatients,
    meta: { auth: true }
  },
  {
    path: '/payments',
    component: Payments,
    meta: { auth: true }
  },
  {
    path: '/payments/process',
    component: AddOnUsers,
    meta: { auth: true }
  },
  {
    path: '/mdical-record',
    component: MedicalRecord,
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

router.beforeEach(async (to, _from, next) => {
  const authState = useAuthStore()
  const url = HTTP_URI + '/legacy/token-valid'

  //* Check if need to be logged in then validate token
  if (to.meta.auth && import.meta.env.VITE_ENV !== 'development') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...HTTP_HEADER,
        Authorization: `Bearer ${authState.auth.TOKEN}`
      }
    })
        
    if (!response.ok) {
      return { path: '/auth/sign-out' }
    }

  }

  next()
})

export default router
