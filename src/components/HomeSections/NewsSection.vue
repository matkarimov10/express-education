<script setup>
import NextIcon from "../../assets/icons/NextIcon.vue";
import {ref} from "vue";

const news_card = ref([
  {
    img_src: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    img_alt: 'image description',
    title: 'Announcing a free plan for small teams',
    description: 'At Wake, our mission has always been focused on bringing openness.'
  },
  {
    img_src: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    img_alt: 'image description',
    title: 'Announcing a free plan for small teams',
    description: 'At Wake, our mission has always been focused on bringing openness.'
  },
  {
    img_src: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    img_alt: 'image description',
    title: 'Announcing a free plan for small teams',
    description: 'At Wake, our mission has always been focused on bringing openness.'
  },
])
</script>
<template>
  <div
      class="py-10 px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white dark:bg-slate-800 dark:bg-gradient-to-t dark:from-violet-500/[.15] dark:via-transparent">
    <div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
      <h2 class="text-2xl font-bold text-indigo-800 md:text-3xl md:leading-tight dark:text-white">News</h2>
      <p class="mt-1 text-lg text-slate-800 dark:text-slate-300">Express Education o'quv markazi faoliyati, talabalar natijalari va o'quv jarayonlari
        haqida yangiliklar.</p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <router-link to="#"
          v-for="(news, index) in news_card"
          :key="index"
          class="group flex flex-col h-full border mx-1 hover:border-transparent hover:shadow-xl transition-all duration-300 rounded-xl p-5 dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-black/[.4]">
        <img class="object-cover w-full rounded-xl"
             :src="news.img_src"
             :alt="news.img_alt">
        <div class="my-6">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-white dark:group-hover:text-white">
            {{ news.title }}
          </h3>
          <p class="mt-5 text-slate-600 dark:text-slate-300">
            {{ news.description }}
          </p>
        </div>
      </router-link>
    </div>
    <div class="mt-10 text-center">
      <router-link to="/news"
                   class="inline-flex hover:shadow-lg dark:text-slate-300 justify-center items-center text-center bg-white border hover:border-slate-300 text-sm text-blue-600 hover:text-blue-700 font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:text-slate-200 dark:hover:shadow-slate-700/[.7] dark:focus:ring-slate-700 dark:focus:ring-offset-slate-800">
        Read more
        <NextIcon class="w-4 h-4 "/>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active{
  text-decoration: none;
}
</style>