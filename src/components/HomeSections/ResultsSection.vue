<script setup>
import {Vue3Marquee} from 'vue3-marquee'
import {ref} from "vue";

const results = ref([
  {
    img_src: '/images/cert-1.jpg',
    img_alt: 'result',
    name: "Matyoqubov Umrbek",
    overall: 'B2',
    listening: '46',
    reading: '48',
    writing: '51',
    speaking: '60'
  },
  {
    img_src: '/images/cert-1.jpg',
    img_alt: 'result',
    name: "Matyoqubov Umrbek",
    overall: 'B2',
    listening: '46',
    reading: '48',
    writing: '51',
    speaking: '60'
  },
  {
    img_src: '/images/cert-1.jpg',
    img_alt: 'result',
    name: "Matyoqubov Umrbek",
    overall: 'B2',
    listening: '46',
    reading: '48',
    writing: '51',
    speaking: '60'
  },
  {
    img_src: '/images/cert-1.jpg',
    img_alt: 'result',
    name: "Matyoqubov Umrbek",
    overall: 'B2',
    listening: '46',
    reading: '48',
    writing: '51',
    speaking: '60'
  },
  {
    img_src: '/images/cert-1.jpg',
    img_alt: 'result',
    name: "Matyoqubov Umrbek",
    overall: 'B2',
    listening: '46',
    reading: '48',
    writing: '51',
    speaking: '60'
  },
])
</script>

<template>
  <section class="bg-white dark:bg-slate-800 px-4 pt-16 pb-10 lg:pb-14 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="mx-auto">
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
      <div class="flex flex-wrap justify-center mx-10">
        <Vue3Marquee :space="50" :duration="30" :direction="'normal'">
          <div class="flex items-center ml-6 space-x-4">
            <div
                v-for="(result, index) in results" :key="index"
                class="relative grid h-[40rem] w-[600px] max-w-[30rem] flex-col items-end justify-center rounded-xl text-center">
              <div
                  class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-xl bg-transparent bg-cover bg-center">
                <img class="h-full w-full"
                    :src="result.img_src"
                    :alt="result.img_alt">
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500 via-black/50"></div>
              </div>
              <div class="relative p-6 py-14 px-6 md:px-12">
                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white">
                  {{ result.name }}
                </h2>
                <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-200">
                  Listening: {{ result.listening }}
                </h5>
                <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-200">
                  Reading: {{ result.reading }}
                </h5>
                <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-200">
                  Writing: {{ result.writing }}
                </h5>
                <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-200">
                  Speaking: {{ result.speaking }}
                </h5>
                <h2 class="mb-6 block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white">
                  Overall: {{ result.overall }}
                </h2>
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