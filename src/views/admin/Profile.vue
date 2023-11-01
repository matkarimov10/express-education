<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";
import {supabase} from "@/client/supabase.js";
import router from "@/router/index.js";
import LoadingSpinner from "@/assets/icons/LoadingSpinner.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import TelegramIcon from "@/assets/icons/TelegramIcon.vue";
const isLoading = ref(false)
const notify = useToast()
const logout = async ()=> {
  try {
    isLoading.value = true
    await supabase.auth.signOut();
    notify.info('Akkauntingizdan muvaffaqiyatli chiqdingiz.')
    console.log('User logged out');
    await router.push({path: '/'})
    isLoading.value = false
  } catch (error) {
    notify.error("Kechirasiz akkauntdan chiqishda xatolik bo'ldi")
    console.error('An error occurred during logout:', error.message);
    isLoading.value = false
  }
}
</script>

<template>
  <div class="dark:bg-slate-800 py-5 min-h-screen">
      <div class="max-w-3xl md:mx-auto mx-4 border border-slate-300 rounded-lg dark:border dark:border-slate-600">
        <div class="overflow-hidden rounded-t-lg">
          <img src="https://i.postimg.cc/Qdhgyp8g/second.jpg" alt="" class="object-cover object-top w-full h-48">
        </div>
        <div class="relative w-32 h-32 mx-auto -mt-16 overflow-hidden rounded-full">
          <img src="https://t3.ftcdn.net/jpg/00/65/75/68/360_F_65756860_GUZwzOKNMUU3HldFoIA44qss7ZIrCG8I.jpg" alt="admin image"
               class="object-cover object-top w-full h-32 ">
        </div>
        <div class="p-4">
          <div class="text-center">
            <h2 class="text-xl font-bold dark:text-slate-400">Express</h2>
            <p class="mt-1 text-base text-slate-500 dark:text-slate-400">Admin</p>
          </div>
          <div class="flex flex-wrap items-center space-x-4 justify-center mt-4">
            <a href=""
               class="p-2 text-red-800 rounded-full shadow-md dark:hover:text-red-400 hover:text-blue-600 dark:text-slate-300">
              <InstagramIcon class="w-5 h-5"/>
            </a>
            <a href=""
               class="p-2 text-blue-500 rounded-full shadow-md dark:hover:text-blue-400 hover:text-blue-600 dark:text-slate-400">
              <TelegramIcon class="w-5 h-5"/>
            </a>
          </div>
          <div class="flex justify-center px-2 mt-4">
            <div v-if="isLoading"
                 class="flex justify-center items-center w-full px-4 py-2 text-center text-slate-100 bg-pink-800 rounded-full hover:bg-pink-700">
              <LoadingSpinner/>
              <span>Loading</span>
            </div>
            <button v-else @click="logout"
                    class="w-full px-4 py-2 text-center text-slate-100 bg-pink-800 rounded-full hover:bg-pink-700">Sign
              out
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>