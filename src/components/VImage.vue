<template>
  <div>
    <img
      :src
      :class="props.class"
      alt="">
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import { useAuthStore } from '@/stores/auth'

const showUsers = useAuthStore()
const src = ref<string>('')

const props = defineProps<{
  uri: string
  class: string
}>()

onMounted(async() => {
  const user = showUsers.auth
  const url = `${HTTP_URI}/legacy/storages/${props.uri}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...HTTP_HEADER,
        Authorization: `Bearer ${user.TOKEN}`
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const imageBlob = await response.blob()
    src.value = URL.createObjectURL(imageBlob)
  } catch (err) {
    console.error(err)
  }
})
</script>
