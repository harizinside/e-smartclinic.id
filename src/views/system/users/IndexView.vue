<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-4">
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
              v-for="tab in tabs"
              :key="tab.name"
              :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav
            class="flex space-x-4"
            aria-label="Tabs">
            <button
              v-for="tab in tabs"
              :key="tab.name"
              :class="[tab.current ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
              :aria-current="tab.current ? 'page' : undefined">
              {{ tab.name }}
            </button>
          </nav>
        </div>
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
import BloodComponent from './BloodComponent.vue'
import EthnicGroupComponent from './EthnicGroupComponent.vue'
import LastEducationComponent from './LastEducationComponent.vue'
import MaritalStatusComponent from './MaritalStatusComponent.vue'
import ReligionComponent from './ReligionComponent.vue'
import TitleComponent from './TitleComponent.vue'
import WorkingStatusComponent from './WorkingStatusComponent.vue'

const tabSwitch = ref<string>('Blood Type')

const navs = ref<INavigation[]>([
  { name: 'System', link: '/add-on', active: false },
  { name: 'Users (Interface)', link: '/add-on/users', active: true }
])

const tabs = ref([
  { name: 'Blood Type', href: '#', current: false },
  { name: 'Ethnic Group', href: '#', current: false },
  { name: 'Educations', href: '#', current: true },
  { name: 'Marital Status', href: '#', current: false },
  { name: 'Religion', href: '#', current: false },
  { name: 'Title', href: '#', current: false },
  { name: 'Working Status', href: '#', current: false }
])

const switchTabs = (args: string) => {

}

useHead({
  title: 'Users (Interface) | e-Smart Clinic'
})
</script>
