<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div
        v-if="alert"
        class="pt-4">
        <VAlerts
          :message="alert!.message"
          :type="alert?.type"
          @close="alert=undefined" />
      </div>
      <section>
        <form @submit.prevent="submit">
          <fieldset>
            <section>
              <h2 class="text-base font-semibold leading-7 text-gray-900 pt-4">
                General Info
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly and send to
                <b>SATUSEHAT</b> except for Personal Info
              </p>

              <div class="flex flex-row gap-3 pt-4">
                <div class="mb-5">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kunjungan <span class="text-red-600">**</span></label>
                  <div class="flex items-center mt-4 mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kunjungan Sakit</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="default-radio-2"
                      checked
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                      for="default-radio-2"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kunjungan Sehat</label>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Perawatan <span class="text-red-600">**</span></label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                  <option>Rawat Jalan</option>
                </select>
              </div>
              <div class="flex flex-row gap-2">
                <div class="mb-5 grow">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pasien <span class="text-red-600">**</span></label>
                  <button
                    type="button"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 text-left">
                  &nbsp;
                  </button>
                  <input
                    type="hidden">
                </div>
              </div>
            </section>
          </fieldset>
        </form>
      </section>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import type { IAlert } from '@/interfaces/alerts'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VDialogCamera from '@/components/VDialogCamera.vue'

const alert = ref<IAlert>()
const isSaved = ref<boolean>(false)

const navs = ref<INavigation[]>([
  { name: 'Outpatients', link: '/clinic-info', active: true },
  { name: 'Create', link: '/clinic-info/create', active: true }
])

const submit = () => {
  console.info('submit')
}

onBeforeRouteLeave((to, from, next) => {
  if (!isSaved.value) {
    const answer = window.confirm('Do you really want to leave? You have unsaved changes!')
    if (!answer) {
      next(false)
    } else {
      next()
    }
  } else {
    next()
  }
})

useHead({
  title: 'Create out Patients | e-Smart Clinic'
})
</script>

<style></style>
