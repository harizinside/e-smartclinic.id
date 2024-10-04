<template>
  <div>
    <div class="pb-4">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        Title
      </h2>
      <p class="text-sm leading-6 text-gray-500">
        Data ini <b>SATUSEHAT</b> except for Personal Info
      </p>
    </div>
    <Disclosure>
      <div class="flex flex-row gap-2">
        <DisclosureButton
          as="button"
          type="button"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-filter size-5"
            viewBox="0 0 16 16">
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </DisclosureButton>
        <input
          id="table-search-users"
          type="text"
          class="block text-sm text-gray-900 border border-gray-300 rounded-lg w-full py-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          placeholder="Cari">
        <button
          type="button"
          class="inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto">
          Cari
        </button>
      </div>
      <DisclosurePanel class="text-gray-500 pt-4 border-b">
        <fieldset>
          <legend class="text-sm font-semibold leading-6 text-gray-900">
            Cari berdasarkan
          </legend>
          <div class="mt-2 space-y-0.5">
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="comments"
                  class="font-normal text-gray-900">Nama</label>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="candidates"
                  class="font-normal text-gray-900">Identitas</label>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="offers"
                  class="font-normal text-gray-900">Asuransi</label>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="offers"
                  class="font-normal text-gray-900">Kode daftar</label>
              </div>
            </div>
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="offers"
                  class="font-normal text-gray-900">Nomor HP</label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="mb-3 pt-2">
            <label
              for="base-input"
              class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Kategori</label>
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 w-full sm:text-sm sm:leading-6">
              <option>Rawat Jalan</option>
              <option>Rawat Inap</option>
            </select>
          </div>
        </fieldset>
        <fieldset class="pb-2">
          <legend class="text-sm font-semibold leading-6 text-gray-900">
            Status
          </legend>
          <div class="mt-2 space-y-0.5">
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="offers"
                  class="font-normal text-gray-900">Aktif</label>
              </div>
            </div>
          </div>
          <div class="mt-2 space-y-0.5">
            <div class="relative flex gap-x-3">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600">
              </div>
              <div class="text-sm leading-6">
                <label
                  for="offers"
                  class="font-normal text-gray-900">Tidak aktif</label>
              </div>
            </div>
          </div>
        </fieldset>
      </DisclosurePanel>
    </Disclosure>
    <div>
      <ul
        role="list"
        class="divide-y divide-gray-100">
        <li
          v-for="person in people"
          :key="person.email"
          class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img
              class="h-12 w-12 flex-none rounded-full bg-gray-50"
              :src="person.imageUrl"
              alt="">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a
                  :href="person.href"
                  class="hover:underline">{{ person.name }}</a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a
                  :href="`mailto:${person.email}`"
                  class="truncate hover:underline">{{ person.email }}</a>
              </p>
            </div>
          </div>
          <div class="flex shrink-0 items-center gap-x-6">
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">
                {{ person.role }}
              </p>
              <p
                v-if="person.lastSeen"
                class="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
              </p>
              <div
                v-else
                class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p class="text-xs leading-5 text-gray-500">
                  Online
                </p>
              </div>
            </div>
            <Menu
              as="div"
              class="relative flex-none">
              <MenuButton class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon
                  class="h-5 w-5"
                  aria-hidden="true" />
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    >View profile<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']"
                    >Message<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </li>
      </ul>
    </div>
    <div class="pt-2">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-orange-600 border border-gray-300 bg-orange-50 hover:bg-orange-100 hover:text-orange-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuItems
} from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null
  }
]
</script>
