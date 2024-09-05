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
              v-for="(row, index) in tabs"
              :key="index"
              :selected="(row.state === tabState) ? true : false">
              {{ row }}
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
              @click="switchTabs(row.state)">
              {{ row.name }}
            </button>
          </nav>
        </div>
        <div class="pt-4">
          <BloodComponent v-if="tabState === ListTabs.BLOODTYPE" />
          <EthnicGroupComponent v-if="tabState === ListTabs.ETHNICGROUP" />
          <LastEducationComponent v-if="tabState === ListTabs.EDUCATIONS" />
          <MaritalStatusComponent v-if="tabState === ListTabs.MARITALSTATUS" />
          <ReligionComponent v-if="tabState === ListTabs.RELIGION" />
          <TitleComponent v-if="tabState === ListTabs.TITLE" />
          <WorkingStatusComponent v-if="tabState === ListTabs.WORKINGSTATUS" />
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

enum ListTabs {
  BLOODTYPE,
  ETHNICGROUP,
  EDUCATIONS,
  MARITALSTATUS,
  RELIGION,
  TITLE,
  WORKINGSTATUS
}

interface ITabs {
  name: string
  state: ListTabs
}

const tabState = ref<ListTabs>(ListTabs.BLOODTYPE)

const navs = ref<INavigation[]>([
  { name: 'System', link: '/add-on', active: false },
  { name: 'Users (Interface)', link: '/add-on/users', active: true }
])

const tabs = ref<ITabs[]>([ 
  { name: 'Blood Type', state: ListTabs.BLOODTYPE },
  { name: 'Ethnic Group', state: ListTabs.ETHNICGROUP },
  { name: 'Educations', state: ListTabs.EDUCATIONS },
  { name: 'Marital Status', state: ListTabs.MARITALSTATUS },
  { name: 'Religion', state: ListTabs.RELIGION },
  { name: 'Title', state: ListTabs.TITLE },
  { name: 'Working Status', state: ListTabs.WORKINGSTATUS }
])

const switchTabs = (args: ListTabs) => {
  tabState.value = args
}

useHead({
  title: 'Users (Interface) | e-Smart Clinic'
})
</script>
