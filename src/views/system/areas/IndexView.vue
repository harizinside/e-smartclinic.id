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
import ProvincesComponent from './ProvincesComponent.vue'
import CityComponent from './CitysComponent.vue'
import SubdistricsComponent from './SubdistricsComponent.vue'
import VillagesComponent from './VillagesComponent.vue'

const tabSwitch = ref<string>('Provinces')

const navs = ref<INavigation[]>([
  { name: 'System', link: '/add-on', active: false },
  { name: 'Areas (Interface)', link: '/add-on/areas', active: true }
])

const tabs = ref([
  { name: 'Provinces', href: '#', current: false },
  { name: 'Citys', href: '#', current: false },
  { name: 'Subdistrics', href: '#', current: true },
  { name: 'Villages', href: '#', current: false }
])

const switchTabs = (args: string) => {

}

useHead({
  title: 'Areas (Interface) | e-Smart Clinic'
})
</script>

<style></style>
