<script setup>
import {useModalStore} from "@/store/modal.store.js";
import WarningIcon from "@/assets/icons/WarningIcon.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import {onMounted, ref} from "vue";
import {supabase} from "@/client/supabase.js";
import {useToast} from "vue-toastification";

const notify = useToast()
const isLoading = ref(false)
const props = defineProps({
  studentId: Number
})

const closeModal = () => {
  useModalStore().closeDeleteStudentModal()
}
onMounted(()=>{
  closeModal()
})

const deleteStudent = async () => {
  try {
    isLoading.value = true
    const { error } = await supabase.from("students").delete().eq("id", props.studentId);
    if (error) {
      isLoading.value = false
      notify.error("O'quvchini o'chirishda xatolik")
      console.error('Error signing in:', error.message);
      closeModal()
    } else {
      isLoading.value = false
      notify.success("O'quvchi muvaffaqiyatli o'chirildi!")
      closeModal()
    }
  } catch (error) {
    isLoading.value = false
    notify.error("Kechirasiz, o'quvchi o'chirilmadi. Xatolik bor!")
  }
}
</script>
<template>
  <div v-if="useModalStore().isDeleteStudentModalOpen"
       class="fixed -left-10 inset-0 z-50 bg-black opacity-70 min-h-screen dark:bg-slate-700">
  </div>
  <div v-if="useModalStore().isDeleteStudentModalOpen"
       class="fixed top-32 -left-4 px-3 right-0 z-50 py-10 flex justify-center w-full">
    <div class="relative w-full h-auto max-w-md max-h-full dark:border dark:border-slate-600 rounded-lg">
      <div class="relative bg-white rounded-lg shadow dark:bg-slate-900">
        <button type="button" @click="closeModal"
                class="absolute top-3 right-2.5 text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-800 dark:hover:text-white">
          <CloseIcon class="w-5 h-5"/>
        </button>
        <div class="p-4 text-center">
          <WarningIcon class="mx-auto mb-2 text-yellow-400 w-14 h-14"/>
          <h3 class="mb-5 text-lg font-normal whitespace-normal text-slate-500 dark:text-slate-400">Haqiqatdan o'quvchini o'chirishni xohlaysizmi?</h3>
          <button type="button" @click="deleteStudent"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-4 py-2.5 text-center mr-2">
            Ha, albatta
          </button>
          <button type="button" @click="closeModal"
                  class="text-slate-500 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-200 rounded-lg border border-slate-200 text-sm font-medium px-4 py-2.5 hover:text-slate-900 focus:z-10 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-500 dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-slate-600">
            Yo'q, orqaga
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>