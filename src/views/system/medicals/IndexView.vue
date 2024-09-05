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
              @click="switchTabs(row.state)">
              {{ row.name }}
            </button>
          </nav>
        </div>
        <div class="pt-4">
          <Icd10Component v-if="tabState === ListTabs.ICD10" />
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
import Icd10Component from './Icd10Component.vue'

enum ListTabs {
  ICD10,
  DISEASE,
  DIAGNOSIS,
  PROGNOSIS
}

interface ITabs {
  name: string
  state: ListTabs
}

const tabState = ref<ListTabs>(ListTabs.ICD10)

const navs = ref<INavigation[]>([
  { name: 'System', link: '/add-on', active: false },
  { name: 'Medicals (Interface)', link: '/add-on/medicals', active: true }
])

const tabs = ref<ITabs[]>([ 
  { name: 'Icd-10', state: ListTabs.ICD10 },
  { name: 'Disease', state: ListTabs.DISEASE },
  { name: 'Diagnosis', state: ListTabs.DIAGNOSIS },
  { name: 'Prognosis', state: ListTabs.PROGNOSIS }
])

const switchTabs = (args: ListTabs) => {
  tabState.value = args
}

useHead({
  title: 'Medicals (Interface) | e-Smart Clinic'
})
</script>
