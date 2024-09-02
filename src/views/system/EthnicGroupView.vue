<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Ethnic Group
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
  { name: 'System', link: '/system', active: false },
  { name: 'Ethnic Group', link: '/system/ethnic-group', active: true }
])

useHead({
  title: 'Ethnic Group | e-Smart Clinic'
})
</script>

<style></style>
