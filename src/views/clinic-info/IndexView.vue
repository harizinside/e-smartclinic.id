<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="mx-auto lg:flex lg:gap-x-2">
        <h1 class="sr-only">
          General Settings
        </h1>

        <aside class="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-4">
          <nav class="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              <li
                v-for="(item, index) in secondaryNavigation"
                :key="index">
                <button
                  :class="[item.state === tabState ? 'bg-gray-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600', 'w-full group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6']"
                  @click="switchTabs(item.state)">
                  <component
                    :is="item.icon"
                    :class="[item.state === tabState ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-600', 'h-6 w-6 shrink-0']"
                    aria-hidden="true" />
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <section class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-4">
          <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <VGeneral :general-info="generalInfo" v-if="tabState === ListTabs.GENERAL" />
            <VAddress v-if="tabState === ListTabs.ADDRESS" />
            <VMemberTeams v-if="tabState === ListTabs.MEMBERTEAM" />
            <VAccounting v-if="tabState === ListTabs.ACCOUNTING" />
            <VOperationalHours v-if="tabState === ListTabs.OPERATIONAL" />
            <VCertification v-if="tabState === ListTabs.CERTIFICATION" />
          </div>
          <section>
            <div class="flex flex-row-reverse gap-2 py-4">
              <button
                type="submit"
                class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto cursor-pointer bg-orange-600 hover:bg-orange-500 focus-visible:outline-orange-500">
                Simpan data
              </button>
              <button
                type="button"
                class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                Batalkan
              </button>
            </div>
          </section>
        </section>
      </div>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import {
  AdjustmentsHorizontalIcon,
  MapIcon,
  UsersIcon,
  CreditCardIcon,
  CalendarDateRangeIcon,
  FingerPrintIcon
} from '@heroicons/vue/24/outline'
import type { Component } from 'vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VGeneral from './component/VGeneral.vue'
import VAddress from './component/VAddress.vue'
import VMemberTeams from './component/VMemberTeams.vue'
import VAccounting from './component/VAccounting.vue'
import VOperationalHours from './component/VOperationalHours.vue'
import VCertification from './component/VCertification.vue'
import JsonData from '@/utils/clinic-info.json'

enum ListTabs {
  GENERAL,
  ADDRESS,
  MEMBERTEAM,
  ACCOUNTING,
  OPERATIONAL,
  CERTIFICATION
}

interface ITabs {
  name: string
  icon: Component
  state: ListTabs
}

const secondaryNavigation = ref<ITabs[]>([
  { name: 'Umum', icon: AdjustmentsHorizontalIcon, state: ListTabs.GENERAL },
  { name: 'Alamat', icon: MapIcon, state: ListTabs.ADDRESS },
  { name: 'Angguta Tim', icon: UsersIcon, state: ListTabs.MEMBERTEAM },
  { name: 'Akunting', icon: CreditCardIcon, state: ListTabs.ACCOUNTING },
  { name: 'Jam Operasional', icon: CalendarDateRangeIcon, state: ListTabs.OPERATIONAL },
  { name: 'Pengesahan', icon: FingerPrintIcon, state: ListTabs.CERTIFICATION }
])
const tabState = ref<ListTabs>(ListTabs.GENERAL)
const navs = ref<INavigation[]>([
  { name: 'Clinic Info', link: '/clinic-info', active: true }
])
const generalInfo = {
  id: JsonData.id,
  merchant: JsonData.merchant,
  key: JsonData.key,
  url: JsonData.general.url,
  name: JsonData.general.name,
  email: JsonData.general.email,
  phone: JsonData.general.phone,
  sites: JsonData.general.sites,
  social: {
    instagram: JsonData.general.social.instagram,
  }
}

const switchTabs = (args: ListTabs) => {
  tabState.value = args
}

useHead({
  title: 'Contacts Info | e-Smart Clinic'
})
</script>

<style></style>
