<script setup>
import UsersIcon from "@/assets/icons/UsersIcon.vue";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import HomeIcon from "@/assets/icons/HomeIcon.vue";
import {useRoute} from "vue-router";
import router from "@/router/index.js";

const route = useRoute()

const isActive = (path)=>{
  return route.path === path
}
</script>

<template>
  <div class="fixed bottom-0 left-0 z-50 w-full h-14 bg-indigo-800 border-t dark:bg-slate-700 dark:border-gray-500">
    <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
      <router-link to="/admin-dashboard"
                   :class="{ 'bg-indigo-600 dark:bg-gray-800': isActive('/admin-dashboard') }"
         class="inline-flex flex-col items-center justify-center px-5 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
        <HomeIcon class="w-5 h-5 mb-0.5 text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"/>
        <span class="text-sm text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
      </router-link>
      <router-link to="/students"  :class="{ 'bg-indigo-600 dark:bg-gray-800': isActive('/students') }"
         class="inline-flex flex-col items-center justify-center px-5 border-r hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
       <UsersIcon class="w-5 h-5 mb-0.5 text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"/>
        <span class="text-sm text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">Students</span>
      </router-link>
      <router-link to="my-profile"  :class="{ 'bg-indigo-600 dark:bg-gray-800': isActive('/my-profile') }"
         class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600">
        <ProfileIcon class="w-5 h-5 mb-0.5 text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"/>
        <span class="text-sm text-white dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>