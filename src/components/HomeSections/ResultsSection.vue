<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import {ref} from "vue";

const slides = ref([
  { text: "When I compare Vercel and Next.js to other tools we've used, we have optimizations, support, and speed we didn't have before", author: 'CEO', logo: 'https://assets.vercel.com/image/upload/front/home/new/logos/scale_.svg' },
  { text: 'With Next.js on Vercel as the helm of our headless tech stack, our developers can create features with velocity and  whenever they want to.', author: 'Senior Software Engineer', logo: 'https://assets.vercel.com/image/upload/front/home/new/logos/loom.svg' },
  { text: "Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.", author: 'Director of Engineering', logo: 'https://assets.vercel.com/image/upload/front/home/new/logos/nzxt.svg' },
])

</script>

<template>
  <section class="bg-white dark:bg-slate-800 px-4 pt-16 pb-10 lg:pb-14 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div class="max-w-3xl mx-auto mb-10 text-center lg:mb-20">
           <span class="text-white mb-2 py max-w-[90px] mx-auto bg-green-600 rounded-full block text-base font-medium">
           Natijalar
          </span>
            <h2 class="my-4 text-2xl font-bold text-indigo-800 sm:text-4xl md:text-3xl dark:text-white">
              Bizning o'quvchilarimiz natijalari
            </h2>
            <p class="text-base text-body-color dark:text-slate-300">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mx-4">
        <Vue3Marquee :space="50" :duration="50" :direction="'normal'">
          <div class="flex items-center ml-8 space-x-8">
            <div v-for="item in slides"
                 class="relative flex flex-col px-4 my-2 overflow-hidden duration-200 border rounded-2xl group md:h-72 md:px-10 hover:cursor-pointer hover:border-black dark:border-slate-600 border-slate-300 dark:hover:border-gray-100">
              <div class="max-w-lg px-6 mt-8 text-lg font-medium text-center md:px-12 dark:text-white md:max-w-3xl md:text-2xl md:mt-10">{{ item.text }}</div>
              <div class="pt-5">
                <p class="font-sans font-semibold text-center dark:text-white">{{ item.author }}</p>
              </div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>