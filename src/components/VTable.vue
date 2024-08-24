<template>
  <div class="relative overflow-x-auto sm:rounded-lg p-1">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
      <div class="flex gap-2">
        <VTableCompLimit
          v-if="limit"
          @set-limit="setLimit" />
        <VTableCompAdd v-if="additional" />
      </div>

      <div class="flex gap-2">
        <VTableCompFilter v-if="filter" />
        <VTableCompSearch v-if="search" />
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <VTableHeader
          :column="props.column"
          @sort="sort"
          @set-checked="setChecked" />
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
    <VTablePagination v-if="pagination" />
  </div>
</template>

<script setup lang="ts">
import VTableCompLimit from './VTableCompLimit.vue'
import VTableCompAdd from './VTableCompAdd.vue'
import VTableCompFilter from './VTableCompFilter.vue'
import VTableCompSearch from './VTableCompSearch.vue'
import VTablePagination from './VTablePagination.vue'
import VTableHeader from './VTableHeader.vue'
import type { IColumnHeader } from '@/interfaces/tables'

const emit = defineEmits<{
  sort: [IColumnHeader]
  setChecked: [boolean]
  limit: [boolean]
  setLimit: [number]
  additional: [boolean]
  setAdditional: [boolean]
  filter: [boolean]
  setFilter: [boolean]
  search: [boolean]
  setSearch: [string]
}>()

const props = defineProps<{
  limit?: boolean
  additional?: boolean
  filter?: boolean
  search?: boolean
  pagination?: boolean
  column: IColumnHeader[]
}>()

const sort = (args: IColumnHeader) => {
  emit('sort', args)
}

const setChecked = (args: boolean) => {
  emit('setChecked', args)
}

const setLimit = (args: number) => {
  emit('setLimit', args)
}
</script>
