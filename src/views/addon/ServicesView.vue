<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      User View
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'

const navs = ref([
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Contacts', link: '/contacts', active: true }
])

useHead({
  title: 'Services | e-Smart Clinic'
})
</script>

<style></style>
