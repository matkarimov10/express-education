<script setup>
import CoursesIcon from "../../assets/icons/CoursesIcon.vue";
import TeachersIcon from "../../assets/icons/TeachersIcon.vue";
import StudentsIcon from "../../assets/icons/StudentsIcon.vue";
import GraduatesIcon from "../../assets/icons/GraduatesIcon.vue";



</script>
<template>
  <section class="p-6 dark:bg-slate-800 dark:text-slate-300 dark:bg-gradient-to-t dark:from-violet-500/[.15] dark:via-transparent">
    <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-20">
      <h2 class="text-dark mb-4 text-indigo-800 text-2xl font-bold sm:text-4xl md:text-3xl dark:text-white">
        Express Education o'quv markazi haqida
      </h2>
      <p class="text-slate-800 px-5 text-lg max-w-4xl mx-auto dark:text-slate-300">
        “Express Education” o‘quv markazi 2021-yilda tashkil topgan. O'quv markazimiz Urganch shahrida joylashgan
        Sifatli ta'lim, natijaviylik, mas'uliyatlilik. Avval tarbiya, keyin ta'lim.
      </p>
    </div>
    <div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
      <div class="flex p-4 space-x-4 border rounded-lg md:space-x-6 dar:bg-slate-900 dark:text-slate-100">
        <div class="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 dark:bg-slate-100">
          <CoursesIcon class="w-10 h-9 text-indigo-800"/>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold text-indigo-800 dark:text-white">6</p>
          <p class="capitalize text-lg text-indigo-900 dark:text-slate-300">Courses</p>
        </div>
      </div>
      <div class="flex p-4 space-x-4 border rounded-lg md:space-x-6 dar:bg-slate-900 dark:text-slate-100">
        <div class="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 dark:bg-slate-100">
          <TeachersIcon class="w-10 h-9 text-indigo-800"/>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold text-indigo-800 dark:text-white">5</p>
          <p class="capitalize text-lg text-indigo-900 dark:text-slate-300">Teachers</p>
        </div>
      </div>
      <div class="flex p-4 space-x-4 border rounded-lg md:space-x-6 dar:bg-slate-900 dark:text-slate-100">
        <div class="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 dark:bg-slate-100">
            <StudentsIcon class="w-10 h-9 text-indigo-800"/>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold text-indigo-800 dark:text-white">172</p>
          <p class="capitalize text-lg text-indigo-900 dark:text-slate-300">Students</p>
        </div>
      </div>
      <div class="flex p-4 space-x-4 border rounded-lg md:space-x-6 dar:bg-slate-900 dark:text-slate-100">
        <div class="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 dark:bg-slate-100">
    <GraduatesIcon class="w-10 h-9 text-indigo-800"/>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold text-indigo-800 dark:text-white">300</p>
          <p class="capitalize text-lg text-indigo-900 dark:text-slate-300">Graduates</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>