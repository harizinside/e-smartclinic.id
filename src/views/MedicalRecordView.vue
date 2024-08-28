<template>
  <div>
    <AdminLayouts>
      <h1>Medical Record</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from './AdminLayouts.vue'

useHead({
  title: 'Medical Record | e-Smart Clinic'
})
</script>
