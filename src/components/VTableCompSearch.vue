<template>
  <div>
    <div class="relative">
      <form
        method="get"
        @submit.prevent="searching">
        <input
          id="table-search"
          v-model="search"
          type="text"
          class="block text-sm text-gray-900 border border-gray-300 rounded-lg w-80 py-2 bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="Cari">
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref<string>('')
const emit = defineEmits<{
  onSearching: [string]
}>()

const searching = async () => {
  emit('onSearching', search.value)
}
</script>

<style></style>
