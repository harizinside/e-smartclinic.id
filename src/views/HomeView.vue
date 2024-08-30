<template>
  <div>
    <AdminLayouts>
      <h1>This is an home page</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'

useHead({
  title: 'Home | e-Smart Clinic'
})
</script>
