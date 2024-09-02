<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <h1>Profile</h1>
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
  { name: 'Profile', link: '/profile', active: true }
])

useHead({
  title: 'Profile | e-Smart Clinic'
})
</script>
