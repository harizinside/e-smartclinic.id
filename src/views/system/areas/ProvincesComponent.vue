<template>
  <div>
    <VTable
      :show-limit="true"
      :show-additional="true"
      :show-filter="true"
      :show-search="true"
      :show-pagination="true"
      :set-column-header="columnHeader"
      :set-table-info="tableInfo"
      @set-limit="setLimit"
      @on-additional="transferUser"
      @on-filter="setFilters"
      @on-search="onSearch"
      @on-sort="sortTable"
      @on-check="setCheckedAll">
      <VTableColumn
        v-for="(row, index) in tableInfo.data"
        :key="index">
        <td class="px-6 py-4">
          {{ row.privilage }}
        </td>
      </VTableColumn>
    </VTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IAlert } from '@/interfaces/alerts'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/pagination'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import JsonData from '@/utils/users.json'

interface IData {
  id: number
  code: string
  name: string
  createdAt: string
  updatedAt: string
}

const alert = ref<IAlert>()

const columnHeader = ref<IColumnHeader[]>([
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Create At', type: 'label' },
  { name: 'Update At', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

const setLimit = (args: number) => {
  console.error(args)
}

const transferUser = () => {
}

</script>

<style></style>
