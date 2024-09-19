<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div
        v-if="alert"
        class="pt-8">
        <VAlerts
          :message="alert!.message"
          :type="alert?.type"
          @close="alert = undefined" />
      </div>
      <VTable
        :show-limit="true"
        :show-additional="true"
        :show-filter="true"
        :show-search="true"
        :show-pagination="true"
        :set-column-header="columnHeader"
        :set-table-info="tableInfo"
        @set-limit="setLimit"
        @on-additional="$router.push('/outpatient/create')"
        @on-filter="onFilters"
        @on-search="onSearch"
        @on-sort="sortTable"
        @on-check="setCheckedAll">
        <VTableColumn
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              :src="row.patient.img"
              :alt="row.patient.name">
            <div class="ps-3">
              <div class="text-xs font-semibold">
                {{ row.patient.name }}
              </div>
              <div class="text-xs font-normal text-gray-500">
                {{ row.patient.regCode }}
              </div>
            </div>
          </td>
          <td class="px-6 py-4 text-sm">
            {{ $d(Date.parse(row.schedule.time), 'long') }}
          </td>
          <td class="px-6 py-4 text-sm">
            {{ row.schedule.slot }} &nbsp; {{ $d(Date.parse(row.schedule.time), 'timeSmall') }}
          </td>
          <td class="px-6 py-4 text-sm">
            {{ row.poli }}
          </td>
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              :src="row.schedule.img"
              :alt="row.schedule.name">
            <div class="ps-3">
              <div class="text-xs font-semibold">
                {{ row.schedule.name }}
              </div>
              <div class="text-xs font-normal text-gray-500">
                {{ row.schedule.location }}
              </div>
            </div>
          </td>
          <td class="px-6 py-4 text-sm">
            {{ row.status }}
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button
                class="font-medium text-emerald-600 dark:text-emerald-500 hover:underline"
                @click="panggilPasien">
                Panggil
              </button>
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline ms-3">
                Edit
              </button>
              <button
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                @click="dialogDelete=true">
                Remove
              </button>
            </div>
          </td>
        </VTableColumn>
      </VTable>
      <TransitionRoot
        as="template"
        :show="dialogDelete">
        <VDialogDelete
          :dialog="deleted"
          @close="dialogDelete=false"
          @process="processDelete" />
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IDialog } from '@/interfaces/dialogs'
import type { IPagination } from '@/interfaces/paginations'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/outpatients.json'

interface IData {
  id: number
  poli: string
  category: string
  schedule: {
    id: number
    img: string
    name: string
    location: string
    time: string
    slot: number
  }
  patient: {
    id: number
    img: string
    regCode: string
    name: string
    type: string
  }
  status: string
  createdAt: string
  updatedAt: string
}

const dialogTransfer = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const deleted = ref<IDialog>({
  img: 'https://avatar.iran.liara.run/public/girl?usearname=dr.Niken+Anggraeni',
  description: 'nikeng***@***.com',
  title: 'dr. Sista Sandhi Prawista'
})
const alert = ref<IAlert>()

const columnHeader = ref<IColumnHeader[]>([
  { name: 'Pasien', type: 'label', order: 'normal' },
  { name: 'Waktu Konsultasi', type: 'label' },
  { name: 'Antrian', type: 'label', order: 'normal' },
  { name: 'Poli', type: 'label' },
  { name: 'Dokter', type: 'label' },
  { name: 'Status', type: 'label' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const navs = ref<INavigation[]>([
  { name: 'Outpatients', link: '/outpatient', active: true }
])

const setLimit = (args: number) => {
  console.error(args)
}

const onFilters = () => {
  console.error('Filter')
}

const onSearch = (args: string) => {
  console.error(args)
}

const sortTable = (args: IColumnHeader) => {
  console.error(args)
}

const setCheckedAll = () => {
  console.error('Check')
}

const processDelete = () => {
  console.error('Delete')
}

const panggilPasien = () => {
  const voices = speechSynthesis.getVoices()
  const indonesianFemaleVoice = voices.find(v => v.lang === 'id-ID')
  if (!indonesianFemaleVoice) return
  const utterance = new SpeechSynthesisUtterance('Panggilan atas nama, Rina Chairunnisa. Silakan masuk ke, ruangan 101,  dengan, dokter Damar Sajiwo.')
  utterance.voice = indonesianFemaleVoice
  utterance.rate = 0.7
  speechSynthesis.speak(utterance)
}

useHead({
  title: 'Out Patients | e-Smart Clinic'
})
</script>

<style></style>
