<template>
  <div>
    <div class="pb-4">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        {{ $t('greetings.hello') }}
      </h2>
      <p class="text-sm leading-6 text-gray-500">
        Data ini <b>SATUSEHAT</b> except for Personal Info
      </p>
    </div>
    <div class="col-span-full flex items-center gap-x-8">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover">
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
        <div class="mb-5 grow">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Klinik</label>
          <input
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            required>
        </div>
        <div class="flex flex-row gap-3">
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
          <div class="mb-5 grow">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
            <input
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              required>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>
