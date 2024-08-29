<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="sm:hidden">
        <label
          for="tabs"
          class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500">
          <option
            v-for="tab in tabs"
            :key="tab.name">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block pt-5">
        <nav
          class="flex space-x-4"
          aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            :class="[tab.name === active ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
            :aria-current="tab.name === active ? 'page' : undefined"
            @click="switchTab(tab.name)">
            {{ tab.name }}
          </button>
        </nav>
      </div>
      <div class="pt-6">
        <div class="pb-4">
          <label
            for="name"
            class="block text-sm font-semibold leading-6 text-gray-900">Nama hak akses</label>
          <input
            id="name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder=""
            required>
        </div>
        <BasicView v-if="active === 'General'" />
        <AdvancedView v-else />
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900">
          Batalkan
        </button>
        <button
          type="submit"
          class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          Simpan data
        </button>
      </div>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import BasicView from './additional/BasicView.vue'
import AdvancedView from './additional/AdvancedView.vue'
import AdminLayouts from '@view/AdminLayouts.vue'

const active = ref<string>('General')

const navs = ref([
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Otoritasi', link: '/admin', active: false },
  { name: 'Hak Akses', link: '/admin/role-privilages', active: false },
  { name: 'Additional', link: '/admin/role-privilages/create', active: false }
])

const tabs = ref([
  { name: 'General', advanced: false },
  { name: 'Advanced', advanced: true }
])

const switchTab = (args: string) => {
  active.value = args
}

useHead({
  title: 'Role & Privilages (Create) | e-Smart Clinic'
})
</script>

<style></style>
