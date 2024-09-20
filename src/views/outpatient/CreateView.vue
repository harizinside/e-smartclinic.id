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
            <div class="flex flex-row gap-2">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pasien <span class="text-red-600">**</span></label>
                <button
                  type="button"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 text-left"
                  @click="dialogFindUser=true">
                  &nbsp;
                </button>
                <input
                  type="hidden">
              </div>
            </div>
            <section>
              <div>
                <div
                  class="flex justify-between item-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border rounded-xl cursor-pointer"
                  @click="detailUser = !detailUser">
                  <div class="flex">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://avatar.iran.liara.run/public/girl?usearname=CN01105500"
                      alt="Jese image">
                    <div class="ps-3">
                      <div
                        class="text-sm font-semibold">
                        Rina Chairunnisa
                      </div>
                      <div
                        class="text-xs text-gray-500">
                        NMW-CN01105500
                      </div>
                    </div>
                  </div>
                  <div class="pt-2.5 pr-4">
                    <ChevronDownIcon
                      class="h-5 w-5"
                      aria-hidden="true" />
                  </div>
                </div>
                <div
                  v-if="detailUser"
                  class="px-2">
                  <div class="mt-4 border-gray-100">
                    <dl class="divide-y divide-gray-100">
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Nama Pasien
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Rina Chairunnisa
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Tanggal Lahir
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Jakarta, 1974-12-09
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          MRN
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          NMW-CN01105500
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Jenis Kelamin
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          Perempuan
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Alamat
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          KOMPLEK HANKAM BLOK G NO.29 006/006 PONDOK LABU, CILANDAK
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Nomor Telepon
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          +6289630853665
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Email
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          rinorifqirina@gmail.com
                        </dd>
                      </div>
                      <div class="px-4 py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">
                          Identitas
                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <span class="p-1 text-white bg-orange-400 rounded-md">KTP</span>&nbsp;3174044912740010
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            <div class="flex flex-row gap-3 mt-4">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pembiayaan <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Rujukan (Optional)</label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>
            <div class="flex flex-row gap-2">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Dokter <span class="text-red-600">**</span></label>
                <button
                  type="button"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 text-left"
                  @click="dialogFindDokter=true">
                  &nbsp;
                </button>
                <input
                  type="hidden">
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
            <div class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Poliklinik <span class="text-red-600">**</span></label>
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                <option>Rawat Jalan</option>
              </select>
            </div>
            <div>
              <div
                class="flex justify-between item-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border rounded-xl cursor-pointer">
                <div class="flex">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://avatar.iran.liara.run/public/boy?usearname=dr.Damar+Sajiwo"
                    alt="dr. Damar Sajiwo">
                  <div class="ps-3">
                    <div
                      class="text-sm font-semibold">
                      dr. Damar Sajiwo
                    </div>
                    <div
                      class="text-xs text-gray-500">
                      Doctor
                    </div>
                  </div>
                </div>
                <div class="pt-2.5 pr-4">
                  <ChevronDownIcon
                    class="h-5 w-5"
                    aria-hidden="true" />
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-3 mt-4">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Konsultasi <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jam Konsultasi <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>
          </fieldset>
          <ul class="grid grid-cols-6 gap-2 text-sm">
            <li>
              <input
                id="hosting-0800"
                type="radio"
                name="hosting"
                value="hosting-0800"
                class="hidden peer"
                required>
              <label
                for="hosting-0800"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                08:00
              </label>
            </li>
            <li>
              <input
                id="hosting-0815"
                type="radio"
                name="hosting"
                value="hosting-0815"
                class="hidden peer">
              <label
                for="hosting-0815"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                08:15
              </label>
            </li>
            <li>
              <input
                id="hosting-0830"
                type="radio"
                name="hosting"
                value="hosting-0830"
                class="hidden peer">
              <label
                for="hosting-0830"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                08:30
              </label>
            </li>
            <li>
              <input
                id="hosting-0845"
                type="radio"
                name="hosting"
                value="hosting-0845"
                class="hidden peer">
              <label
                for="hosting-0845"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                08:45
              </label>
            </li>
            <li>
              <input
                id="hosting-0900"
                type="radio"
                name="hosting"
                value="hosting-0900"
                class="hidden peer">
              <label
                for="hosting-0900"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                09:00
              </label>
            </li>
            <li>
              <input
                id="hosting-0915"
                type="radio"
                name="hosting"
                value="hosting-0915"
                class="hidden peer">
              <label
                for="hosting-0915"
                class="inline-flex justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                09:15
              </label>
            </li>
          </ul>
          <section>
            <div class="flex flex-row-reverse gap-2 py-2 pt-4">
              <button
                type="submit"
                class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto cursor-pointer bg-orange-600 hover:bg-orange-500 focus-visible:outline-orange-500">
                Simpan data
              </button>
              <button
                type="button"
                class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                Batalkan
              </button>
            </div>
          </section>
        </form>
      </section>
      <TransitionRoot
        as="template"
        :show="dialogFindUser">
        <VDialogFindUsers
          @close="dialogFindUser=false"
          @isset="setupRole" />
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useHead } from '@unhead/vue'
import { TransitionRoot } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import type { IAlert } from '@/interfaces/alerts'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VDialogFindUsers from '@/components/VDialogFindUsers.vue'

const alert = ref<IAlert>()
const isSaved = ref<boolean>(false)
const dialogFindUser = ref<boolean>(false)
const dialogFindDokter = ref<boolean>(false)
const detailUser = ref<boolean>(false)

const navs = ref<INavigation[]>([
  { name: 'Outpatients', link: '/clinic-info', active: true },
  { name: 'Create', link: '/clinic-info/create', active: true }
])

const submit = () => {
  console.info('submit')
}

const setupRole = () => {
  dialogFindUser.value = false
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
