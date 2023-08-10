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

const navlinks = ref([
  {name: 'Home', path:'/'},
  {name: 'Courses', path:'/courses'},
  {name: 'News', path:'/news'},
  {name: 'Our Team', path:'/our-team'},
  {name: 'Contact', path:'/contact'},
])
</script>

<template>
  <nav class="sticky top-0 z-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b dark:border-slate-600 w-full dark:bg-slate-900">
    <div class="max-w-screen-xl mb-1 flex flex-wrap items-center justify-between mx-auto py-1">
      <!--      Logo-->
      <div class="my-2 flex items-center justify-center md:justify-start w-full md:w-auto">
        <router-link to="/">
          <img src="../../public/images/express-logo.png" class="h-10 flex items-center" alt="Express Education Logo"/>
        </router-link>
      </div>
      <div class="flex items-center md:order-2">
        <button type="button" data-dropdown-toggle="language-dropdown-menu"
                class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-slate-900 dark:text-white rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white">
          <USAFlagIcon class="w-4 h-4 mx-1"/>
          English (US)
        </button>
        <!-- Dropdown -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-slate-100 rounded-lg shadow dark:bg-slate-700"
             id="language-dropdown-menu">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="#"
                 class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white"
                 role="menuitem">
                <div class="inline-flex items-center">
                  <USAFlagIcon class="w-4 h-4 mx-1"/>
                  English (US)
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                 class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white"
                 role="menuitem">
                <div class="inline-flex items-center">
                  <UZBFlagIcon class="w-4 h-4 mx-1"/>
                  Uzbek
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--        Dark Mode&Light Mode button-->
        <button type="button" @click="isDarkMode= !isDarkMode"
                class="inline-flex items-center justify-center mx-4 w-10 h-10 text-slate-600 dark:text-slate-400 rounded-full bg-slate-200 dark:hover:bg-slate-600 dark:bg-slate-700 hover:bg-slate-300 focus:outline-none"
                aria-label="Toggle dark mode">
          <DarkModeIcon v-if="!isDarkMode" class="text-indigo-800"/>
          <LightModeIcon v-else class="text-yellow-300"/>
        </button>
        <!--        Login and Register Button-->
        <button class="flex md:flex-row flex-col items-center">
          <router-link to="/registration"
                       class="inline-flex items-center justify-center px-1.5 py-2 text-sm font-medium text-white bg-indigo-700 rounded-md hover:bg-indigo-800">
            Register to course
          </router-link>
        </button>
        <!--Button Burger-->
        <button @click="toggleSvgPaths" data-collapse-toggle="navbar-language" type="button"
                class="inline-flex items-center mx-0.5 p-1.5 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
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
      <!--      Nav Links-->
      <div class="px-0.5 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-slate-600">
          <li v-for="navlink in navlinks">
            <router-link :to="navlink.path"
                         class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700">
              {{ navlink.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>