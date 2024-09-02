<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

const navs = ref<INavigation[]>([
  { name: 'Clinic Info', link: '/clinic-info', active: true }
])

useHead({
  title: 'Contacts Info | e-Smart Clinic'
})
</script>

<style></style>
