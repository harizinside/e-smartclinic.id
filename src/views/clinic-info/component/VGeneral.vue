<template>
  <div>
    <div class="pb-4">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Sistem E-Smart Klinik
      </h2>
      <p class="text-sm leading-6 text-gray-500">
        Kelola data dan dokumen bisnis info
      </p>
    </div>
    <div class="col-span-full flex items-center gap-x-8">
      <img
        src="/img/icons/icon-512.webp"
        alt=""
        class="h-24 w-24 flex-none rounded-xl bg-gray-800 object-contain">
      <div>
        <button
          type="button"
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
          Change avatar
        </button>
        <p class="mt-2 text-xs leading-5 text-gray-600">
          JPG, GIF or PNG. 1MB max.
        </p>
      </div>
    </div>
    <form>
      <fieldset class="pt-5">
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID Merchant</label>
            <input
              type="text"
              :value="props.generalInfo.merchant"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secret Key</label>
            <input
              type="password"
              :value="props.generalInfo.key"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Klinik</label>
          <input
            type="text"
            :value="props.generalInfo.name"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="text"
              :value="props.generalInfo.email"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
            <input
              type="text"
              :value="props.generalInfo.phone"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
        <div class="mb-5">
          <label
            for="company-website"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website Perusahaa</label>
          <div class="mt-2">
            <div class="flex rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">http://</span>
              <input
                id="company-website"
                type="text"
                :value="props.generalInfo.sites"
                name="company-website"
                class="block flex-1 border-0 bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="www.example.com">
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900">Social Media (Instagram)</label>
          <div class="relative mt-2 rounded-lg shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-instagram h-5 w-5 text-gray-400"
                viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </div>
            <input
              id="email"
              type="email"
              :value="props.generalInfo.social.instagram"
              name="email"
              class="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6">
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
interface IData {
  generalInfo: {
    id: number
    merchant: string
    key: string
    url: string
    name: string
    email: string
    phone: string
    sites: string
    social: {
      instagram: string
    }
  }
}
const props = defineProps<IData>()
</script>
