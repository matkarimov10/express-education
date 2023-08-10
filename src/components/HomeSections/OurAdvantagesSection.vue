<script setup>
import TeacherLessonIcon from "../../assets/icons/TeacherLessonIcon.vue";
import TestingIcon from "../../assets/icons/TestingIcon.vue";
import AttendCompetitionIcon from "../../assets/icons/AttendCompetitionIcon.vue";
import BooksIcon from "../../assets/icons/BooksIcon.vue";
import TrainingCourseIcon from "../../assets/icons/TrainingCourseIcon.vue";
import GrandsIcon from "../../assets/icons/GrandsIcon.vue";
</script>

<template>
  <section class="pt-20 pb-12 lg:pt-12 lg:pb-14 bg-white dark:bg-slate-800 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-20">
          <span class="text-white mb-2 py max-w-[140px] mx-auto bg-green-600 rounded-full block text-base font-medium">
            Afzalliklarimiz
          </span>
            <h2 class="text-indigo-800 dark:text-white mt-4 text-2xl font-bold sm:text-4xl md:text-3xl">
              Nima uchun Express Education?
            </h2>
          </div>
        </div>
      </div>
      <div class="mx-2 flex flex-wrap">
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
             <div class="pb-8 pt-4 flex justify-center items-center">
               <TeacherLessonIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
             </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Professional ustozlar
            </h4>
          </div>
        </div>

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
            <div class="pb-8 pt-4 flex justify-center items-center">
              <TestingIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
            </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Oy yakunida maxsus sinovlar
            </h4>
          </div>
        </div>

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
            <div class="pb-8 pt-4 flex justify-center items-center">
              <AttendCompetitionIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
            </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Olimpiada va turli tanlovlarda ishtirok etish
            </h4>
          </div>
        </div>

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
            <div class="pb-8 pt-4 flex justify-center items-center">
              <TrainingCourseIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
            </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Master-klass, trening va o‘quv seminarlari
            </h4>
          </div>
        </div>

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
            <div class="pb-8 pt-4 flex justify-center items-center">
              <BooksIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
            </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Maxsus kitoblar, testlar, qo‘llanmalar
            </h4>
          </div>
        </div>

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="mb-8 h-56 rounded-2xl dark:border-slate-600 bg-white p-10 border dark:bg-slate-900 shadow-md hover:shadow-xl md:px-7 xl:px-10">
            <div class="pb-8 pt-4 flex justify-center items-center">
              <GrandsIcon class="h-12 w-12 dark:text-slate-100 text-indigo-700"/>
            </div>
            <h4 class="mb-3 text-xl text-center dark:text-white font-semibold">
              Grantlar (bepul o‘qish imkoniyati)
            </h4>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>