<template>
  <div>
    <!-- Banner -->
    <TransitionRoot
      as="template"
      :show="showBanner">
      <VBannerGreetings @close="showBanner=false" />
    </TransitionRoot>
    <!-- Static sidebar for mobile -->
    <TransitionRoot
      as="template"
      :show="sidebarOpen">
      <Dialog
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <VIcons
                      :name="'x-mark'"
                      class="h-6 w-6 text-white"
                      aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="/img/icons/e-smartclinic-white.svg"
                    alt="e-Smart Clinic">
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul
                    role="list"
                    class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul
                        role="list"
                        class="-mx-2 space-y-1">
                        <li
                          v-for="item in LIST_MENU"
                          :key="item.name">
                          <router-link
                            v-if="!item.children?.length"
                            :to="item.href"
                            :class="[$route.path === item.href || $route.path.startsWith(item.href)? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                            <VIcons
                              :name="item.icon"
                              class="h-6 w-6 shrink-0"
                              aria-hidden="true" />
                            {{ item.name }}
                          </router-link>
                          <Disclosure
                            v-else
                            v-slot="{ open }"
                            as="div">
                            <DisclosureButton
                              as="button"
                              :class="[$route.path === item.href || $route.path.startsWith(item.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 ']">
                              <VIcons
                                :name="item.icon"
                                class="h-6 w-6 shrink-0 text-gray-400"
                                aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon
                                aria-hidden="true"
                                :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" />
                            </DisclosureButton>
                            <transition
                              enter-active-class="transition ease-out duration-100"
                              enter-from-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-from-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95">
                              <DisclosurePanel
                                as="ul"
                                class="mt-1 px-2">
                                <li
                                  v-for="subItem in item.children"
                                  :key="subItem.name">
                                  <router-link
                                    as="a"
                                    :to="subItem.href"
                                    :class="[$route.path === subItem.href || $route.path.startsWith(subItem.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-2 text-sm leading-6 ']">
                                    <ChevronRightIcon
                                      class="h-4 w-4 shrink-0 pt-1"
                                      aria-hidden="true" />
                                    {{ subItem.name }}
                                  </router-link>
                                </li>
                              </DisclosurePanel>
                            </transition>
                          </Disclosure>
                        </li>
                      </ul>
                    </li>

                    <li class="mt-auto">
                      <router-link
                        to="/settings"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                        <VIcons
                          :name="'cog-6-tooth'"
                          class="h-6 w-6 shrink-0"
                          aria-hidden="true" />
                        Pengaturan
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-10 w-auto"
            src="/img/icons/e-smartclinic-white.svg"
            alt="e-Smart Clinic">
        </div>
        <nav class="flex flex-1 flex-col">
          <ul
            role="list"
            class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul
                role="list"
                class="-mx-2 space-y-1">
                <div v-if="isLoading">
                  <li
                    v-for="index in 16"
                    :key="index">
                    <VShimmerText />
                  </li>
                </div>
                <div v-else>
                  <li
                    v-for="item in LIST_MENU"
                    :key="item.name">
                    <router-link
                      v-if="!item.children?.length"
                      :to="item.href"
                      :class="[$route.path === item.href || $route.path.startsWith(item.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                      <VIcons
                        :name="item.icon"
                        class="h-6 w-6 shrink-0"
                        aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                    <Disclosure
                      v-else
                      v-slot="{ open }"
                      as="div">
                      <DisclosureButton
                        :class="[$route.path === item.href || $route.path.startsWith(item.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6']">
                        <VIcons
                          :name="item.icon"
                          class="h-6 w-6 shrink-0 text-gray-400"
                          aria-hidden="true" />
                        {{ item.name }}
                        <ChevronRightIcon
                          aria-hidden="true"
                          :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" />
                      </DisclosureButton>
                      <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                        <DisclosurePanel
                          as="ul"
                          class="mt-1 px-2">
                          <li
                            v-for="subItem in item.children"
                            :key="subItem.name">
                            <router-link
                              :to="subItem.href"
                              :class="[$route.path === subItem.href || $route.path.startsWith(subItem.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-2 text-sm leading-6 cursor-pointer']">
                              <ChevronRightIcon
                                class="h-5 w-5 shrink-0 pt-1"
                                aria-hidden="true" />
                              {{ subItem.name }}
                            </router-link>
                          </li>
                        </DisclosurePanel>
                      </transition>
                    </Disclosure>
                  </li>
                </div>
              </ul>
            </li>

            <li class="mt-auto">
              <router-link
                to="/settings"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                <VIcons
                  :name="'cog-6-tooth'"
                  class="h-6 w-6 shrink-0"
                  aria-hidden="true" />
                Pengaturan
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Static top for desktop or mobile -->
    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <VIcons
            :name="'bars-3'"
            class="h-6 w-6"
            aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div
          class="h-6 w-px bg-gray-900/10 lg:hidden"
          aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form
            class="relative flex flex-1"
            action="#"
            method="GET">
            <label
              for="search-field"
              class="sr-only">Search</label>

            <button
              type="button"
              class="px-5 py-2.5 me-2 mb-2">
              <MagnifyingGlassIcon
                class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true" />
            </button>
          </form>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <VIcons
                :name="'bell'"
                class="h-6 w-6"
                aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu
              as="div"
              class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user Menu</span>
                <VShimmerImageProfile v-if="isLoading" />
                <VImage
                  v-if="showUsers.auth.USER.avatar"
                  :uri="showUsers.auth.USER.avatar"
                  class="h-8 w-8 rounded-full bg-gray-50" />
                <VShimmerText
                  v-if="isLoading"
                  class="ml-4 w-40" />
                <span
                  v-else
                  class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-600"
                    aria-hidden="true">
                    {{ showUsers.auth.USER.name }}
                  </span>
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true" />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem>
                    <router-link
                      to="/profile"
                      class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100">
                      Your profile
                    </router-link>
                  </MenuItem>
                  <MenuItem>
                    <router-link
                      to="/auth/sign-out"
                      class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100">
                      Sign out
                    </router-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  useHead,
  useSeoMeta,
  useServerSeoMeta
} from '@unhead/vue'
import { useRouter } from 'vue-router'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon
} from '@heroicons/vue/20/solid'
import { LIST_MENU } from '@/menu'
import { useAuthStore } from '@/stores/auth'
import { HTTP_URI, HTTP_HEADER } from '@/http.conf'
import type { AuthProps, UserProps } from '@/interfaces/auth'
import VBannerGreetings from '@/components/VBannerGreetings.vue'
import VIcons from '@/components/VIcons.vue'
import VShimmerImageProfile from '@/components/VShimmerImageProfile.vue'
import VShimmerText from '@/components/VShimmerText.vue'
import VImage from '@/components/VImage.vue'

const showUsers = useAuthStore()

const isLoading = ref<boolean>(true)
const sidebarOpen = ref<boolean>(false)
const showBanner = ref<boolean>(true)
const router = useRouter()

onMounted(async() => {
  const user = showUsers.auth
  if (!Object.keys(user.USER).length) {
    const url = HTTP_URI + '/legacy/personal/detail'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...HTTP_HEADER,
        Authorization: `Bearer ${user.TOKEN}`
      }
    })

    if (!response.ok) {
      await router.push('/auth/sign-out')
      throw new Error(`Response status: ${response}`)
    }

    const ress: AuthProps<UserProps> = await response.json()
    await showUsers.setuser(ress.result!)
  }

  isLoading.value = false
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/icons/e-smartclinic.png'
    }, {
      rel: 'apple-touch-icon',
      href: 'https://e-smartclinic.id/img/icons/icon.png'
    }
  ],
  bodyAttrs: {
    class: 'h-full'
  },
  htmlAttrs: {
    lang: 'id_ID',
    class: 'h-full bg-white'
  }
})

useSeoMeta({
  description: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  charset: 'utf-8',
  googlebotNews: 'noindex',
  viewport: 'width=device-width, initial-scale=1.0',
  author: 'PT Harmoni Untuk Bersama',
  ogUrl: 'https://e-smartclinic.id/welcome-aboard',
  ogType: 'website',
  ogSiteName: 'https://e-smartclinic.id',
  ogTitle: 'e-Smart Clinic Backend',
  ogDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  ogImage: 'https://e-smartclinic.id/img/icons/meta-properti.webp',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: 'e-Smart Clinic Backend',
  twitterDescription: 'The Backend Dashboard with Medical Record support to all our beloved clinet of e-Smart Clinic for all Branchs & Market around the Indonesia.',
  twitterImage: 'https://e-smartclinic.id/img/icons/meta-properti.webp'
})

useServerSeoMeta({
  robots: 'noindex, nofollow'
})
</script>
