<script setup>
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
      class="py-10 mx-auto bg-white sm:px-6 lg:px-8 lg:py-14 dark:bg-slate-800 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
      <h2 class="text-2xl font-bold text-indigo-800 md:text-4xl md:leading-tight dark:text-white">News</h2>
      <p class="mt-1 text-lg text-slate-600 dark:text-slate-300">Express Education o'quv markazi faoliyati, talabalar natijalari va o'quv jarayonlari
        haqida yangiliklar.</p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <router-link to="#"
                   v-for="(news, index) in news_card"
                   :key="index"
                   class="group flex flex-col h-full border mx-1 hover:border-transparent hover:shadow-xl transition-all duration-300 rounded-xl p-5 dark:border-slate-600 dark:bg-slate-900 dark:hover:shadow-black/[.4]">
        <img class="object-cover w-full rounded-xl"
             :src="news.img_src"
             :alt="news.img_alt">
        <div class="my-6">
          <h3 class="text-xl font-semibold text-slate-800 dark:text-white dark:group-hover:text-white">
            {{ news.title }}
          </h3>
          <p class="mt-5 text-gray-600 dark:text-slate-300">
            {{ news.description }}
          </p>
        </div>
      </router-link>
    </div>

    <!--    Pagination-->
    <!--    <nav aria-label="Page navigation example" class="flex justify-center mx-4 mt-6">-->
    <!--      <ul class="inline-flex h-10 -space-x-px text-base">-->
    <!--        <li>-->
    <!--          <a href="#"-->
    <!--             class="flex items-center justify-center h-10 px-4 ml-0 leading-tight bg-white border rounded-l-lg text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">Previous</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#"-->
    <!--             class="flex items-center justify-center h-10 px-4 leading-tight bg-white border dark:bg-slate-600 text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">1</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight bg-white border text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">2</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight bg-white border text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">3</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight bg-white border text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">4</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight bg-white border text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">5</a>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href="#" class="flex items-center justify-center h-10 px-4 leading-tight bg-white border rounded-r-lg text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">Next</a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </nav>-->
    <!--Pagination End-->
  </div>
  <!-- End Card Blog -->
</template>

<style scoped>

</style>