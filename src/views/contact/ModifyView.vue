<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="pt-4">
        <VAlerts
          v-if="alert"
          :message="alert!.message"
          :type="alert?.type"
          @close="alert=undefined" />
      </div>
      <section>
        <form @submit.prevent="submit">
          <section
            v-if="listOfImages.length > 0"
            name="assets">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Assets
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-500">
              List of assets that have been provided
            </p>
            <div class="flex flex-row gap-2">
              <div class="mt-5">
                <div
                  v-for="(image, index) in listOfImages"
                  :key="index"
                  class="group relative">
                  <div class="overflow-hidden rounded-xl bg-white h-40 w-full">
                    <img
                      :src="image.url"
                      :alt="image?.file?.name ?? 'uploades_' + index"
                      class="w-full h-full object-contain object-center rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-base font-semibold leading-7 text-gray-900 pt-4">
              General Info
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-500">
              This information will be displayed publicly and send to
              <b>SATUSEHAT</b> except for Personal Info
            </p>

            <div class="flex flex-row gap-3 pt-2">
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar</label>
                <button
                  type="button"
                  class="px-6 py-2 mb-2 text-white bg-gray-900 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm"
                  @click="dialogCamera=true">
                  Camera or Galery
                </button>
              </div>
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gelar <span class="text-red-600">**</span></label>
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
              <div class="mb-5 grow">
                <label
                  for="base-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama <span class="text-red-600">**</span></label>
                <input
                  id="base-input"
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
            </div>
            <div class="flex flex-row gap-2">
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identitas Picture</label>
                <button
                  type="button"
                  class="px-6 py-2 mb-2 text-white bg-gray-900 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm">
                  Camera or Galery
                </button>
              </div>
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identity Number <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
                <span class="text-xs font-medium text-gray-500">KTP / SIM / VISA or Similar</span>
              </div>
            </div>
            <div class="flex flex-row gap-3">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telepon <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
            </div>
            <div class="flex flex-row gap-3">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat Lahir <span class="text-red-600">**</span></label>
                <input
                  type="text"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir <span class="text-red-600">**</span></label>
                <input
                  type="date"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  required>
              </div>
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin <span class="text-red-600">**</span></label>
                <div class="flex pt-2">
                  <div class="flex items-center me-4">
                    <input
                      id="gender_female"
                      type="radio"
                      value="0"
                      class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                      for="gender_female"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                  </div>
                  <div class="flex items-center me-4">
                    <input
                      id="gender_male"
                      type="radio"
                      value="1"
                      class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                      for="gender_male"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laki-laki</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat <span class="text-red-600">**</span></label>
              <textarea
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                rows="3"
                required />
            </div>
            <div class="flex flex-row gap-2">
              <div class="mb-5 grow">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profinsi / Kota / Kecamatan / Kelurahan <span class="text-red-600">**</span></label>
                <button
                  type="button"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 text-left">
                  &nbsp;
                </button>
                <input
                  type="hidden">
              </div>
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode POS</label>
                <input
                  type="number"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
              </div>
            </div>
          </section>
          <section>
            <div class="w-full">
              <div class="mx-auto w-full rounded-2xl bg-white py-1">
                <Disclosure v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full items-center justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                    <span class="font-bold">Tampilkan data detail</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-orange-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <div class="flex flex-row gap-2">
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Perkawinan</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profesi</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edukasi</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Golongan darah</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex flex-row gap-2">
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agama</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suku</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipe</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                      <div class="mb-5 basis-1/4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kewarganegaraan</label>
                        <select
                          id="country"
                          name="country"
                          autocomplete="country-name"
                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  v-slot="{ open }"
                  as="div"
                  class="mt-2">
                  <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                    <span class="font-bold">Keluarga pasien</span>
                    <ChevronUpIcon
                      :class="open ? 'rotate-180 transform' : ''"
                      class="h-5 w-5 text-orange-500"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <div
                      v-for="index in 3"
                      :key="index">
                      <div class="flex flex-row gap-3">
                        <div class="mb-5 grow">
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama keluarga </label>
                          <input
                            type="text"
                            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                        </div>
                        <div class="mb-5 grow">
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hubungan </label>
                          <input
                            type="text"
                            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                        </div>
                        <div class="mb-5 grow">
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kontak yang bisa dihubungi</label>
                          <input
                            type="text"
                            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                        </div>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </section>
          <section>
            <div class="flex flex-row-reverse gap-2 py-2">
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
        :show="dialogCamera">
        <VDialogCamera
          :multiple-image="false"
          @close="dialogCamera=false"
          @images="handleImages" />
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useHead } from '@unhead/vue'
import { TransitionRoot, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import type { IAlert } from '@/interfaces/alerts'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import VAlerts from '@/components/VAlerts.vue'
import VDialogCamera from '@/components/VDialogCamera.vue'

interface UploadedFile {
  file: File;
  url: string;
}

const navs = [
  { name: 'Dashboard', link: '/', active: false },
  { name: 'Contacts', link: '/contacts', active: false },
  { name: 'Create', link: '/contacts/create', active: true }
]

const alert = ref<IAlert>()
const isSaved = ref<boolean>(false)
const dialogCamera = ref<boolean>(false)
const listOfImages = ref<UploadedFile[]>([])

const submit = () => {
  console.info('submit')
}

const handleImages = (args: UploadedFile[]) => {
  dialogCamera.value = false
  listOfImages.value = args
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
  title: 'Modify Contact | e-Smart Clinic'
})
</script>

<style></style>
