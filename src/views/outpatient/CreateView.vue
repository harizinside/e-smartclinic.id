<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Create out Patients
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
  { name: 'Outpatients', link: '/clinic-info', active: true },
  { name: 'Create', link: '/clinic-info/create', active: true }
])

useHead({
  title: 'Create out Patients | e-Smart Clinic'
})
</script>

<style></style>
