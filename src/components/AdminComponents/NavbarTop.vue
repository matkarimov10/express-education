<script setup>
import LightModeIcon from "@/assets/icons/LightModeIcon.vue";
import DarkModeIcon from "@/assets/icons/DarkModeIcon.vue";
import {useDark} from "@vueuse/core";
const isDarkMode = useDark()
</script>

<template>
  <nav class="border-b dark:border-b-slate-500 dark:bg-slate-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="/images/express-logo.png" class="h-8 mr-3" alt="Express Logo" />
      </a>
      <div class="flex md:order-2">
        <button type="button" @click="isDarkMode= !isDarkMode"
                class="inline-flex items-center justify-center w-10 h-10 mx-4 rounded-full text-slate-600 dark:text-slate-400 bg-slate-200 dark:hover:bg-slate-600 dark:bg-slate-600 hover:bg-slate-300 focus:outline-none"
        >
          <DarkModeIcon v-if="!isDarkMode" class="text-indigo-800"/>
          <LightModeIcon v-else class="text-yellow-300"/>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>