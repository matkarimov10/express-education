<script setup>
import {markRaw, ref} from "vue";
import TeacherLessonIcon from "../../assets/icons/TeacherLessonIcon.vue";
import TestingIcon from "../../assets/icons/TestingIcon.vue";
import AttendCompetitionIcon from "../../assets/icons/AttendCompetitionIcon.vue";
import BooksIcon from "../../assets/icons/BooksIcon.vue";
import TrainingCourseIcon from "../../assets/icons/TrainingCourseIcon.vue";
import GrandsIcon from "../../assets/icons/GrandsIcon.vue";

const advantages = ref([
  { icon: markRaw(TeacherLessonIcon), title: 'Professional ustozlar' },
  { icon: markRaw(TestingIcon), title: 'Oy yakunida maxsus test sinovlar' },
  { icon: markRaw(AttendCompetitionIcon), title: 'Olimpiada va turli tanlovlarda ishtirok etish' },
  { icon: markRaw(TrainingCourseIcon), title: 'Master-klass, trening va o‘quv seminarlari' },
  { icon: markRaw(BooksIcon), title: 'Maxsus kitoblar, testlar, qo‘llanmalar' },
  { icon: markRaw(GrandsIcon), title: 'Grantlar (bepul o‘qish imkoniyati)' }
])
</script>
<template>
  <section class="pt-20 pb-12 lg:pt-12 lg:pb-14 bg-white dark:bg-slate-800 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="max-w-3xl mx-auto mb-10 text-center lg:mb-20">
          <span class="text-white mb-2 py max-w-[140px] mx-auto bg-green-600 rounded-full block text-base font-medium">
            Afzalliklarimiz
          </span>
            <h2 class="mt-4 text-2xl font-bold text-indigo-800 dark:text-white sm:text-4xl md:text-3xl">
              Nima uchun Express Education?
            </h2>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-2">
        <div v-for="(advantage, index) in advantages" :key="index" class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div class="h-56 p-10 mb-8 transition duration-300 bg-white border shadow-md rounded-2xl dark:border-slate-600 dark:bg-slate-900 hover:shadow-xl md:px-7 xl:px-10">
            <div class="flex items-center justify-center pt-4 pb-8">
              <component :is="advantage.icon" class="w-12 h-12 text-indigo-700 dark:text-slate-100"/>
            </div>
            <h4 class="mb-3 text-xl font-semibold text-center dark:text-white">
              {{ advantage.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>