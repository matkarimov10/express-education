<script setup>

import {useModalStore} from "@/store/modal.store.js";
import {onMounted} from "vue";
const closeModal = () => {
  useModalStore().closePreviewStudentModal()
}
onMounted(()=>{
  closeModal()
})
</script>

<template>
  <div v-if="useModalStore().isPreviewStudentModalOpen"
       class="fixed -left-10 inset-0 z-40 bg-black opacity-50 min-h-screen dark:bg-slate-700">
  </div>

</template>

<style scoped>

</style>