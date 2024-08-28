<template>
  <div>
    <fieldset
      class="border-b">
      <legend class="text-sm font-semibold leading-6 text-gray-900">
        Peran & Hak Istimewa
      </legend>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Pemilihan peran dan hak akses berdasarkan Kategori
      </p>
      <div class="mt-2.5 divide-y divide-gray-200">
        <div
          v-for="(account, accountIdx) in roles"
          :key="accountIdx"
          class="relative flex items-start pb-4 pt-3.5">
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label
              :for="`account-${account.id}`"
              class="font-bold text-gray-900">{{ account.name }}</label>
            <ul class="list-disc text-gray-500 text-sm px-5 py-2">
              <li
                v-for="label in account.description"
                :key="label">
                {{ label }}
              </li>
            </ul>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input
              :id="`account-${account.id}`"
              :aria-describedby="`account-${account.id}-description`"
              name="account"
              type="radio"
              class="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600">
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const roles = ref([
  { 
    id: 1, 
    name: 'Admin', 
    description: [
      'Mengelola seluruh konfigurasi sistem, termasuk pengaturan pengguna, hak akses, dan konfigurasi sistem lainnya.',
      'Bertanggung jawab atas keamanan dan integritas data dalam sistem EMRS.',
      'Mengatur dan memonitor backup data serta melakukan pemulihan data jika diperlukan.',
      'Memberikan dukungan teknis dan pelatihan bagi pengguna sistem lainnya.',
      'Melakukan audit dan pelaporan terhadap aktivitas pengguna dalam sistem.'
    ]
  },{ 
    id: 2, 
    name: 'Perawat', 
    description: [
      'Mencatat dan memperbarui rekam medis pasien, termasuk tanda-tanda vital, keluhan, dan perawatan yang diberikan.',
      'Mengelola dan mengakses informasi medis pasien, seperti riwayat penyakit, alergi, dan hasil laboratorium.',
      'Berkolaborasi dengan dokter untuk memberikan perawatan pasien sesuai dengan rencana perawatan yang ditentukan.',
      'Memberikan edukasi kepada pasien mengenai perawatan yang diterima dan cara pengobatan di rumah.',
      'Mengatur jadwal pemeriksaan dan perawatan lanjutan bagi pasien.'
    ]
  },{ 
    id: 3, 
    name: 'Kasir', 
    description: [
      'Mengelola proses penagihan dan pembayaran untuk layanan medis yang diterima pasien.',
      'Mengakses dan memperbarui informasi keuangan pasien, termasuk status pembayaran dan rincian tagihan.',
      'Mengeluarkan kwitansi dan laporan keuangan kepada pasien.',
      'Menyediakan informasi terkait dengan asuransi dan memastikan klaim asuransi diproses dengan benar.',
      'Melakukan rekonsiliasi harian atas transaksi keuangan dan melaporkan kepada manajemen.'
    ]
  },{ 
    id: 4, 
    name: 'Dokter', 
    description: [
      'Mengakses dan mengelola rekam medis pasien, termasuk diagnosa, rencana perawatan, dan resep obat.',
      'Memberikan konsultasi dan perawatan medis kepada pasien berdasarkan informasi rekam medis.',
      'Memeriksa hasil tes laboratorium dan imaging untuk mendukung diagnosa dan perawatan.',
      'Berkolaborasi dengan perawat dan staf medis lainnya untuk memastikan perawatan pasien yang optimal.',
      'Memastikan bahwa semua catatan medis pasien lengkap dan akurat sebelum pasien keluar dari perawatan.'
    ]
  },{ 
    id: 5, 
    name: 'Frontline', 
    description: [
      'Menyambut dan mendaftarkan pasien yang datang ke fasilitas medis.',
      'Mengelola jadwal janji temu dan memastikan informasi pasien diperbarui dalam sistem EMRS.',
      'Memberikan informasi umum dan mengarahkan pasien ke departemen atau dokter yang sesuai.',
      'Memastikan bahwa semua dokumen yang diperlukan, seperti kartu asuransi atau identifikasi, tersedia dan dipindai ke dalam sistem.',
      'Menangani keluhan atau pertanyaan pasien dan mengarahkan ke departemen yang sesuai untuk penyelesaian lebih lanjut.'
    ]
  }
])
</script>

<style></style>
