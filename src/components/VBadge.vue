<template>
  <div>
    <span :class="[textClass, 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset']">{{ props.message }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { IAlert } from '@/interfaces/alerts'

const props = defineProps<IAlert>()

const textClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-50 text-green-700 ring-green-600/20'
    case 'warning':
      return 'bg-yellow-50 text-yellow-800 ring-yellow-600/20'
    case 'info':
      return 'bg-blue-50 text-blue-700 ring-blue-700/10'
    case 'danger':
      return 'bg-red-50 text-red-700 ring-red-600/10'
    default:
      return ''
  }
})
</script>
