<script setup>
import {ref} from "vue";

const courses = ref([
  {name: "Ingliz tili - grammatika", cost: 300000,},
  {name: "Ingliz tili - Pre-ielts", cost: 350000,},
  {name: "Ingliz tili - ielts", cost: 400000,},
  {name: "Ingliz tili - multi-level", cost: 400000,},
  {name: "Ingliz tili - kid's ", cost: 400000,}
])
</script>

<template>
  <section class="bg-white dark:bg-slate-800 px-4 pt-10 pb-10 lg:pb-14 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="max-w-3xl mx-auto mb-10 text-center lg:mb-20">
            <h2 class="my-4 text-2xl font-bold text-indigo-800 sm:text-4xl md:text-3xl dark:text-white">
              O'quv kurslari bilan tanishing
            </h2>
            <p class="text-lg text-body-color dark:text-slate-300">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mx-4">
        <div v-for="course in courses" class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div
              class="relative z-10 px-8 mb-10 overflow-hidden bg-white border border-indigo-800 shadow-pricing rounded-xl dark:border-slate-600 sm:p-12 lg:py-10 lg:px-6 xl:p-12 dark:bg-slate-900">
          <span class="block mt-6 mb-4 text-lg font-bold text-green-700 uppercase dark:text-white">
            {{ course.name }}
          </span>
            <h2 class="mb-5 text-3xl font-bold text-indigo-800 text-dark dark:text-white">
              {{ course.cost }} <span>so'm</span>
              <span class="text-base font-medium text-body-color"> / oy </span>
            </h2>
            <p class="pb-8 mb-8 text-base border-b dark:text-slate-300 border-slate-300">
              Perfect for using in a personal website or a client project.
            </p>
            <div class="mb-7">
              <p class="mb-1 text-base leading-loose dark:text-slate-300">1 User</p>
              <p class="mb-1 text-base leading-loose dark:text-slate-300">
                All UI components
              </p>
              <p class="mb-1 text-base leading-loose dark:text-slate-300">
                Lifetime access
              </p>
              <p class="mb-1 text-base leading-loose dark:text-slate-300">
                Free updates
              </p>
              <p class="mb-1 text-base leading-loose dark:text-slate-300">
                Use on 1 (one) project
              </p>
              <p class="mb-1 text-base leading-loose dark:text-slate-300">
                3 Months support
              </p>
            </div>
            <router-link to="/registration"
                         class="block w-full p-4 mb-4 text-base font-semibold text-center text-indigo-800 transition duration-300 bg-transparent border border-indigo-800 rounded-md dark:border-none dark:text-white hover:bg-indigo-800 hover:text-white dark:hover:bg-white dark:hover:rounded-md dark:hover:text-indigo-800 dark:bg-indigo-800">
              Register to course
            </router-link>
            <div>
            <span class="absolute right-0 top-7 z-[-1]">
              <svg
                  width="77"
                  height="172"
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient
                      id="paint0_linear"
                      x1="86"
                      y1="0"
                      x2="86"
                      y2="172"
                      gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4F46E5" stop-opacity="0.3" offset="1"/>
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>