<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
</script>

<style></style>
