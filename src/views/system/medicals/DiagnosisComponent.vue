<template>
  <div>
    <AdminLayouts>
      Diagnosis Component
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IColumnHeader } from '@/interfaces/tables'
import type { IPagination } from '@/interfaces/pagination'
import VTable from '@/components/VTable.vue'
import VTableColumn from '@/components/VTableColumn.vue'
import VHumanDate from '@/components/VHumanDate.vue'
import VBadge from '@/components/VBadge.vue'
import JsonData from '@/utils/blood-type.json'

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
  { name: 'Create At', type: 'label' },
  { name: 'Update At', type: 'label' }
])

const tableInfo = ref<IPagination<IData[]>>(JsonData)
</script>

<style></style>
