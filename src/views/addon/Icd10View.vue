<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      ICD 10 View
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
  { name: 'Add On', link: '/add-on', active: false },
  { name: 'ICD 10', link: '/add-on/icd-10', active: true }
])

useHead({
  title: 'ICD 10 | e-Smart Clinic'
})
</script>

<style></style>
