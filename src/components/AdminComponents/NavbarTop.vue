<script setup>
import DarkModeButton from "@/components/DarkModeButton.vue";
</script>

<template>
  <nav class="border-b dark:border-b-slate-500 dark:bg-slate-800">
    <div class="flex flex-wrap items-center justify-between mx-auto px-8 py-2">
      <a href="#" class="flex items-center">
        <img src="/images/express-logo.png" class="h-8" alt="Express Logo" />
      </a>
      <div class="flex md:order-2">
        <DarkModeButton/>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>