<template>
  <div class="relative overflow-x-auto sm:rounded-lg p-1">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
      <div class="flex gap-2">
        <VTableCompLimit
          v-if="showLimit"
          @set-limit="setLimitTable" />
        <VTableCompAdd
          v-if="showAdditional"
          @clicked="$emit('onAdditional', true)" />
      </div>

      <div class="flex gap-2">
        <VTableCompFilter
          v-if="showFilter"
          @clicked="$emit('onFilter', true)" />
        <VTableCompSearch 
          v-if="showSearch" 
          @on-searching="searchTable" />
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <VTableHeader
          :column="props.setColumnHeader"
          @sort="sort"
          @set-checked="checkTable" />
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
    <VTablePagination
      v-if="showPagination"
      :info="setTableInfo" />
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
import type { IPagination } from '@/interfaces/pagination'

const emit = defineEmits<{
  setLimit: [number]
  onAdditional: [boolean]
  onFilter: [boolean]
  onSearch: [string]
  onSort: [IColumnHeader]
  onCheck: [boolean]
  onPaginate: [string]
}>()

const props = defineProps<{
  showLimit?: boolean
  showAdditional?: boolean
  showFilter?: boolean
  showSearch?: boolean
  showPagination?: boolean
  setColumnHeader: IColumnHeader[]
  setTableInfo: IPagination
}>()

const setLimitTable = (args: number) => {
  emit('setLimit', args)
}

const sort = (args: IColumnHeader) => {
  emit('onSort', args)
}

const checkTable = (args: boolean) => {
  emit('onCheck', args)
}

const searchTable = (args: string) => {
  emit('onSearch', args)
}
</script>
