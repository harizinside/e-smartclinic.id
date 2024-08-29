<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-8">
        <VAlerts
          v-if="alert"
          :message="alert!.message"
          :type="alert?.type"
          @close="alert=undefined" />
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
        @on-additional="$router.push('/contacts/create')"
        @on-filter="onFilters"
        @on-search="onSearch"
        @on-sort="sortTable"
        @on-check="setCheckedAll">
        <VTableColumn 
          v-for="(row, index) in tableInfo.data"
          :key="index">
          <td class="px-6 py-4">
            {{ tableInfo.from + index }}
          </td>
          <td class="px-6 py-4 text-sm max-w-full">
            {{ row.regCode }}
          </td>
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              :src="row.img"
              :alt="row.name">
            <div class="ps-3">
              <div class="text-base font-semibold">
                {{ row.name }}
              </div>
              <div class="font-normal text-gray-500">
                {{ row.regCode }}
              </div>
            </div>
          </td>
          <td class="px-6 py-4 text-sm">
            {{ row.nik }}
          </td>
          <td
            scope="row"
            class="px-6 py-4">
            <span>
              <div class="ps-3 text-sm">
                <div class="font-semibold">
                  {{ row.type }}
                </div>
                <div class="font-normal text-gray-500">
                  {{ row.BPJS ?? '-' }}
                </div>
              </div>
            </span>
          </td>
          <td class="px-6 py-4">
            <VHumanDate :datetime="row.createAt" />
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
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
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/pagination'
import AdminLayouts from '@view/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'

interface IData {
  id: number
  img: string
  regCode: string
  name: string
  nik: string
  type: string
  BPJS?: string
  createAt: Date
}

const navs = [
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Contacts', link: '/contacts', active: true }
]

const alert = ref<IAlert>()
const dialogDelete = ref<boolean>(false)

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Kode Pend.', type: 'label', order: 'normal' },
  { name: 'Nama', type: 'label', order: 'normal' },
  { name: 'NIK', type: 'label' },
  { name: 'Type', type: 'label', order: 'normal' },
  { name: 'Tgl Daftar', type: 'label', order: 'desc' },
  { name: 'Aksi', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>({
  from: 1,
  to: 10,
  total: 200000,
  per_page: 10,
  current_page: 1,
  last_page: 200,
  first_page_url: 'page=1&limit=10',
  last_page_url: 'page=20&limit=10',
  next_page_url: 'page=3&limit=10',
  prev_page_url: 'page=2&limit=10',
  path: 'http://192.168.3.221:8001/rheinmedika/medical-check/accounts',
  data: [
    {
      id: 1,
      img: 'https://avatar.iran.liara.run/public/boy?usearname=PG13003000',
      regCode: 'NMW-PG13003000',
      name: 'Muhammad Haaris Setiawan',
      nik: '3276112712930001',
      type: 'Mandiri',
      createAt: new Date()
    }, {
      id: 2,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CG01205400',
      regCode: 'NMW-CG01205400',
      name: 'Hie Meilijanti',
      nik: '3173065405730004',
      type: 'BPJS',
      BPJS: '0001234567899',
      createAt: new Date()
    }, {
      id: 3,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CN01105500',
      regCode: 'NMW-CN01105500',
      name: 'Rina Chairunnisa',
      nik: '3174044912740010',
      type: 'BPJS',
      BPJS: '0001234567888',
      createAt: new Date()
    }, {
      id: 4,
      img: 'https://avatar.iran.liara.run/public/boy?usearname=CG11105000',
      regCode: 'NMW-CG11105000',
      name: 'Hartono Surianto',
      nik: '3172013005760007',
      type: 'AXA Insurance',
      createAt: new Date()
    }, {
      id: 5,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CM00605300',
      regCode: 'NMW-CM00605300',
      name: 'Anisha Ulfah Annas',
      nik: '3172013005760007',
      type: 'BPJS',
      BPJS: '0001234561234',
      createAt: new Date()
    }, {
      id: 6,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=BR00605240',
      regCode: 'NMW-BR00605240',
      name: 'Laela Fijarwati',
      nik: '317405690650001',
      type: 'Mandiri',
      createAt: new Date()
    }, {
      id: 7,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CN00605500',
      regCode: 'NMW-CN00605500',
      name: 'Retno Susilowati',
      nik: '3216034604010002',
      type: 'Mandiri',
      createAt: new Date()
    }, {
      id: 8,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CG00905100',
      regCode: 'NMW-CG00905100',
      name: 'Maria Ulpah Amin Darsono',
      nik: '3278036508920003',
      type: 'Mandiri',
      createAt: new Date()
    }, {
      id: 9,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CG00905000',
      regCode: 'NMW-CG00905000',
      name: 'Salbilah Bilahuna',
      nik: '3173016509041005',
      type: 'BPJS',
      BPJS: '0001234512223',
      createAt: new Date()
    }, {
      id: 10,
      img: 'https://avatar.iran.liara.run/public/girl?usearname=CG01005500',
      regCode: 'NMW-CG01005500',
      name: 'Elvina Dewi Falihah',
      nik: '3201056403930003',
      type: 'BPJS',
      BPJS: '00012345600873',
      createAt: new Date()
    }
  ]
})

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

useHead({
  title: 'Contacts | e-Smart Clinic'
})
</script>

<style></style>
