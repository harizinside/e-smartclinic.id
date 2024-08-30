<template>
  <Dialog
    as="div"
    class="relative z-50">
    <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0">
      <div class="fixed inset-0 bg-black/25" />
    </TransitionChild>

    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95">
          <DialogPanel
            class="mx-auto w-full max-w-3xl transform relative overflow-hidden rounded-md bg-white text-left shadow-xl transition-all">
            <DialogTitle
              as="h3"
              class="text-lg font-medium leading-6 p-4 bg-orange-700 text-orange-200">
              <div class="flex items-center justify-between">
                Camera or Gallery
                <button
                  type="button"
                  class="relative rounded-md bg-orange-700 text-orange-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  @click="$emit('close')">
                  <span class="absolute -inset-2.5" />
                  <span class="sr-only">Close panel</span>
                  <XMarkIcon
                    class="h-6 w-6"
                    aria-hidden="true" />
                </button>
              </div>
            </DialogTitle>

            <div class="mt-2 px-4 pt-2">
              <div>
                <div class="sm:hidden">
                  <label
                    for="tabs"
                    class="sr-only">Select a tab</label>
                  <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                  <select
                    id="tabs"
                    name="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    @change="changeTab">
                    <option
                      v-for="tab in tabs"
                      :key="tab.name">
                      {{ tab.name }}
                    </option>
                  </select>
                </div>
                <div class="hidden sm:block">
                  <div class="border-b border-gray-200">
                    <nav
                      class="-mb-px grid grid-cols-2"
                      aria-label="Tabs">
                      <a
                        v-for="tab in tabs"
                        :key="tab.name"
                        :href="tab.href"
                        :class="[tab.name === tabActive ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'group inline-flex items-center justify-center border-b-2 w-full py-4 px-1 text-sm font-medium']"
                        :aria-current="tab.name ? 'page' : undefined"
                        @click="changeTab">
                        <component
                          :is="tab.icon"
                          :class="[tab.name === tabActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']"
                          aria-hidden="true" />
                        <span>{{ tab.name }}</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="tabActive === 'Galery'"
              class="mt-2 px-4">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  @dragover.prevent="handleDragOver"
                  @drop.prevent="handleDrop">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Click to upload or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG atau GIF (max. 10MB)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    :multiple="multipleImage"
                    @change="handleFileChange">
                </label>
              </div>
            </div>
            <div
              v-else
              class="mt-2 px-4">
              <WebCamUI
                :fullscreen-state="false"
                @photo-taken="photoTaken" />
            </div>
            <div>
              <div
                v-if="listOfImages.length > 0"
                class="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-x-6 md:grid-cols-4 md:gap-y-2 lg:gap-x-8 px-4">
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
                  <div class="text-xs font-medium text-gray-700 text-center p-2">
                    <span class="absolute inset-0" />
                    {{ handleText(image?.file?.name ?? 'uploades_' + index) }}
                  </div>
                  <div class="pb-3">
                    <button
                      class="relative flex items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-xs w-full font-medium text-red-100 hover:bg-red-200"
                      @click="deleteImage(index)">
                      HAPUS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                <button
                  type="button"
                  class="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  @click="save">
                  <ArrowPathIcon
                    v-if="submitted"
                    class="animate-spin h-5 w-5 mr-3" />
                  Simpan
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="$emit('close')">
                  Tutup
                </button>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WebCamUI } from 'vue-camera-lib'
import {
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'
import { CameraIcon, PhotoIcon, ArrowPathIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'

interface UploadedFile {
  file: File;
  url: string;
}

interface BlobFile {
  blob: Blob;
  image_data_url: string;
}

const tabActive = ref<'Camera' | 'Galery'>('Galery')
const listOfImages = ref<UploadedFile[]>([])
const submitted = ref(false)

const props = defineProps<{
  multipleImage: boolean
}>()

const emit = defineEmits([ 'close', 'images' ])

const tabs = [
  { name: 'Galery', href: '#', icon: PhotoIcon },
  { name: 'Camera', href: '#', icon: CameraIcon }
]

const changeTab = () => {
  if (tabActive.value === 'Galery') {
    tabActive.value = 'Camera'
  } else {
    tabActive.value = 'Galery'
  }
}

const handleDragOver = () => {
}

const handleDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    handleFiles(files)
  }
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files && files.length > 0) {
    handleFiles(files)
  }
}

const handleFiles = (files: FileList) => {
  if (props.multipleImage) {
    for (const file of files) {
      const url = URL.createObjectURL(file)
      listOfImages.value.push({ file, url })
    }
  } else {
    listOfImages.value = []
    const url = URL.createObjectURL(files[0])
    listOfImages.value.push({ file: files[0], url })
  }
}

const deleteImage = (index: number) => {
  if (tabActive.value === 'Galery') {
    listOfImages.value.splice(index, 1)
  } else {
    listOfImages.value.splice(index, 1)
  }
}

const photoTaken = (data: BlobFile) => {
  if (props.multipleImage) {
    listOfImages.value.push({
      file: new File([ data.blob ], window.crypto.randomUUID() + '.jpg', {
        type: data.blob.type
      }),
      url: data.image_data_url
    })
  } else {
    listOfImages.value = []
    listOfImages.value.push({
      file: new File([ data.blob ], window.crypto.randomUUID() + '.jpg', {
        type: data.blob.type
      }),
      url: data.image_data_url
    })
  }
}

const handleText = (text: string) => {
  if (text.length <= 15) {
    return text
  } else {
    return text.substring(0, 15) + '...'
  }
}

const save = () => {
  submitted.value = true
  emit('images', listOfImages.value)
}
</script>
