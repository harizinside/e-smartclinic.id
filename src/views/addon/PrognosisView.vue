<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Prognosis View
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
  { name: 'Prognosis', link: '/add-on/prognosis', active: true }
])

useHead({
  title: 'Prognosis Area | e-Smart Clinic'
})
</script>

<style></style>
