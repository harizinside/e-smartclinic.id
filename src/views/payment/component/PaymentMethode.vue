<template>
  <div>
    <Dialog
      class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
                        Payment Gatewaty
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          @click="$emit('close')">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon
                            class="h-6 w-6"
                            aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pt-4">
                    <div class="w-full bg-gray-100">
                      <div class="px-6 py-3 text-slate-600">
                        <p class="font-bold text-xl mb-0.5">
                          {{ $n(1426500, 'currency') }}
                        </p>
                        <p class="text-[10px]">
                          Order ID #sample-store-17279987654
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-4 flex-1">
                    <div class="px-4 sm:px-6">
                      <div class="gap-2 border w-full rounded-lg p-2 text-xs font-medium">
                        <div class="flex justify-between">
                          <div class="flex gap-2">
                            <PercentBadgeIcon
                              class="h-4 w-4 flex-none text-orange-400"
                              aria-hidden="true" /> 
                            Remainder Promo
                          </div>
                          <button class="flex text-orange-500 font-medium">
                            Lihat 
                            <ChevronRightIcon
                              class="h-4 w-4 flex-none text-orange-500"
                              aria-hidden="true" /> 
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div class="pt-4">
                      <!-- Cash -->
                      <Disclosure>
                        <DisclosureButton class="py-2 px-6 bg-gray-100 border-b hover:bg-gray-50 font-medium text-sm text-slate-700 w-full text-left">
                          <div class="flex flex-row justify-between items-center">
                            <div>
                              <p class="text-base font-bold mb-0.5">
                                Cash
                              </p>
                              <p class="text-[10px]">
                                Pembayaran tunai menggunakan uang fisik
                              </p>
                            </div>
                            <ChevronDownIcon
                              class="h-4 w-4 flex-none"
                              aria-hidden="true" />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500 px-6 pb-2">
                          <div class="flex flex-wrap gap-2 items-center pt-3">
                            <button
                              v-for="(number, index) in ceilCash(1426500)"
                              :key="index"
                              type="button"
                              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                              {{ $n(number, 'currency') }}
                            </button>
                          </div>
                          <form
                            class="mt-2 sm:flex sm:items-center"
                            @submit.prevent="onSubmit">
                            <div class="w-full sm:max-w-xs">
                              <label
                                for="cash"
                                class="sr-only">Reguler</label>
                              <input
                                id="cash"
                                type="number"
                                name="cash"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="RP.">
                            </div>
                            <button
                              type="submit"
                              class="mt-3 inline-flex w-full items-center justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:ml-3 sm:mt-0 sm:w-auto">
                              BAYAR
                            </button>
                          </form>
                        </DisclosurePanel>
                      </Disclosure>
                      <!-- EDC -->
                      <Disclosure>
                        <DisclosureButton class="py-2 px-6 bg-gray-100 border-b hover:bg-gray-50 font-medium text-sm text-slate-700 w-full text-left">
                          <div class="flex flex-row justify-between items-center">
                            <div>
                              <p class="text-base font-bold mb-0.5">
                                EDC (Debit & Credit Card)
                              </p>
                              <p class="text-[10px]">
                                Pembayaran melalui rekening menggunakan kartu
                              </p>
                            </div>
                            <ChevronDownIcon
                              class="h-4 w-4 flex-none"
                              aria-hidden="true" />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500 px-6 pb-2 pt-2">
                          <div class="mb-2">
                            <label
                              for="location"
                              class="block text-sm font-bold leading-6 text-gray-900">Location</label>
                            <div class="mt-2 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                              <div class="flex items-center">
                                <input
                                  name="notification-method"
                                  type="radio"
                                  class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600">
                                <label
                                  class="ml-3 block text-sm font-medium leading-6 text-gray-900">Debit</label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  name="notification-method"
                                  type="radio"
                                  class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600">
                                <label
                                  class="ml-3 block text-sm font-medium leading-6 text-gray-900">Credit Cards</label>
                              </div>
                            </div>
                          </div>
                          <div class="mb-2">
                            <label
                              for="location"
                              class="block text-sm font-bold leading-6 text-gray-900">Bank</label>
                            <select
                              id="location"
                              name="location"
                              class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6">
                              <option
                                v-for="(row, index) in ListBank"
                                :key="index"
                                :value="row.id">
                                {{ row.name }}
                              </option>
                            </select>
                          </div>
                          <div class="mb-2">
                            <label
                              class="block text-sm font-bold leading-6 text-gray-900">Nomor Kartu</label>
                            <div class="mt-2">
                              <input
                                type="number"
                                name="number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="1234 1234 1234 1234">
                            </div>
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-bold leading-6 text-gray-900">Nama Kartu</label>
                            <div class="mt-2">
                              <input
                                type="number"
                                name="number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="Pasien">
                            </div>
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-sm font-bold leading-6 text-gray-900">Ref Number</label>
                            <div class="mt-2">
                              <input
                                type="number"
                                name="number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="">
                            </div>
                          </div>
                          <div class="mb-1">
                            <button
                              type="button"
                              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                              BAYAR
                            </button>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                      <!-- E-Wallet -->
                      <Disclosure>
                        <DisclosureButton class="py-2 px-6 bg-gray-100 border-b hover:bg-gray-50 font-medium text-sm text-slate-700 w-full text-left">
                          <div class="flex flex-row justify-between items-center">
                            <div>
                              <p class="text-base font-bold mb-0.5">
                                E-Wallet
                              </p>
                              <p class="text-[10px]">
                                Pembayaran menggunakan uang elektronik dalam dompet digital
                              </p>
                            </div>
                            <ChevronDownIcon
                              class="h-4 w-4 flex-none"
                              aria-hidden="true" />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500 px-6 pb-2 pt-2">
                          <RadioGroup v-model="eWallet">
                            <RadioGroupLabel class="block text-sm font-bold leading-6 text-gray-900 pb-1">
                              Category
                            </RadioGroupLabel>
                            <RadioGroupOption
                              v-for="(row, index) in ListEWallet" 
                              :key="index"
                              v-slot="{ active }"
                              :value="eWallet"
                              :aria-label="row.name"
                              as="template"
                              class="border-b p-2 gap-4">
                              <div :class="[active ? 'border-orange-600 ring-orange-600' : 'border-gray-300', 'grid grid-cols-4 relative cursor-pointer bg-white px-2 focus:outline-none']">
                                <img
                                  class="inline-block h-6"
                                  :src="row.img"
                                  alt="">
                                <span class="text-sm font-semibold"> {{ row.name }}</span>
                              </div>
                            </RadioGroupOption>
                          </RadioGroup>
                          <div class="my-4">
                            <label
                              class="block text-sm font-bold leading-6 text-gray-900">Ref Number</label>
                            <div class="mt-2">
                              <input
                                type="number"
                                name="number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="">
                            </div>
                          </div>
                          <div class="mb-1 pt-4">
                            <button
                              type="button"
                              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                              BAYAR
                            </button>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                      <!-- Other -->
                      <Disclosure>
                        <DisclosureButton class="py-2 px-6 bg-gray-100 hover:bg-gray-50 font-medium text-sm text-slate-700 w-full text-left">
                          <div class="flex flex-row justify-between items-center">
                            <div>
                              <p class="text-base font-bold mb-0.5">
                                Other
                              </p>
                              <p class="text-[10px]">
                                Pembayaran lain yang belum disebutkan sebelumnya
                              </p>
                            </div>
                            <ChevronDownIcon
                              class="h-4 w-4 flex-none"
                              aria-hidden="true" />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel class="text-gray-500 px-6 pb-2 pt-2">
                          <div class="my-4">
                            <label
                              class="block text-sm font-bold leading-6 text-gray-900">Ref Number</label>
                            <div class="mt-2">
                              <input
                                type="number"
                                name="number"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                placeholder="">
                            </div>
                          </div>
                          <div class="mb-1 pt-4">
                            <button
                              type="button"
                              class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                              BAYAR
                            </button>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
    <TransitionRoot
      as="template"
      :show="PaymentStatus">
      <AlertPayment
        @close="PaymentStatus = false" />
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Dialog, 
  DialogPanel, 
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot
 } from '@headlessui/vue'
import { 
  XMarkIcon, 
  PercentBadgeIcon, 
  ChevronRightIcon, 
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import AlertPayment from './AlertPayment.vue'

const ListEWallet = ref<{
  id: number
  name: string
  img: string
}[]>([
  {
    id: 1, 
    name: 'GoPay',
    img: '/img/payments/gopay.png' 
  },
  {
    id: 2, 
    name: 'OVO',
    img: '/img/payments/ovo.png' 
  },
  {
    id: 3, 
    name: 'Dana',
    img: '/img/payments/dana.png' 
  },
  {
    id: 4, 
    name: 'LinkAja',
    img: '/img/payments/linkaja1.png' 
  },
  {
    id: 5, 
    name: 'ShopeePay',
    img: '/img/payments/shopee-pay.png' 
  },
  {
    id: 6, 
    name: 'Akulaku',
    img: '/img/payments/akulaku.webp' 
  },
  {
    id: 7, 
    name: 'Kredivo',
    img: '/img/payments/kredivo.png' 
  },
  {
    id: 8, 
    name: 'QRIS',
    img: '/img/payments/qris.png' 
  }
])
const ListBank = ref<{
  id: number
  name: string
}[]>([
  { id: 1, name: 'BRI' },
  { id: 2, name: 'Bank Mandiri' },
  { id: 3, name: 'BNI' },
  { id: 4, name: 'BTN' },
  { id: 5, name: 'Bank Danamond' },
  { id: 6, name: 'Bank Permata' },
  { id: 7, name: 'BCA' },
  { id: 8, name: 'Bank Maybank' },
  { id: 9, name: 'Bank CIMB' },
  { id: 10, name: 'Bank UOB' },
  { id: 11, name: 'Bank OCBC' },
  { id: 12, name: 'Bank HSCB' },
  { id: 13, name: 'Bank Muamalat' },
  { id: 14, name: 'BSI Syariah' },
  { id: 15, name: 'Bank ICBC' }
])
const eWallet = ref('startup')
const PaymentStatus = ref<boolean>(false)

const ceilCash = (args: number): number[] =>  {
  let firstRound, secondRound

  if (args < 10000) {
    firstRound = Math.ceil(args / 500) * 500
    secondRound = firstRound + 500
  } else if (args < 100000) {
    firstRound = Math.ceil(args / 5000) * 5000
    secondRound = firstRound + 5000
  } else if (args < 1000000) {
    firstRound = Math.ceil(args / 50000) * 50000
    secondRound = firstRound + 50000
  } else {
    firstRound = Math.ceil(args / 500000) * 500000
    secondRound = firstRound + 500000
  }

  return [ args, firstRound, secondRound ]
}

const onSubmit = () => {
  PaymentStatus.value = true
}

defineEmits([ 'close', 'submit' ])
</script>
