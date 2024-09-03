<template>
  <div>
    <div :class="[panelClass, 'rounded-xl p-4']">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon
            :class="[iconClass, 'h-5 w-5']"
            aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p 
            :class="[textClass, 'text-sm font-medium']">
            {{ props.message }}
          </p>
          <ul
            v-if="props.errors"
            :class="[textClass, 'mt-1.5 list-disc list-inside text-xs font-medium']">
            <li
              v-for="(err, index) in props.errors"
              :key="index">
              <span class="">{{ err.field }}</span>&nbsp;{{ err.message }}
            </li>
          </ul>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              :class="[buttonClass, 'inline-flex focus:ring-offset-2 rounded-md p-1.5 focus:outline-none focus:ring-2']"
              @click="$emit('close')">
              <span class="sr-only">Dismiss</span>
              <XMarkIcon
                class="h-5 w-5"
                aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import type { IAlert } from '@/interfaces/alerts'

defineEmits([ 'close' ])

const props = defineProps<IAlert>()

const panelClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-50'
    case 'warning':
      return 'bg-yellow-50'
    case 'info':
      return 'bg-blue-50'
    case 'danger':
      return 'bg-red-50'
    default:
      return ''
  }
})

const iconClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-400'
    case 'warning':
      return 'text-yellow-500'
    case 'info':
      return 'text-blue-500'
    case 'danger':
      return 'text-red-500'
    default:
      return ''
  }
})

const textClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-800'
    case 'warning':
      return 'text-yellow-800'
    case 'info':
      return 'text-blue-800'
    case 'danger':
      return 'text-red-800'
    default:
      return ''
  }
})

const buttonClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50'
    case 'warning':
      return 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50'
    case 'info':
      return 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50'
    case 'danger':
      return 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50'
    default:
      return ''
  }
})
</script>

<style></style>
