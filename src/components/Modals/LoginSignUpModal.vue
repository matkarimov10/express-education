<script setup>
import {useModalStore} from "@/store/modal.store.js";
import {ref} from "vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import LoginIcon from "@/assets/icons/LoginIcon.vue";
import SignUpIcon from "@/assets/icons/SignUpIcon.vue";

const closeModal = () => {
  useModalStore().closeLoginModal()
}
const openTab = ref(1);

const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
}
</script>

<template>
  <div
      v-if="useModalStore().isLoginModalOpen"
      class="fixed inset-0 z-40 bg-black opacity-30 min-h-screen"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isLoginModalOpen" class="fixed md:top-20 top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4">
    <div class="relative w-full max-w-md max-h-full">
      <ul class="flex pb-2 flex-row">
        <li class="mr-2 flex-auto text-center cursor-pointer">
          <a class="flex items-center justify-center font-bold uppercase px-2 py-3 shadow-lg rounded"
             @click="toggleTabs(1)"
             :class="{'text-blue-700 bg-white dark:bg-slate-700 dark:text-white': openTab !== 1,
             'text-white bg-blue-700': openTab
             === 1}">
            <LoginIcon class="w-7 h-7 mr-2"/>
            Login
          </a>
        </li>
        <li class="flex-auto text-center cursor-pointer">
          <a class="flex items-center justify-center font-bold uppercase px-2 py-3 shadow-lg rounded"
             @click="toggleTabs(2)"
             :class="{'text-blue-700 bg-white dark:bg-slate-700 dark:text-white': openTab !== 2,
             'text-white bg-blue-700':
             openTab === 2}">
            <SignUpIcon class="w-7 h-7 mr-2"/>
            Sign Up
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col rounded-lg bg-white w-full">
<!--        Login Tab-->
        <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
          <div class="relative rounded-lg border dark:border-slate-700  shadow dark:bg-slate-900">
            <button @click="closeModal" type="button"
                    class="absolute top-4 right-2.5 text-slate-400 bg-transparent hover:bg-blue-300 hover:text-blue-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-slate-600 dark:hover:text-white">
              <CloseIcon class="w-5 h-5"/>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-2 text-xl font-medium text-slate-900 dark:text-white">Sign in to our platform</h3>
              <form class="space-y-5" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email"
                         class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                         placeholder="name@company.com" required>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••"
                         class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                         required>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center">
                      <input id="remember" type="checkbox" value=""
                             class="w-5 h-5 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-600 dark:border-slate-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 dark:focus:ring-offset-slate-800"
                      >
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Remember me</label>
                  </div>
                  <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Login
                </button>
                <div class="text-sm font-medium text-slate-500 dark:text-slate-300">
                  Not registered?
                  <button @click="toggleTabs(2)" :class="{'text-blue-700': openTab !== 2, 'text-white': openTab === 2}"
                          class="text-blue-700 hover:underline dark:text-blue-500">Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
<!--        Sign Up Tab-->
        <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
          <div class="relative rounded-lg border dark:border-slate-700  shadow dark:bg-slate-900">
            <button @click="closeModal" type="button"
                    class="absolute top-4 right-2.5 text-slate-400 bg-transparent hover:bg-blue-300 hover:text-blue-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-slate-600 dark:hover:text-white">
              <CloseIcon class="w-5 h-5"/>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-2 text-xl font-medium text-slate-900 dark:text-white">Sign Up to our platform</h3>
              <form class="space-y-4" action="#">
                <input
                    type="text"
                    name="full-name"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    name="email"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Email address"
                />
                <input
                    type="password"
                    name="password"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="repeat-password"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Repeat Password"
                />
                <button type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sign up
                </button>
                <div class="text-sm font-medium text-slate-500 dark:text-slate-300">
                  Registered already?
                  <button @click="toggleTabs(1)" :class="{'text-blue-700': openTab !== 1, 'text-white': openTab === 1}"
                          class="text-blue-700 hover:underline dark:text-blue-500">Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>