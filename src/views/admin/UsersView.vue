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
        :limit="true"
        :additional="true"
        :filter="true"
        :search="true"
        :pagination="true"
        :column="columnHeader"
        @sort="sortTable"
        @set-checked="getCheckedAll">
        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label
                for="checkbox-table-search-1"
                class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="w-4 p-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </td>
          <td
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              class="w-10 h-10 rounded-full"
              src="https://avatar.iran.liara.run/public/boy?usearname=Muhammad+Haaris+Setiawan"
              alt="Muhammad Haaris Setiawan">
            <div class="ps-3">
              <div class="text-base font-semibold">
                Muhammad Haaris Setiawan
              </div>
              <div class="font-normal text-gray-500">
                muhammadhaaris@***.dev
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            Developer
          </td>
          <td class="px-6 py-4">
            Administrator
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              <button
                class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                @click="dialogDelete=true">
                Remove
              </button>
            </div>
          </td>
        </tr>
      </VTable>
      <TransitionRoot
        as="template"
        :show="dialogTransfer">
        <VDialogFindUsers
          @close="dialogTransfer=false"
          @isset="setupRole" />
      </TransitionRoot>
      <TransitionRoot
        as="template"
        :show="dialogSetRole">
        <VDialogSetRole
          @close="dialogSetRole=false"
          @submit="addUserRole" />
      </TransitionRoot>
      <TransitionRoot
        as="template"
        :show="dialogDelete">
        <VDialogDelete
          panel="image"
          @close="dialogDelete=false"
          @process="processDelete" />
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot
} from '@headlessui/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VDialogFindUsers from '@/components/VDialogFindUsers.vue'
import VDialogSetRole from '@/components/VDialogSetRole.vue'
import VDialogDelete from '@/components/VDialogDelete.vue'
import VAlerts from '@/components/VAlerts.vue'
import AdminLayouts from '@view/AdminLayouts.vue'
import VTable from '@/components/VTable.vue'

const dialogTransfer = ref<boolean>(false)
const dialogSetRole = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)
const alert = ref<IAlert>()

const navs = [
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Otoritasi', link: '/admin', active: false },
  { name: 'Pengguna', link: '/admin/users', active: true }
]

const columnHeader = <IColumnHeader[]>[
  { type: 'checkbox' },
  { name: undefined },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Posisi', type: 'label', order: 'normal' },
  { name: 'Hak akses', type: 'label' },
  { name: 'Aksi', type: 'label' }
]

const processDelete = () => {
  dialogDelete.value = false
  alert.value = {
    message: 'Data berhasil dihapus',
    type: 'danger'
  }
}

const transferUser = () => {
  dialogTransfer.value = true
}

const setupRole = () => {
  dialogTransfer.value = false
  dialogSetRole.value = true
}

const addUserRole = () => {
  dialogSetRole.value = false
  alert.value = {
    message: 'Data berhasil disimpan',
    type: 'success'
  }
}

const sortTable = (args: IColumnHeader) => {
  console.error('asas', args)
}

const getCheckedAll = () => {
  console.error('checked all nih boss')
}

useHead({
  title: 'Users | e-Smart Clinic'
})
</script>

<style></style>
