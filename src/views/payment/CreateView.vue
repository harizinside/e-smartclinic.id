<template>
  <div>
    <AdminLayouts>
      <VBreadcrumbNavigation :navs="navs" />
      <div class="grid md:grid-cols-3 gap-4">
        <div class="col-span-2 pr-2 pt-4">
          <section>
            <a>
              <ul
                role="list"
                class="divide-y divide-gray-100">
                <li class="relative flex justify-between">
                  <div class="flex min-w-0 gap-x-4">
                    <img
                      class="h-12 w-12 object-contain flex-none rounded-full bg-gray-50"
                      src="">
                    <div class="min-w-0 flex-auto">
                      <p class="text-sm font-semibold leading-6 text-gray-900">
                        <span class="absolute inset-x-0 -top-px bottom-0" />
                        sasasas
                      </p>
                      <p class="mt-1 flex text-xs leading-5 text-gray-500">
                        <span class="relative truncate hover:underline">sasasas</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex shrink-0 items-center gap-x-4">
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                      <p class="text-sm leading-6 text-gray-900">-</p>
                      <div class="mt-1 flex items-center gap-x-1.5">
                        <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p class="text-xs leading-5 text-gray-500">sasa</p>
                      </div>
                    </div>
                    <ChevronRightIcon
                      class="h-4 w-4 flex-none text-gray-400"
                      aria-hidden="true" />
                  </div>
                </li>
              </ul>
            </a>
          </section>
          <section>
            <Disclosure v-slot="{ open }">
              <ul
                role="list"
                class="mt-6 divide-y border-t divide-gray-200 border-gray-200 text-sm font-medium text-gray-500">
                <li class="flex space-x-5 py-5">
                  <img
                    src="/img/default/produk-racikan-pot.webp"
                    alt="produk-racikan-pott"
                    class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center">
                  <div class="flex-auto space-y-1">
                    <h3 class="text-gray-900">
                      <span>Racikan (M2A)</span>
                    </h3>
                    <p>10ML</p>
                    <p>1</p>
                  </div>
                  <p class="flex-none font-medium text-gray-900">
                    {{ $n(30000, 'currency') }}
                  </p>
                </li>
              </ul>
              <DisclosureButton
                class="flex w-full justify-between bg-orange-100 rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-grey-200 focus:outline-none focus-visible:ring focus-visible:ring-grey-500/75">
                <span class="font-medium text-sm">Additional info</span>
                <ChevronLeftIcon
                  :class="open ? 'rotate-90 transform' : ''"
                  class="h-4 w-4 text-orange-500" />
              </DisclosureButton>
              <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </DisclosurePanel>
            </Disclosure>

            <div class="pt-2">
              <button
                type="button"
                class="inline-flex w-full items-center gap-x-2 rounded-lg bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <PlusIcon
                  class="-ml-0.5 h-4 w-4"
                  aria-hidden="true" />
                Add Items
              </button>
            </div>
          </section> 
        </div>
        <section>
          <div class="hidden md:block">
            <div class="flex flex-col justify-between lg:min-h-[600px] md:min-h-[500px]">
              <div class="translate-y-[5px] border-l border-white">
                <img
                  src="/img/default/paper-cut-footer.svg"
                  alt=""
                  class="w-full h-full object-contain">
              </div>
              <div class="border-x-[0.9px] text-xs border-black flex-1 p-4 flex flex-col justify-between">
                <div>
                  <img
                    src="/img/icons/e-smartclinic-black.svg"
                    alt="Logo"
                    class="w-full h-10 object-contain">
                  <div class="grid grid-cols-2 gap-1 pt-4">
                    <div class="text-left font-bold">
                      No. Invoice
                    </div>
                    <div class="text-right font-bold">
                      #12334567
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                </div>
                <div class="flex-1">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-left font-medium">
                      Biaya Product
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(50000, 'currency') }}
                    </div>
                    <div class="text-left font-medium">
                      Biaya Tindakan
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(150000, 'currency') }}
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-left font-medium">
                      Sub Total Biaya
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(200000, 'currency') }}
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-left font-medium">
                      Discount 10%
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(20000, 'currency') }}
                    </div>
                    <div class="text-left font-medium">
                      Asuransi
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(0, 'currency') }}
                    </div>
                    <div class="text-left font-medium">
                      Biaya Admin
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(5000, 'currency') }}
                    </div>
                    <div class="text-left font-medium">
                      PPN 11%
                    </div>
                    <div class="text-right font-medium">
                      {{ $n(10000, 'currency') }}
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-left font-semibold">
                      Total Tagihan
                    </div>
                    <div class="text-right font-semibold">
                      {{ $n(150000, 'currency') }}
                    </div>
                    <div class="text-left font-semibold">
                      Total Bayar Debit
                    </div>
                    <div class="text-right font-semibold">
                      {{ $n(150000, 'currency') }}
                    </div>
                    <div class="text-left font-semibold">
                      Total Bayar Cash
                    </div>
                    <div class="text-right font-semibold">
                      {{ $n(150000, 'currency') }}
                    </div>
                  </div>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                  <div class="grid grid-cols-2 gap-1">
                    <div class="text-left font-semibold">
                      Kembali
                    </div>
                    <div class="text-right font-semibold">
                      {{ $n(2000, 'currency') }}
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                  <span class="font-medium text-grey-800">e-Smart Clinic</span>
                </div>
              </div>
              <div class="-translate-y-[5px] border-r border-white">
                <img
                  src="/img/default/paper-cut-header.svg"
                  alt=""
                  class="w-full h-full object-contain">
              </div>
            </div>
          </div>
        </section>
      </div>

      <template #footer>
        <div>
          <div class="fixed bottom-0 w-full lg:pr-72">
            <div class="p-2 px-2">
              <footer class="bg-orange-100 rounded-lg dark:bg-gray-800 w-full">
                <div class="w-full mx-auto max-w p-2.5">
                  <div class="px-0.5 flex flex-row-reverse gap-4">
                    <div>
                      <button
                        type="button"
                        class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                        Process Pay
                      </button>
                    </div>
                    <div>
                      <p class="mb-0 text-end text-xs">
                        Total Tagihan
                      </p>
                      <p class="mb-0 text-primary-500 text-end font-bold">
                        {{ $n(1426500, 'currency') }}
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </template>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  } from '@headlessui/vue'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

interface IPaymentData {
  id: number
  date: string
  code: string
  patients: {
    id: number
    url: string
    name: string
    code: string
  },
  services: {
    id: number
		url: string
    name: string
    price: number
		quantity: number
    discount?: {
      id: number
      kind: 'FIXED' | 'PERCENTAGE'
    }[]
  }
  products: {
    id: number
		url: string
    name: string
    price: number
		quantity: number
    discount?: {
      id: number
      kind: 'FIXED' | 'PERCENTAGE'
      value: number
    }[]
  }[]
  discount?: {
    id: number
    kind: 'FIXED' | 'PERCENTAGE'
    value: number
  }[] 
  voucher?: {
    id: number
    kind: 'FIXED' | 'PERCENTAGE'
    value: number
  }[]
  status:
		| 'PENDING'
		| 'WAITING_PAYMENT'
		| 'WAITING_CONFIRM'
		| 'SUCCESS'
		| 'FAILED'
		| 'EXPIRED'
		| 'REQUEST_REFUND'
		| 'REFUND_APPROVED';
  summary: {
    productsTotal: number
    productsServices: number
    subTotal: number
    grandTotal: number
  }
}

const navs = ref<INavigation[]>([
  { name: 'Payments', link: '/payments', active: true },
  { name: 'Create', link: '/payments/create', active: true }
])

useHead({
  title: 'Create payment | e-Smart Clinic'
})
</script>

<style></style>
