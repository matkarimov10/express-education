<script setup>
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
import TelegramIcon from "../../assets/icons/TelegramIcon.vue";
import YoutubeIcon from "../../assets/icons/YoutubeIcon.vue";
</script>

<template>
  <section
      class="bg-white dark:bg-slate-900 bg-gradient-to-b from-blue-50 via-blue-100 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Express
        Education - fast quality and successful
      </h1>
      <p class="mb-8 text-lg font-normal text-slate-600 lg:text-xl sm:px-16 xl:px-48 dark:text-slate-300">Express Education o'quv markazida tez va
        sifatli ta'lim oling va muvaffaqiyatga erishing! .
      </p>
      <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <router-link to="/registration"
                     class="inline-flex justify-center text-lg items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
          Register to course
        </router-link>
      </div>

      <div class="px-4 text-center">
        <span class="font-semibold text-slate-400 uppercase">social accaunts</span>
        <div class="flex justify-center items-center mt-8">
          <a href="https://www.instagram.com/expresseducation_uz/" class="px-3">
            <InstagramIcon class="h-10 w-10 text-rose-500 hover:text-rose-600"/>
          </a>
          <a href="https://t.me/expresseducation_uz" class="px-3">
            <TelegramIcon class="h-10 w-10 text-blue-500 hover:text-blue-600"/>
          </a>
          <a href="#" class="px-3">
            <YoutubeIcon class="h-12 w-12 text-red-700 hover:text-red-600"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>