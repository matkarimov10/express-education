<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";
import {supabase} from "@/client/supabase.js";
import router from "@/router/index.js";
import NavbarTop from "@/components/AdminComponents/NavbarTop.vue";
import LoadingSpinner from "@/assets/icons/LoadingSpinner.vue";

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
  <NavbarTop/>
<!--Profile content-->
  <div class="dark:bg-slate-800 py-5 min-h-screen">
    <div
        class="max-w-6xl mx-4 rounded-lg md:mx-auto bg-white dark:bg-slate-900 shadow-xl text-gray-900">
      <div class="h-32 overflow-hidden rounded-t-lg">
        <img class="object-cover w-full h-full"
             src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
             alt='Mountain'>
      </div>
      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center bg-white h-32" src='https://cdn-icons-png.flaticon.com/512/6927/6927593.png' alt='admin'>
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold text-indigo-800 dark:text-white">Express admin</h2>
        <p class="text-slate-500 dark:text-slate-300">User</p>
      </div>
      <div>
        <!--show User Details-->
      </div>
      <div class="p-4 border-t dark:border-t-slate-500 mx-8 mt-2">
        <div v-if="isLoading"
             class="w-1/2 select-none mx-auto bg-red-500 py-2 font-light text-white rounded-full flex items-center justify-center">
          <LoadingSpinner/>
          <span>Loading</span>
        </div>
        <button v-else @click="logout"
                class="w-1/2 block mx-auto rounded-full bg-red-500 hover:bg-red-600 hover:shadow-lg font-semibold text-white px-6 py-2">Sign
          out
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>