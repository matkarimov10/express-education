<script setup>
import NextIcon from "../../assets/icons/NextIcon.vue";
</script>

<template>
  <div class="w-full mx-auto relative pt-10 px-10  pb-12 dark:bg-slate-800 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="md:flex justify-between bg-gradient-to-r from-blue-500 to-blue-500 via-indigo-700 p-10 lg:p-16 rounded-3xl">
      <div class="flex flex-col">
        <p class="text-2xl text-white">
          Malakali ustozlardan ta'lim oling
        </p>
        <h3 class="text-white text-4xl font-semibold flex items-center ">Kurslarga yoziling <NextIcon class="h-10 w-10 mt-1"/></h3>
      </div>

      <div class="flex justify-center items-center md:mt-0 mt-4">
        <router-link to="/registration"
                     class="inline-flex justify-center text-lg items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
          Register to course
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>