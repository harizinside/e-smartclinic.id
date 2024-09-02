<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <h1>Practice Schedule</h1>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import type { IAlert } from '@/interfaces/alerts'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

const navs = ref<INavigation[]>([
  { name: 'Practice Schedule', link: '/contacts', active: true }
])

useHead({
  title: 'Practice Schedule | e-Smart Clinic'
})
</script>
