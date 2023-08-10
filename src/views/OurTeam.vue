<script setup>
import TelegramIcon from "../assets/icons/TelegramIcon.vue";
import InstagramIcon from "../assets/icons/InstagramIcon.vue";
import {ref} from "vue";


const team = ref([
  {
    name: 'Komilova Shohista',
    position: 'English Teacher',
    telegramUrl: 'komilova-shohista',
    instagramUrl: 'komilova-shohista',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.'
  },
  {
    name: 'Komilova Shohista',
    position: 'English Teacher',
    telegramUrl: 'komilova-shohista',
    instagramUrl: 'komilova-shohista',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.'
  }
])
</script>

<template>
  <section class="bg-white dark:bg-slate-800">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-slate-800 capitalize lg:text-3xl dark:text-white">Our <span class="text-indigo-500">Executive
        Team</span>
      </h1>

      <p class="max-w-2xl text-lg mx-auto my-6 text-center text-slate-500 dark:text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at
        omnis eligendi optio eos harum.
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
        <div v-for="person in team"
             class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent hover:bg-indigo-700 group dark:hover:bg-indigo-700 dark:border-slate-600 dark:bg-slate-900 dark:hover:border-transparent">
          <div class="flex flex-col sm:-mx-4 sm:flex-row">
            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-slate-200"
                 src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                 alt="">
            <div class="mt-4 sm:mx-4 sm:mt-0">
              <h1 class="text-xl font-semibold text-slate-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{{ person.name }}</h1>
              <p class="mt-2 text-slate-500 capitalize dark:text-slate-300 group-hover:text-slate-200">{{ person.position }}</p>
            </div>
          </div>
          <p class="mt-4 text-slate-500 capitalize dark:text-slate-300 group-hover:text-slate-200">{{person.bio}}</p>
          <div class="flex mt-4 -mx-2">
            <a :href="person.telegramUrl" class="mx-2 text-slate-600 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-300 group-hover:text-white"
               aria-label="Reddit">
              <TelegramIcon class="w-6 h-6"/>
            </a>
            <a :href="person.instagramUrl" class="mx-2 text-slate-600 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-300 group-hover:text-white"
               aria-label="Facebook">
              <InstagramIcon class="w-6 h-6"/>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>