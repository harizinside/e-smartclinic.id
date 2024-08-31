<template>
  <div>
    <AdminLayouts>
      <h1>Practice Schedule</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import type { IAlert } from '@/interfaces/alerts'
import AdminLayouts from '@/views/AdminLayouts.vue'

useHead({
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
