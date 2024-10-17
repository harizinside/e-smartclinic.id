<template>
  <div>
    <AdminLayouts>
      Vouchers
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'

useHead({
  title: 'Vouchers | e-Smart Clinic'
})
</script>
