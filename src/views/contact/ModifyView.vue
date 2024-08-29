<template>
  <div>
    <AdminLayouts>
      Create Update View
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useHead } from '@unhead/vue'
import AdminLayouts from '@view/AdminLayouts.vue'

const isSaved = ref<boolean>(false)

onBeforeRouteLeave((to, from, next) => {
  if (!isSaved.value) {
    const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
    if (!answer) {
      next(false) 
    }
  }
})
useHead({
  title: 'Modify Contact | e-Smart Clinic'
})
</script>

<style></style>
