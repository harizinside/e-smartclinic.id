<template>
  <div>
    <AdminLayouts>
      <div class="bg-white">
        <div class="pb-8">
          <div class="overflow-hidden rounded-lg bg-orange-700 lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20">
              <div class="lg:self-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span class="block">Selamat datang</span>
                  <span class="block">Mulai uji e-SmartClinic</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-orange-200">
                  Dokumentasi dan Log perubahan ada pada Website Kami, silakan kunjungi dan pelajari seluruh fungsi dashboard.
                </p>
                <a
                  href="#"
                  class="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600 shadow hover:bg-orange-50">Cek Log Perubahan</a>
              </div>
            </div>
            <div class="aspect-h-3 aspect-w-5 -mt-6 md:aspect-h-1 md:aspect-w-2">
              <img
                class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/plus/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot">
            </div>
          </div>
        </div>
      </div>
      <VAccumulation />
      <ChartPayment
        type="line"
        :data="lineChartData"
        :options="chartOptions" />
    </AdminLayouts>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useHead } from '@unhead/vue'
import AdminLayouts from '@/views/AdminLayouts.vue'
import VAccumulation from '@/components/VAccumulation.vue'
import ChartPayment from '@/components/ChartPayment.vue'

const lineChartData = reactive({
  labels: [ 
    'Januari', 
    'Februari', 
    'Maret', 
    'April', 
    'Mei', 
    'Juni', 
    'Juli', 
    'Agustus', 
    'September', 
    'Oktober', 
    'November', 
    'Desember'
  ],
  datasets: [
    {
      label: 'NMW Petogogan',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
      data: [ 12, 15, 17, 20, 23, 27, 31, 40, 40, 41, 42, 45 ]
    },
    {
      label: 'NMW Kalimalang',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      fill: false,
      data: [ 10, 13, 15, 16, 19, 20, 22, 23, 25, 26, 27, 30 ]
    },
    {
      label: 'LNMW Pos Pengumbean',
      borderColor: 'rgba(71, 183,132,.5)',
      borderWidth: 2,
      fill: false,
      data: [ 10, 12, 14, 16, 18, 20, 22, 24, 23, 24, 25, 27 ]
    }
  ]
})

const chartOptions = reactive({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
})

useHead({
  title: 'Home | e-Smart Clinic'
})
</script>
