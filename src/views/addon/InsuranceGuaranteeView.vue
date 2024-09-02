<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      Insurance Guarantee
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
  { name: 'Insurance Guarantee', link: '/add-on/insurance-guarantee', active: true }
])

useHead({
  title: 'Insurance Guarantee | e-Smart Clinic'
})
</script>

<style></style>
