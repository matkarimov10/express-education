<script setup>
import {useDropDownStore} from "@/store/dropdown.store.js";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import {onMounted, ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const filterDropDown = ref(null)
onMounted(() => {
  onClickOutside(filterDropDown, () => {
    useDropDownStore().closeFilterStudentDropDown();
  });
});
</script>
<template>
  <div v-if="useDropDownStore().isOpenFilterStudentDropDown" ref="filterDropDown"
       class="z-10 px-3 absolute py-3 bg-white rounded-lg shadow-lg md:w-80 dark:bg-slate-900 w-96 md:translate-x-1 md:top-20 md:right-3 top-44 right-1/2 translate-x-1/2">
    <div class="pt-3 pb-2">
      <label for="input-group-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <SearchIcon class="w-4 h-4 text-slate-500 dark:text-slate-400"/>
        </div>
        <input type="text"
               class="block w-full p-2 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-100 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
               placeholder="Search keywords...">
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>