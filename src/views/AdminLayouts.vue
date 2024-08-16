<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta, useServerSeoMeta } from '@unhead/vue'

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/icons/e-smartclinic.png',
    }, {
      rel: 'apple-touch-icon',
      href: 'https://e-smartclinic.id/img/icons/icon.png',
    },
  ],
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    lang: 'id_ID',
    class: 'h-full bg-white',
  },
})

useSeoMeta({
  description: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  charset: 'utf-8',
  googlebotNews: 'noindex',
  viewport: 'width=device-width, initial-scale=1.0',
  author: 'PT Harmoni Untuk Bersama',
  ogUrl: 'https://e-smartclinic.id/welcome-aboard',
  ogType: 'website',
  ogSiteName: 'https://e-smartclinic.id',
  ogTitle: 'e-Smart Clinic Backend',
  ogDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  ogImage: 'https://e-smartclinic.id/img/icons/meta-properti.webp',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: 'e-Smart Clinic Backend',
  twitterDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  twitterImage: 'https://e-smartclinic.id/img/icons/meta-properti.webp',
})

useServerSeoMeta({
  robots: 'noindex, nofollow',
})
</script>
