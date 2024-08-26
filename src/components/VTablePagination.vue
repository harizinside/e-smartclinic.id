<template>
  <div>
    <nav
      class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation">
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing 
        <span class="font-semibold text-gray-900 dark:text-white">{{ info.from }}-{{ info.to }}</span> 
        of 
        <span class="font-semibold text-gray-900 dark:text-white">{{ info.total }}</span>
      </span>
      <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li
          v-for="(page, index) in pagination"
          :key="index">
          <button
            v-if="page.text === 'Previous'"
            :class="[page.text === 'Previous', 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']">
            {{ page.text }}
          </button>
          <button
            v-else-if="page.text === 'Next'"
            :class="[page.text === 'Next', 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']">
            {{ page.text }}
          </button>
          <button
            v-else
            :class="[props.info.current_page === page.text , '']">
            {{ page.text }}
          </button>
        </li>
        <!-- Anomali -->
        <!-- <li>
          <button
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
          </button>
        </li>
        <li>
          <button
            aria-current="page"
            class="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            1
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            2
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            3
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            4
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            5
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            6
          </button>
        </li>
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import type { IPagination } from '@/interfaces/pagination'

const props = defineProps<{
  info: IPagination
}>()

onMounted(() => {
})

const pagination = computed(() => {
  const currentPage = props.info.current_page
  const lastPage = props.info.last_page

  const pages = []

  if (props.info.prev_page_url) {
    pages.push({ text: 'Previous', url: props.info.prev_page_url })
  }

  if (currentPage > 3) {
    pages.push({ text: '1', url: props.info.first_page_url })
    if (currentPage > 4) {
      pages.push({ text: '...', url: null })
    }
  }

  for (let i = Math.max(1, currentPage - 2); i <= Math.min(lastPage, currentPage + 2); i++) {
    pages.push({ text: String(i), url: `page=${i}&limit=${props.info.per_page}` })
  }

  if (currentPage < lastPage - 2) {
    if (currentPage < lastPage - 3) {
      pages.push({ text: '...', url: null })
    }
    pages.push({ text: String(lastPage), url: props.info.last_page_url })
  }

  if (props.info.next_page_url) {
    pages.push({ text: 'Next', url: props.info.next_page_url })
  }

  return pages
})

</script>

<style></style>
