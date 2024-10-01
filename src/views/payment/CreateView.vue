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
                      :src="invoices.patients.img">
                    <div class="min-w-0 flex-auto">
                      <p class="text-sm font-semibold leading-6 text-gray-900">
                        <span class="absolute inset-x-0 -top-px bottom-0" />
                        {{ invoices.patients.name }}
                      </p>
                      <p class="mt-1 flex text-xs leading-5 text-gray-500">
                        <span class="relative truncate hover:underline">{{ invoices.patients.code }}</span>
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
                        <p class="text-xs leading-5 text-gray-500">{{ invoices.patients.type }}</p>
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
            <!-- Items -->
            <Disclosure
              v-for="(row, index) in invoices.products"
              :key="index"
              v-slot="{ open }">
              <ul
                role="list"
                class="mt-6 divide-y border-t divide-gray-200 border-gray-200 text-sm font-medium text-gray-500">
                <li class="flex space-x-5 py-5">
                  <img
                    :src="row.url"
                    alt="produk-racikan-pott"
                    class="h-24 w-24 flex-none border rounded-xl bg-gray-100 object-cover object-center">
                  <div class="flex-auto space-y-1">
                    <h3 class="text-gray-900">
                      <span class="font-semibold">{{ row.name }}</span>
                    </h3>
                    <p class="font-medium">
                      Price: {{ $n(row.price, 'currency') }}
                    </p>
                    <p class="font-medium">
                      Quantity:&nbsp;{{ row.quantity }}
                    </p>
                  </div>
                  <p class="flex-none font-medium text-gray-900">
                    {{ $n(row.price, 'currency') }}
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
              <DisclosurePanel class="px-4 pb-2 pt-2 text-sm text-gray-500">
                <legend class="text-sm font-semibold leading-6 text-gray-900">
                  Discounts
                </legend>
                <div class="pt-2 grid grid-cols-3 gap-3">
                  <div
                    v-for="(disc, i) in row.discount"
                    :key="i"
                    class="border rounded-lg">
                    <div class="p-4">
                      <p class="text-sm font-medium">
                        {{ $n(disc.value, 'currency') }}
                      </p>
                      <p>Diskon nih</p>
                      <p>Diskon nih</p>
                    </div>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>

            <!-- Services -->
            <Disclosure v-slot="{ open }">
              <ul
                v-for="(row, index) in invoices.services"
                :key="index"
                role="list"
                class="mt-6 divide-y border-t divide-gray-200 border-gray-200 text-sm font-medium text-gray-500">
                <li class="flex space-x-5 py-5">
                  <img
                    :src="row.url"
                    alt="produk-racikan-pott"
                    class="h-24 w-24 flex-none border rounded-xl bg-gray-100 object-cover object-center">
                  <div class="flex-auto space-y-1">
                    <h3 class="text-gray-900">
                      <span class="font-semibold">{{ row.name }}</span>
                    </h3>
                    <p>Price: {{ $n(row.price, 'currency') }}</p>
                    <p>Kuantiti: {{ row.quantity }}</p>
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
                class="inline-flex w-full items-center gap-x-2 rounded-lg bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                @click="dialogProduct = true">
                <PlusIcon
                  class="-ml-0.5 h-4 w-4"
                  aria-hidden="true" />
                Add Items
              </button>
            </div>
          </section> 
        </div>
        
        <PaperClip />
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
                        class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        @click="dialogPayment = true">
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
      <TransitionRoot
        as="template"
        :show="dialogPayment">
        <PaymentMethode
          @close="dialogPayment = false" />
      </TransitionRoot>
      <TransitionRoot
        as="template"
        :show="dialogProduct">
        <FindProducts
          @close="dialogProduct = false" />
      </TransitionRoot>
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot
  } from '@headlessui/vue'
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import type { INavigation } from '@/interfaces/navs'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VBreadcrumbNavigation from '@/components/VBreadcrumbNavigation.vue'
import PaymentMethode from './PaymentMethode.vue'
import PaperClip from './PaperClip.vue'
import FindProducts from './FindProducts.vue'

interface IPaymentData {
  id: number
  date: string
  code: string
  patients: {
    id: number
    nik: string
    img: string
    name: string
    code: string
    type: string
  }
  services: {
    id: number
		url: string
    name: string
    price: number
		quantity: number
    discount?: {
      id: number
      name: string
      kind: 'FIXED' | 'PERCENTAGE'
      value: number
    }[]
  }[]
  products: {
    id: number
		url: string
    name: string
    price: number
		quantity: number
    discount?: {
      id: number
      name: string
      kind: 'FIXED' | 'PERCENTAGE'
      value: number
    }[]
  }[]
  discount?: {
    id: number
    name: string
    kind: 'FIXED' | 'PERCENTAGE'
    value: number
  }[] 
  voucher?: {
    id: number
    name: string
    kind: 'FIXED' | 'PERCENTAGE'
    value: number
  }[]
  status: 'PENDING' | 'WAITING_PAYMENT' | 'WAITING_CONFIRM' | 'SUCCESS' | 'FAILED' | 'EXPIRED' | 'REQUEST_REFUND' | 'REFUND_APPROVED'
  summary: {
    productsTotal: number
    productsServices: number
    subTotal: number
    grandTotal: number
  }
}

const dialogPayment = ref<boolean>(false)
const dialogProduct = ref<boolean>(false)
const invoices = ref<IPaymentData>({
  id: 1,
  date: '2023-08-23T12:34:56',
  code: '123456789',
  patients: {
    id: 1,
    nik: '3173065405730004',
    img: 'https://avatar.iran.liara.run/public/girl?usearname=BR00605240',
    name: 'Laela Fijarwati',
    code: 'NMW-BR00605240',
    type: 'BPJS'
  },
  services: [
    {
      id: 5,
      url: '/img/treatments/botulinum-toxin-injection.png',
      name: 'Botulinum Toxin Injection',
      price: 95000,
      quantity: 1,
      total: 95000,
      discount: [],
      totalDiscount: 0,
      grandTotal: 95000
    }
  ],
  products: [
    {
      id: 7,
      url: '/img/items/1660795519_62a19188f15ee840f5660476.png',
      name: 'Lavit C 10 Tablet',
      price: 34656,
      quantity: 2,
      total: 69312,
      discount: [
        {
          id: 1,
          name: 'Discount 25% Lapi Laboratories',
          kind: 'PERCENTAGE',
          value: 25
        }
      ],
      totalDiscount: 17328,
      grandTotal: 51984
    },
    {
      id: 5,
      url: '/img/items/1643872511_thumbnail-vicee_500_rasa_anggur_2_tablet_hisap.jpeg',
      name: 'Vicee 500 Anggur 2 Tablet',
      price: 3615,
      quantity: 1
    },
    {
      id: 10,
      url: '/img/items/1719910843_inavitamax_c_vita_kaplet.jpeg',
      name: 'Inavitamax C Vita 30 Kaplet',
      price: 198275,
      quantity: 1
    }
  ],
  discount: [
    {
      id: 1,
      name: 'Discpunt 10% Member',
      kind: 'PERCENTAGE',
      value: 10
    }
  ],
  voucher: [
    {
      id: 1,
      name: 'Voucher Discount RP.1000',
      kind: 'FIXED',
      value: 1000
    }
  ],
  status: 'PENDING',
  summary: {
    productsServices: 95000,
    productsTotal: 5000,
    subTotal: 5000,
    grandTotal: 5000
  }
})
const navs = ref<INavigation[]>([
  { name: 'Payments', link: '/payments', active: true },
  { name: 'Create', link: '/payments/create', active: true }
])

useHead({
  title: 'Create payment | e-Smart Clinic'
})
</script>

<style></style>
