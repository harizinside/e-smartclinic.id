<template>
  <div>
    <AdminLayouts>
      Discounts
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'

useHead({
  title: 'Discounts | e-Smart Clinic'
})
</script>
