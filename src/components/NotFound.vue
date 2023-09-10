<script setup>
import HomeIcon from "../assets/icons/HomeIcon.vue";
import {useRouter} from "vue-router";
import {useDark} from "@vueuse/core";
import LightModeIcon from "../assets/icons/LightModeIcon.vue";
import DarkModeIcon from "../assets/icons/DarkModeIcon.vue";

const router = useRouter();
const toggleSvgPaths = () => {
  router.go(-1); // Navigate back to the previous page
};
const isDarkMode = useDark()
</script>

<template>
  <div class="min-h-screen dark:bg-slate-900">
    <button type="button" @click="isDarkMode= !isDarkMode"
            class="fixed inline-flex items-center justify-center w-10 h-10 mx-2 text-slate-600 bg-slate-200 rounded-full bottom-6 right-6 dark:text-slate-400 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none"
            aria-label="Toggle dark mode">
      <DarkModeIcon v-if="!isDarkMode"/>
      <LightModeIcon v-else/>
    </button>
    <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
      <header class="z-50 flex justify-center w-full py-4 mb-auto">
        <nav class="px-4 pt-8 sm:px-6 lg:px-8" aria-label="Global">
          <a class="flex-none text-xl font-semibold sm:text-3xl dark:text-white" href="#" aria-label="Brand">
            <img src="/images/express-logo.png" class="h-16" alt="Express Logo">
          </a>
        </nav>
      </header>
      <div class="px-4 py-10 text-center sm:px-6 lg:px-8">
        <h1 class="block font-bold text-slate-800 text-7xl sm:text-9xl dark:text-white">404</h1>
        <h1 class="block text-2xl font-bold text-white"></h1>
        <p class="mt-3 text-slate-600 dark:text-slate-400">Oops, something went wrong.</p>
        <p class="text-slate-600 dark:text-slate-400">Sorry, we couldn't find your page.</p>
        <div class="flex flex-col items-center justify-center gap-2 mt-5 sm:flex-row sm:gap-3">
          <router-link to="/" @click.native="toggleSvgPaths"
                       class="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md sm:w-auto gap-x-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800">
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Go Back
          </router-link>
          <router-link to="/"
                       class="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-blue-500 transition-all border border-transparent rounded-md sm:w-auto hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-slate-900" href="../examples.html">
            <HomeIcon class="w-10 h-10"/>
            Back to Home page
          </router-link>
        </div>
      </div>

      <footer class="py-5 mt-auto text-center">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p class="text-sm text-slate-500">© All Rights Reserved. {{ new Date().getFullYear() }}.</p>
        </div>
      </footer>
    </div>
  </div>


</template>

<style scoped>

</style>