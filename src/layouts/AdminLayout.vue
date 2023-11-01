<script setup>
import BottomBar from "@/components/AdminComponents/BottomBar.vue";
import NavbarTop from "@/components/AdminComponents/NavbarTop.vue";
</script>

<template>
  <NavbarTop/>
    <router-view/>
    <BottomBar/>
</template>

<style scoped>

</style>