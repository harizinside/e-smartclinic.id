<template>
  <div>
    <AdminLayouts>
      <h1>This is an about page</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'

useHead({
  title: 'Drugs (Report) | e-Smart Clinic'
})
</script>
