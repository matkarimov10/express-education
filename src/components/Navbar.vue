<script setup>
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'
import {ref} from "vue";
import LightModeIcon from "../assets/icons/LightModeIcon.vue";
import DarkModeIcon from "../assets/icons/DarkModeIcon.vue";
import USAFlagIcon from "../assets/icons/USAFlagIcon.vue";
import UZBFlagIcon from "../assets/icons/UZBFlagIcon.vue";
import {useDark} from "@vueuse/core";

onMounted(() => {
  initFlowbite();
})
const isOpenMenu = ref(true)
const isDarkMode = useDark()
const toggleSvgPaths = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <nav class="fixed w-full z-20 top-0 left-0 bg-white border-b-[1px] dark:border-gray-500 border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="my-2 flex items-center justify-center md:justify-start w-full md:w-auto">
        <router-link to="/">
          <img src="../assets/images/express-logo.png" class="h-10 flex items-center" alt="Express Education Logo"/>
        </router-link>
      </div>
      <div class="flex items-center md:order-2">
        <button type="button" data-dropdown-toggle="language-dropdown-menu"
                class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <USAFlagIcon class="w-4 h-4 mx-1"/>
          English (US)
        </button>
        <!-- Dropdown -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
             id="language-dropdown-menu">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="#"
                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                 role="menuitem">
                <div class="inline-flex items-center">
                  <USAFlagIcon class="w-4 h-4 mx-1"/>
                  English (US)
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                 role="menuitem">
                <div class="inline-flex items-center">
                  <UZBFlagIcon class="w-4 h-4 mx-1"/>
                  Uzbek
                </div>
              </a>
            </li>
          </ul>
        </div>
        <button type="button" @click="isDarkMode= !isDarkMode"
                class="inline-flex items-center justify-center mx-2 w-10 h-10 text-gray-600 dark:text-gray-400 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle dark mode">
          <DarkModeIcon v-if="!isDarkMode"/>
          <LightModeIcon v-else/>
        </button>
        <a href="#"
           class="mr-6 ml-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-900 rounded-md hover:bg-blue-800">
          Registration
        </a>

        <button @click="toggleSvgPaths" data-collapse-toggle="navbar-language" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-language" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg v-if="isOpenMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/"
                         class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                         aria-current="page">Home
            </router-link>
          </li>
          <li>
            <router-link to="/courses"
                         class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Courses
            </router-link>
          </li>
          <li>
            <router-link to="/about-us"
                         class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              About Us
            </router-link>
          </li>
          <li>
            <router-link to="/contact"
                         class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>

</template>

<style scoped>

</style>