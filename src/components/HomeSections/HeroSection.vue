<script setup>
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
import TelegramIcon from "../../assets/icons/TelegramIcon.vue";
import YoutubeIcon from "../../assets/icons/YoutubeIcon.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<template>
  <section
      class="bg-white dark:bg-slate-900 bg-gradient-to-b from-blue-50 via-blue-100 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">{{ $t('heroTitle')}}
      </h1>
      <p class="mb-8 text-lg font-normal text-slate-600 lg:text-xl sm:px-16 xl:px-48 dark:text-slate-300">Express Education o'quv markazida tez va
        sifatli ta'lim oling va muvaffaqiyatga erishing! .
      </p>
      <div class="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <router-link to="/registration"
                     class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-white border border-transparent rounded-full shadow-lg gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 transition duration-300 shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
          Register to course
        </router-link>
      </div>

      <div class="px-4 text-center">
        <span class="font-semibold uppercase text-slate-400">social accaunts</span>
        <div class="flex items-center justify-center mt-8">
          <a href="https://www.instagram.com/expresseducation_uz/" class="px-3">
            <InstagramIcon class="w-10 h-10 text-rose-500 hover:text-rose-600"/>
          </a>
          <a href="https://t.me/expresseducation_uz" class="px-3">
            <TelegramIcon class="w-10 h-10 text-blue-500 hover:text-blue-600"/>
          </a>
          <a href="#" class="px-3">
            <YoutubeIcon class="w-12 h-12 text-red-700 hover:text-red-600"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>