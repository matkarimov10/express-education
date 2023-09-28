<script setup>
import {useModalStore} from "@/store/modal.store.js";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import {ref} from "vue";
import LoadingSpinner from "@/assets/icons/LoadingSpinner.vue";
import {supabase} from "@/client/supabase.js";
import {useToast} from "vue-toastification";

const isLoading = ref(false)
const email = ref("")
const notify = useToast()
const closeModal = () => {
  useModalStore().closeForgotPasswordModal()
}
const onSubmit = (e) => {
  e.preventDefault();
}
const resetPassword = async () => {
  isLoading.value = true
  await supabase.auth.resetPasswordForEmail(email.value);
  notify.success(`Password reset email sent to: ${email.value}`)
  isLoading.value = false
};
</script>
<template>
  <div
      v-if="useModalStore().isForgotPasswordModalOpen"
      class="fixed inset-0 z-40 bg-black opacity-50 min-h-screen dark:bg-slate-700"
      @click="closeModal"
  ></div>
  <div v-if="useModalStore().isForgotPasswordModalOpen"
       class="fixed md:top-28 top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-4">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative flex flex-col rounded-lg bg-white w-full">
        <!--Login Tab-->
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
              <div v-if="isLoading"
                   class="w-full select-none bg-blue-700 py-3 font-light text-white rounded flex items-center justify-center">
                <LoadingSpinner/>
                <span>Loading</span>
              </div>
              <button v-else
                      @submit="onSubmit"
                      @click="resetPassword"
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>