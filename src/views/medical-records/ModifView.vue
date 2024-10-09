<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <form>
        <fieldset>
          <!-- Subjective -->
          <section class="pt-2">
            <div class="border-x border-t p-2 font-semibold text-sm rounded-t-lg bg-gray-200 text-slate-500">
              Subjective
            </div>
            <div class="border rounded-b-lg p-4">
              <div class="flex gap-4">
                <div class="mb-5 grow">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Berat Badan <span class="text-red-600">**</span></label>
                  <input
                    id="base-input"
                    type="text"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                </div>
                <div class="mb-5 grow">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tinggi Badan <span class="text-red-600">**</span></label>
                  <input
                    id="base-input"
                    type="text"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                </div>
                <div class="mb-5 grow">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tekanan Nadi <span class="text-red-600">**</span></label>
                  <input
                    id="base-input"
                    type="text"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                </div>
                <div class="mb-5 grow">
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Respirasi <span class="text-red-600">**</span></label>
                  <input
                    id="base-input"
                    type="text"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                </div>
              </div>
              <div class="col-span-full mb-5">
                <label
                  for="cover-photo"
                  class="block text-sm font-medium leading-6 text-gray-900">Assets File</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div class="text-center">
                    <PhotoIcon
                      class="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true" />
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 hover:text-orange-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only">
                      </label>
                      <p class="pl-1">
                        or drag and drop
                      </p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Riwayat Penyakit <span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kondisi Penyakit Lainnya<span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  type="base"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keluhan Utama <span class="text-red-600">**</span></label>
                <textarea
                  id="base-input"
                  type="base"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
              </div>
              <div class="">
                <label
                  for="base-input"
                  type="base"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Anamnesis <span class="text-red-600">**</span></label>
                <textarea
                  id="base-input"
                  type="base"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
              </div>
            </div>
          </section>
          <!-- Objective -->
          <section class="pt-6">
            <div class="border-x border-t p-2 font-semibold text-sm rounded-t-lg bg-gray-200 text-slate-500">
              Objective
            </div>
            <div class="border rounded-b-lg p-4">
              <span class="text-sm font-medium mb-2">Riwayat Konsultasi</span>
              <ul
                role="list"
                class="divide-y divide-gray-100 overflow-hidden bg-white sm:rounded-xl">
                <li
                  v-for="(row, index) in objective.data!"
                  :key="index"
                  class="relative flex justify-between gap-x-6 px-4 py-5 sm:px-6">
                  <div class="flex min-w-0 gap-x-4">
                    <img
                      class="h-12 w-12 flex-none rounded-full bg-gray-50"
                      :src="row.doctor.img"
                      alt="">
                    <div class="min-w-0 flex-auto">
                      <p class="text-sm font-semibold leading-6 text-gray-900">
                        <a :href="`api/diagnosa/${row.id}`">
                          <span class="absolute inset-x-0 -top-px bottom-0" />
                          {{ row.doctor.name }}
                        </a>
                      </p>
                      <p class="mt-1 flex text-xs leading-5 text-gray-500">
                        {{ $d(Date.parse(row.date), 'full') }}
                      </p>
                    </div>
                  </div>
                  <div class="flex shrink-0 items-center gap-x-4">
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                      <p class="text-sm leading-6 text-gray-900">
                        {{ row.diagnosis.join(', ') }}
                      </p>
                      <div
                        class="mt-1 flex items-center gap-x-1.5">
                        <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p class="text-xs leading-5 text-gray-500">
                          {{ row.doctor.sip }}
                        </p>
                      </div>
                    </div>
                    <ChevronRightIcon
                      class="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true" />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <!-- Assessment -->
          <section class="pt-6">
            <div class="border-x border-t p-2 font-semibold text-sm rounded-t-lg bg-gray-200 text-slate-500">
              Assessment
            </div>
            <div class="border rounded-b-lg p-4">
              <div class="mb-5">
                <label
                  for="base-input"
                  type="base"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pemeriksaan <span class="text-red-600">**</span></label>
                <textarea
                  id="base-input"
                  type="base"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
              </div>
              <div class="mb-5 grow">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagnosa <span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                <textarea
                  id="base-input"
                  type="base"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" />
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prognosa<span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ICD-10<span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
            </div>
          </section>
          <!-- Plan -->
          <section class="pt-6">
            <div class="border-x border-t p-2 font-semibold text-sm rounded-t-lg bg-gray-200 text-slate-500">
              Plan
            </div>
            <div class="border rounded-b-lg p-4">
              <div class="pb-4">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Layanan/Tindakan
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                        Jenis Tanggungan
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Jumlah
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        &nbsp;
                      </td>
                      <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                        &nbsp;
                      </td>
                      <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-4 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    class="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                    Tambah Tindakan & layanan
                  </button>
                </div>
              </div>

              <div>
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Obat
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                        Prioritas
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                        Cara Penggunaan
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        &nbsp;
                      </td>
                      <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                        &nbsp;
                      </td>
                      <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                        &nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-4 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    class="block rounded-md bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                    Tambah Obat-Obatan
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="flex flex-row-reverse gap-2 py-4">
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
        </fieldset>
      </form>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useHead } from '@unhead/vue'
import { ChevronRightIcon, PhotoIcon } from '@heroicons/vue/20/solid'
import type { INavigation } from '@/interfaces/navs'
import type { IPagination } from '@/interfaces/paginations'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import JsonData from '@/utils/objective.json'

interface IObjective {
  id: number
  date: string
  doctor: {
    id: number
    img: string
    name: string
    sip: string
    branch: string
  }
  diagnosis: string[]
}

const isSaved = ref<boolean>(false)
const objective = ref<IPagination<IObjective[]>>(JsonData)

const navs = ref<INavigation[]>([
  { name: 'Medical Record', link: '/admin', active: false },
  { name: 'Create', link: '/admin/users', active: true }
])

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
  title: 'Home | e-Smart Clinic'
})
</script>
