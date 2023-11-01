<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";
import {supabase} from "@/client/supabase.js";
import router from "@/router/index.js";
import {useModalStore} from "@/store/modal.store.js";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import LoginIcon from "@/assets/icons/LoginIcon.vue";
import SignUpIcon from "@/assets/icons/SignUpIcon.vue";
import LoadingSpinner from "@/assets/icons/LoadingSpinner.vue";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal.vue";

const closeModal = () => {
  useModalStore().closeLoginSignUpModal()
}
const isLoading = ref(false)
const openTab = ref(1);
const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
}
const notify = useToast()
const onSubmit = (e) => {
  e.preventDefault();
}
// connect inputs
let firstname = ref("")
let lastname = ref("")
let email = ref("")
let password = ref("")

const createUser = async () => {
  try {
    isLoading.value = true
    const {data, error} = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          firstname: firstname.value,
          lastname: lastname.value
        }
      }
    });
    if (error) {
      notify.error('Error sign up')
      console.error('Error signing up:', error.message);
    } else {
      isLoading.value = false
      notify.success('User signed up successfully')
      console.log('User signed up successfully:', data);
      // You may want to automatically log in the user after signing up.
      // Call the login function here if needed.
    }
  } catch (error) {
    isLoading.value = false
    notify.error('An error occurred')
    console.error('An error occurred:', error.message);
  }
}

const login = async () => {
  try {
    isLoading.value = true
    const {data, session, error} = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      isLoading.value = false
      notify.error('Akkauntga kirishda xatolik')
      console.error('Error signing in:', error.message);
      closeModal()
    } else {
      isLoading.value = false
      notify.success('Tabriklaymiz, akkauntga muvaffaqiyatli kirdingiz!')
      closeModal()
      await router.push({path: '/admin-dashboard'})
    }
  } catch (error) {
    isLoading.value = false
    notify.error('Kechirasiz, akkauntga kirishda xatolik!')
  }
}
async function seeCurrentUser() {
  const localUser = await supabase.auth.getSession()
  console.log(localUser)
}
</script>
<template>
  <div
      v-if="useModalStore().isLoginSignUpModalOpen"
      class="fixed inset-0 z-40 bg-black opacity-50 min-h-screen dark:bg-slate-700"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isLoginSignUpModalOpen"
       class="fixed md:top-28 top-20 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4">
    <div class="relative w-full max-w-md max-h-full">
      <ul class="flex pb-2 flex-row">
        <li class="mr-2 flex-auto text-center cursor-pointer">
          <a class="flex items-center justify-center font-bold uppercase px-2 py-3 shadow-lg rounded"
             @click="toggleTabs(1)"
             :class="{'text-blue-700 bg-white dark:bg-slate-700 dark:text-white': openTab !== 1,
             'text-white bg-blue-700': openTab === 1}">
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
              <form class="space-y-5" action="#" @submit="onSubmit">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                      placeholder="name@company.com"
                      v-model="email"
                      required>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your password</label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                      v-model="password"
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
                  <button @click="useModalStore().openForgotPasswordModal()" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                    Password?
                  </button>
                  <ForgotPasswordModal/>
                </div>
                <div v-if="isLoading"
                     class="w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <LoadingSpinner/>
                  <span>Loading</span>
                </div>
                <button v-else
                        @submit="onSubmit"
                        @click="login"
                        type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Login
                </button>
                <!--                <button-->
                <!--                    @submit="onSubmit"-->
                <!--                    @click="seeCurrentUser"-->
                <!--                    type="submit"-->
                <!--                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">-->
                <!--                  SeeUser-->
                <!--                </button>-->
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
              <form class="space-y-4" action="#" @submit="onSubmit">
                <input
                    v-model="firstname"
                    type="text"
                    name="firstname"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="First name"
                />
                <input
                    v-model="lastname"
                    type="text"
                    name="lastname"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Last name"
                />
                <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Email address"
                />
                <input
                    v-model="password"
                    type="password"
                    name="password"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Password"
                />
                <input
                    v-model="password"
                    type="password"
                    name="repeat-password"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                    placeholder="Repeat Password"
                />
                <div v-if="isLoading"
                     class="w-full select-none bg-blue-700 py-3 font-light text-white rounded flex items-center justify-center">
                  <LoadingSpinner/>
                  <span>Loading</span>
                </div>
                <button v-else
                        @submit="onSubmit"
                        @click="createUser"
                        type="submit"
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