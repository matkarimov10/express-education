<script setup>

</script>

<template>
  <footer class="bg-white border-t-[1px] dark:border-gray-500  md:p-8 lg:p-10 dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl text-center">
      <div class="my-1 flex items-center justify-center  w-full md:w-auto">
        <a href="#" class="">
          <img src="../assets/images/express-logo.png" class="h-16 flex items-center" alt="Express Education Logo"/>
        </a>
      </div>
      <p class="my-6 text-gray-500 mx-auto px-6 max-w-4xl dark:text-gray-400">Open-source library of over 400+ web components and interactive elements
        built for
        better
        web.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <router-link to="/"  class="mr-4 hover:underline md:mr-6 ">Home</router-link>
        </li>
        <li>
          <router-link to="/courses" class="mr-4 hover:underline md:mr-6">Courses</router-link>
        </li>
        <li>
          <router-link to="/about-us" class="mr-4 hover:underline md:mr-6 ">About Us</router-link>
        </li>
        <li>
          <router-link to="/contact" class="mr-4 hover:underline md:mr-6">Contact</router-link>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-{{ new Date().getFullYear() }} <a href="#"
                                                                                                                     class="hover:underline">Express Education
        ™.</a></span><br>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.</span>
    </div>
  </footer>
</template>

<style scoped>

</style>