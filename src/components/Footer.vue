<script setup>
import TelegramIcon from "../assets/icons/TelegramIcon.vue";
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import YoutubeIcon from "../assets/icons/YoutubeIcon.vue";
</script>

<template>
  <footer class="bg-white border-t-[1px] dark:border-slate-600 pt-10 lg:pt-10 md:p-6 lg:p-4 dark:bg-slate-900">
    <div class="mx-auto max-w-screen-xl text-center">
      <div class="my-1 flex items-center justify-center  w-full md:w-auto">
          <img src="../../public/images/express-logo.png" class="h-14 flex items-center" alt="Express Education Logo"/>
      </div>
      <p class="my-6 text-slate-700 text-lg mx-auto px-6 max-w-4xl dark:text-slate-300">Discover a World of Learning and Innovation at Express Education</p>
      <ul class="flex flex-wrap justify-center items-center text-slate-900 dark:text-white">
        <li>
          <router-link to="/" class="mr-4 hover:underline text-lg md:mr-6 ">Home</router-link>
        </li>
        <li>
          <router-link to="/courses" class="mr-4 hover:underline text-lg md:mr-6">Courses</router-link>
        </li>
        <li>
          <router-link to="/news" class="mr-4 hover:underline text-lg md:mr-6">News</router-link>
        </li>
        <li>
          <router-link to="/about-us" class="mr-4 hover:underline text-lg md:mr-6 ">About Us</router-link>
        </li>
        <li>
          <router-link to="/contact" class="mr-4 hover:underline text-lg md:mr-6">Contact</router-link>
        </li>
      </ul>

      <!--      Social accaunts-->

      <ul class="flex flex-wrap justify-center items-center text-slate-900 dark:text-white">
        <li class="mx-2">
          <a href="https://t.me/expresseducation_uz" class="px-3">
            <TelegramIcon class="h-8 w-8 text-blue-500 hover:text-blue-600"/>
          </a>
        </li>
        <li class="mx-2">
          <a href="https://www.instagram.com/expresseducation_uz/" class="px-3">
            <InstagramIcon class="h-8 w-8 text-rose-500 hover:text-rose-600"/>
          </a>
        </li>
        <li class="mx-2">
          <a href="#" class="px-3">
            <YoutubeIcon class="h-12 w-12 text-red-700 hover:text-red-600"/>
          </a>
        </li>
      </ul>
      <span class="text-sm text-slate-500 sm:text-center dark:text-slate-400">© 2021-{{ new Date().getFullYear() }} <router-link to="/"
                                                                                                                               class="hover:underline">Express Education.</router-link></span><br>
      <span class="text-sm text-slate-500 sm:text-center dark:text-slate-400">All Rights Reserved.</span>
    </div>
  </footer>
</template>

<style scoped>

</style>