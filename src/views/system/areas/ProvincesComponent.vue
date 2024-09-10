<template>
  <div>
    <VTable
      :show-limit="true"
      :show-additional="false"
      :show-filter="true"
      :show-search="true"
      :show-pagination="true"
      :set-column-header="columnHeader"
      :set-table-info="tableInfo">
      <VTableColumn
        v-for="(row, index) in tableInfo.data"
        :key="index">
        <td class="px-6 py-4">
          {{ index + tableInfo.from }}
        </td>
        <td class="px-6 py-4">
          {{ row.name }}
        </td>
        <td class="px-6 py-4">
          {{ row.code }}
        </td>
        <td class="px-6 py-4">
          <VHumanDate :datetime="row.createdAt" />
        </td>
        <td class="px-6 py-4">
          <VHumanDate :datetime="row.updatedAt" />
        </td>
      </VTableColumn>
    </VTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/paginations'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import JsonData from '@/utils/provinces.json'

interface IData {
  id: number
  code: string
  name: string
  createdAt: string
  updatedAt: string
}

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Code', type: 'label', order: 'normal'  },
  { name: 'Create At', type: 'label' },
  { name: 'Update At', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)

</script>

<style></style>
