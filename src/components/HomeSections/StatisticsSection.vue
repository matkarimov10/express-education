<script setup>
import CoursesIcon from "../../assets/icons/CoursesIcon.vue";
import TeachersIcon from "../../assets/icons/TeachersIcon.vue";
import StudentsIcon from "../../assets/icons/StudentsIcon.vue";
import GraduatesIcon from "../../assets/icons/GraduatesIcon.vue";
import {markRaw, ref} from "vue";

const statistics = ref([
  {icon: markRaw(CoursesIcon), title: 'Courses', count: 6},
  {icon: markRaw(TeachersIcon), title: 'Teachers', count: 10},
  {icon: markRaw(StudentsIcon), title: 'Students', count: '400+'},
  {icon: markRaw(GraduatesIcon), title: 'Graduates', count: '1000+'},
])
</script>
<template>
  <section class="p-6 dark:bg-slate-800 dark:text-slate-300 dark:bg-gradient-to-t dark:from-violet-500/[.15] dark:via-transparent">
    <div class="max-w-3xl mx-auto mb-10 text-center lg:mb-20">
      <h2 class="mb-4 text-2xl font-bold text-indigo-800 text-dark sm:text-4xl md:text-3xl dark:text-white">
        Express Education o'quv markazi haqida
      </h2>
      <p class="max-w-4xl px-5 mx-auto text-lg text-slate-800 dark:text-slate-300">
        “Express Education” o‘quv markazi 2021-yilda tashkil topgan. O'quv markazimiz Urganch shahrida joylashgan
        Sifatli ta'lim, natijaviylik, mas'uliyatlilik. Avval tarbiya, keyin ta'lim.
      </p>
    </div>
    <div class="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
      <div
          v-for="(stats, index) in statistics"
          :key="index"
          class="flex p-4 space-x-4 border rounded-lg shadow md:space-x-6 dar:bg-slate-900 dark:text-slate-100 dark:border-slate-500">
        <div class="flex items-center justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-slate-100">
          <component :is="stats.icon" class="w-10 text-indigo-800 h-9"/>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <p class="text-3xl font-semibold text-indigo-800 dark:text-white">{{ stats.count }}</p>
          <p class="text-lg text-indigo-900 capitalize dark:text-slate-300">{{ stats.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>