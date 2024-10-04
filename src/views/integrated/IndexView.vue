<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-3">
        <div class="sm:hidden">
          <label
            for="tabs"
            class="sr-only">Select a tab</label>
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select
            id="tabs"
            name="tabs"
            class="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500">
            <option
              v-for="(row, index) in tabs"
              :key="index"
              :selected="(row.state === tabState) ? true : false">
              {{ row.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav
            class="flex space-x-4"
            aria-label="Tabs">
            <button
              v-for="(row, index) in tabs"
              :key="index"
              :class="[row.state === tabState ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
              :aria-current="row.state === tabState ? 'page' : undefined"
              @click="changeTab(row.state)">
              {{ row.name }}
            </button>
          </nav>
        </div>
      </div>
      <div v-if="tabState === ListTabs.SATUSEHAT">
        <SatuSehat />
      </div>
      <div v-if="tabState === ListTabs.NOTIFPAYMENT">
        <NotifPayment />
      </div>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import NotifPayment from './components/NotifPayment.vue'
import SatuSehat from './components/SatuSehat.vue'

interface ITabs {
  name: string
  state: ListTabs
}

enum ListTabs {
  SATUSEHAT,
  NOTIFPAYMENT
}
const tabState = ref<ListTabs>(ListTabs.SATUSEHAT)
const navs = ref<INavigation[]>([
  { name: 'Integrated API', link: '/integrated', active: true }
])
const tabs = ref<ITabs[]>([
  { name: 'Satusehat', state: ListTabs.SATUSEHAT },
  { name: 'Notif Payment', state: ListTabs.NOTIFPAYMENT }
])
const changeTab = (args: ListTabs) => {
  tabState.value = args
}

useHead({
  title: 'Integrated API | e-Smart Clinic'
})
</script>
