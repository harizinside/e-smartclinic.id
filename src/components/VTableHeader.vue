<template>
  <tr>
    <th
      v-for="(item, index) in props.column"
      :key="index"
      scope="col"
      :class="[item.type === 'checkbox'? 'p-4': 'px-6 py-3']">
      <div
        class="flex items-center">
        <input 
          v-if="item.type === 'checkbox'"
          id="checkbox-all-search"
          type="checkbox"
          class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          @change="$emit('setChecked', true)">
        {{ item.name ?? '\u00A0' }}
        <button
          v-if="item.order"
          @click="$emit('sort', item)">
          <svg
            v-if="item.order === 'normal'"
            class="w-3 h-3 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
          </svg>
          <svg
            v-else-if="item.order === 'desc'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ms-1.5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-3 h-3 ms-1.5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </th>
  </tr>
</template>

<script setup lang="ts">
import type { IColumnHeader } from '@/interfaces/tables'

defineEmits<{
  sort: [IColumnHeader]
  setChecked: [boolean]
}>()

const props = defineProps<{
  column: IColumnHeader[]
}>()
</script>

<style></style>
