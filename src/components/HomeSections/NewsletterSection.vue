<script setup>
import NextIcon from "../../assets/icons/NextIcon.vue";
</script>

<template>
  <div class="w-full mx-auto relative pt-10 px-10 pb-12 dark:bg-slate-800">
    <div class="justify-between md:p-10 p-6 md:flex bg-gradient-to-r from-blue-500 to-blue-500 via-indigo-700 lg:p-16 rounded-3xl">
      <div class="flex flex-col">
        <p class="md:text-2xl text-center text-lg text-white">
          Malakali ustozlardan ta'lim oling
        </p>
        <h3 class="flex items-center justify-center md:text-4xl text-xl font-semibold text-white ">Kurslarga yoziling <NextIcon class="w-10 h-10 mt-1"/></h3>
      </div>

      <div class="flex items-center justify-center mt-4 md:mt-0">
        <router-link to="/registration"
                     class="inline-flex items-center transition duration-300 justify-center px-5 py-2 text-lg font-medium text-center text-white border border-transparent rounded-full shadow-lg gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800">
          Register to course
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>