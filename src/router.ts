import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import { useAuthStore } from '@/stores/auth'
import SignIn from '@/views/auth/SignInView.vue'
import ForgotPassword from '@/views/auth/ForgotPasswordView.vue'
import Recovery from '@/views/auth/RecoveryView.vue'
import RolePrivilage from '@/views/admin/role-privilage/IndexView.vue'
import RolePrivilageCreate from '@/views/admin/role-privilage/AdditionalView.vue'
import Home from '@/views/HomeView.vue'
import Profile from '@/views/ProfileView.vue'
import Users from '@/views/admin/UsersView.vue'
import AddOnDiagnosis from '@/views/addon/DiagnosisView.vue'
import AddOnDisease from '@/views/addon/DiseaseView.vue'
import AddOnDrugs from '@/views/addon/DrugsViews.vue'
import AddOnIcd10 from '@/views/addon/Icd10View.vue'
import AddOnInsuranceGuarantee from '@/views/addon/InsuranceGuaranteeView.vue'
import AddOnPrognosis from '@/views/addon/PrognosisView.vue'
import AddOnServices from '@/views/addon/ServicesView.vue'
import ClinicInfo from '@/views/clinic-info/IndexView.vue'
import Patients from '@/views/contact/IndexView.vue'
import PatientsModif from '@/views/contact/ModifyView.vue'
import Schedule from '@/views/PracticeScheduleView.vue'
import OutPatients from '@/views/outpatient/IndexView.vue'
import Payments from '@/views/payment/IndexView.vue'
import MedicalRecord from '@/views/MedicalRecordView.vue'
import NotFound from '@/views/NotFoundView.vue'

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
  {
    path: '/profile',
    component: Profile,
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
    path: '/admin/role-privilages/create',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/blood-type',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/last-education',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/ethnic-group',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/marital-status',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/marketing',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/religion',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/title',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/working-status',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/title',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/region/provinces',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/region/citys',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/region/subdistricts',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/system/region/villages',
    component: RolePrivilageCreate,
    meta: { auth: true }
  },
  {
    path: '/add-on/drugs',
    component: AddOnDrugs,
    meta: { auth: true }
  },
  {
    path: '/add-on/services',
    component: AddOnServices,
    meta: { auth: true }
  },
  {
    path: '/add-on/insurance-guarantee',
    component: AddOnInsuranceGuarantee,
    meta: { auth: true }
  },
  {
    path: '/add-on/disease',
    component: AddOnDisease,
    meta: { auth: true }
  },
  {
    path: '/add-on/diagnosis',
    component: AddOnDiagnosis,
    meta: { auth: true }
  },
  {
    path: '/add-on/prognosis',
    component: AddOnPrognosis,
    meta: { auth: true }
  },
  {
    path: '/add-on/icd-10',
    component: AddOnIcd10,
    meta: { auth: true }
  },
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
  {
    path: '/contacts',
    component: Patients,
    meta: { auth: true }
  },
  {
    path: '/contacts/create',
    component: PatientsModif,
    meta: { auth: true }
  },
  {
    path: '/outpatient',
    component: OutPatients,
    meta: { auth: true }
  },
  {
    path: '/outpatient/insurance-guarantee',
    component: OutPatients,
    meta: { auth: true }
  },
  {
    path: '/medical-record',
    component: MedicalRecord,
    meta: { auth: true }
  },
    {
    path: '/inventory',
    component: OutPatients,
    meta: { auth: true }
  },
  {
    path: '/payments',
    component: Payments,
    meta: { auth: true }
  },
  {
    path: '/payments/online',
    component: Payments,
    meta: { auth: true }
  },
  {
    path: '/report/patients',
    component: MedicalRecord,
    meta: { auth: true }
  },
  {
    path: '/report/payment',
    component: MedicalRecord,
    meta: { auth: true }
  },
  {
    path: '/report/drugs',
    component: MedicalRecord,
    meta: { auth: true }
  },
  {
    path: '/crm/patients',
    component: MedicalRecord,
    meta: { auth: true }
  },
  {
    path: '/crm/payment',
    component: MedicalRecord,
    meta: { auth: true }
  },
  {
    path: '/crm/drugs',
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
