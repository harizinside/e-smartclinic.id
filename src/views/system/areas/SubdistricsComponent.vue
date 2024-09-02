<template>
  <div>
    City Component
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

const columnHeader = ref<IColumnHeader[]>([
  { name: 'Nama', type: 'label', order: 'normal'  },
  { name: 'Code', type: 'label', order: 'normal' },
  { name: 'Name', type: 'label' },
  { name: 'Create At', type: 'label' },
  { name: 'Update At', type: 'label' }
])
</script>

<style></style>
