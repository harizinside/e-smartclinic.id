<template>
  <div>
    <div class="border-gray-900/10 pb-2">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Pengesahan Klinik
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Opsi ini di buat apabila klinik menggunakan pengiriman online
      </p>
    </div>
    <form>
      <fieldset>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. NPWP</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="mt-4">
          <div class="flex bg-gray-50 items-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border border-dashed border-gray-400 rounded-xl">
            <DocumentTextIcon
              class="h-8 w-8 text-gray-400"
              aria-hidden="true" />
            <div class="ps-3">
              <div
                class="text-sm font-semibold">
                NPWP (Nomor Pokok Wajib Pajak) Badan.pdf
              </div>
              <div
                class="text-xs text-gray-500">
                Ketuk di sini untuk membuka
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 pt-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. NIB</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="mt-4">
          <div class="flex bg-gray-50 items-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border border-dashed border-gray-400 rounded-xl">
            <DocumentTextIcon
              class="h-8 w-8 text-gray-400"
              aria-hidden="true" />
            <div class="ps-3">
              <div
                class="text-sm font-semibold">
                NIB (Nomor Induk Berusaha).pdf
              </div>
              <div
                class="text-xs text-gray-500">
                Ketuk di sini untuk membuka
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex bg-gray-50 items-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border border-dashed border-gray-400 rounded-xl">
            <DocumentTextIcon
              class="h-8 w-8 text-gray-400"
              aria-hidden="true" />
            <div class="ps-3">
              <div
                class="text-sm font-semibold">
                Surat Keputusan Kementerian Hukum & HAM.pdf
              </div>
              <div
                class="text-xs text-gray-500">
                Ketuk di sini untuk membuka
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex bg-gray-50 items-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border border-dashed border-gray-400 rounded-xl">
            <DocumentTextIcon
              class="h-8 w-8 text-gray-400"
              aria-hidden="true" />
            <div class="ps-3">
              <div
                class="text-sm font-semibold">
                Akta Pendirian dan Perubahan Perusahaan.pdf
              </div>
              <div
                class="text-xs text-gray-500">
                Ketuk di sini untuk membuka
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex bg-gray-50 items-center py-4 pl-2 text-gray-900 whitespace-nowrap dark:text-white border border-dashed border-gray-400 rounded-xl">
            <DocumentTextIcon
              class="h-8 w-8 text-gray-400"
              aria-hidden="true" />
            <div class="ps-3">
              <div
                class="text-sm font-semibold">
                Surat Izin Usaha.pdf
              </div>
              <div
                class="text-xs text-gray-500">
                Ketuk di sini untuk membuka
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 pt-4">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. KBLI (Tidak Wajib)</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
</script>
