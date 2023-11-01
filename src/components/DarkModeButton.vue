<script setup>
import {useDark} from "@vueuse/core";
const isDarkMode = useDark()
import LightModeIcon from "@/assets/icons/LightModeIcon.vue";
import DarkModeIcon from "@/assets/icons/DarkModeIcon.vue";
</script>

<template>
  <button type="button" @click="isDarkMode= !isDarkMode"
          class="inline-flex items-center justify-center w-10 h-10 mx-4 rounded-full text-slate-600 dark:text-slate-400 bg-slate-200 dark:hover:bg-slate-600 dark:bg-slate-600 hover:bg-slate-300 focus:outline-none"
  >
    <DarkModeIcon v-if="!isDarkMode" class="text-indigo-800"/>
    <LightModeIcon v-else class="text-yellow-300"/>
  </button>
</template>

<style scoped>

</style>