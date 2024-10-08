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
          <VBadge
            :type="(row.status === true)? 'success': 'danger'"
            :message="(row.status === true)? 'Active': 'Disable'" />
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
import VBadge from '@/components/VBadge.vue'
import JsonData from '@/utils/ethnic-group.json'

interface IData {
  id: number
  name: string
  status: boolean
  createdAt: string
  updatedAt: string
}

const columnHeader = ref<IColumnHeader[]>([
  { name: '#', type: 'label' },
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Status', type: 'label' },
  { name: 'Tgl Dibuat', type: 'label' },
  { name: 'Tgl Diubah', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)
</script>

<style></style>
