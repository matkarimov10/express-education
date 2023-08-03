<script setup>
import NextIcon from "../../assets/icons/NextIcon.vue";
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
import TelegramIcon from "../../assets/icons/TelegramIcon.vue";
import YoutubeIcon from "../../assets/icons/YoutubeIcon.vue";
</script>

<template>
  <!--  Hero Section-->
  <section class="bg-white dark:bg-slate-800">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a href="#"
         class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-slate-800 bg-slate-100 rounded-full dark:bg-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
         role="alert">
        <span class="text-xs font-bold rounded-full text-indigo-500 px-4 py-1.5 mr-3">New</span> <span
          class="text-sm font-medium">Flowbite is out! See
        what's new</span>
        <NextIcon class="h-5 w-5"/>
      </a>
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the
        world’s potential</h1>
      <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48 dark:text-slate-300">Here at Flowbite we focus on markets where
        technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <router-link to="/registration"
                     class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-50 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-600 dark:hover:bg-slate-800 dark:focus:ring-slate-800 dark:bg-slate-900">
          Register to course
        </router-link>
      </div>

      <div class="px-4 text-center">
        <span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
        <div class="flex justify-center items-center mt-8">
          <a href="https://www.instagram.com/expresseducation_uz/" class="px-3">
            <InstagramIcon class="h-10 w-10 text-rose-500 hover:text-rose-600"/>
          </a>
          <a href="https://t.me/expresseducation_uz" class="px-3">
            <TelegramIcon class="h-10 w-10 text-blue-500 hover:text-blue-600"/>
          </a>
          <a href="#" class="px-3">
            <YoutubeIcon class="h-12 w-12 text-red-700"/>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!--  Hero Section End-->
</template>

<style scoped>

</style>