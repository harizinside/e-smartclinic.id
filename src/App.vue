<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component
        :is="Component"
        :key="route.path" 
        sa/>
    </transition>
  </router-view>
</template>

<style scoped>
</style>
