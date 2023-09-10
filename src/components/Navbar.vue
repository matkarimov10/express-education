<script setup>
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'
import {ref} from "vue";
import i18n from "../i18n.js";
import {useI18n} from "vue-i18n";
import LightModeIcon from "../assets/icons/LightModeIcon.vue";
import DarkModeIcon from "../assets/icons/DarkModeIcon.vue";
import USAFlagIcon from "../assets/icons/USAFlagIcon.vue";
import UZBFlagIcon from "../assets/icons/UZBFlagIcon.vue";
import GlobeIcon from "../assets/icons/GlobeIcon.vue";
import {onClickOutside, useDark} from "@vueuse/core";
import {useDropDownStore} from "../store/dropdown.store.js";
import {useModalStore} from "@/store/modal.store.js";
import LoginModal from "@/components/Modals/LoginSignUpModal.vue";

onMounted(() => {
  initFlowbite();
})

const {t} = useI18n()
const languageDropDown = ref(null)
const currentLang = ref(localStorage.getItem('lang') || 'uz');

onMounted(() => {
  // Register the onClickOutside function here
  onClickOutside(languageDropDown, () => {
    useDropDownStore().closeLanguageDropDown();
  });
});

const translateLanguage = (lang) => {
  if (lang === 'en') {
    return 'English'
  } else if (lang === 'uz') {
    return "O'zbek"
  }
}
const changeLang = (lang) => {
  currentLang.value = lang
  localStorage.setItem('lang', lang)
  i18n.global.locale.value = lang
  document.getElementsByTagName('title')[0].innerHTML = t('title')
  useDropDownStore().closeLanguageDropDown()
}

const isOpenMenu = ref(true)
const isDarkMode = useDark()
const toggleSvgPaths = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const navLinks = ref([
  {name: 'Home', path: '/', i18nKey: 'navLinks.home'},
  {name: 'Courses', path: '/courses', i18nKey: 'navLinks.courses'},
  {name: 'News', path: '/news', i18nKey: 'navLinks.news'},
  {name: 'Our Team', path: '/our-team', i18nKey: 'navLinks.ourTeam'},
  {name: 'Contact', path: '/contact', i18nKey: 'navLinks.contact'},
]);
</script>
<template>
  <nav class="sticky top-0 z-20 w-full bg-white bg-opacity-50 border-b backdrop-filter backdrop-blur-lg dark:border-slate-600 dark:bg-slate-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl py-1 mx-auto mb-1">
      <!--Logo-->
      <div class="flex items-center justify-center w-full my-2 md:justify-start md:w-auto">
        <router-link to="/">
          <img src="/images/express-logo.png" class="flex items-center h-10" alt="Express Education Logo"/>
        </router-link>
      </div>
      <div class="flex items-center mx-auto md:mx-3 md:order-2">
        <!--        Language Dropdown-->
        <div @click="useDropDownStore().openLanguageDropDown()"
             class="flex items-center py-3 space-x-1 text-base leading-none transition duration-200 bg-transparent border-0 rounded-full cursor-pointer text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white">
          <GlobeIcon class="w-5 h-5"/>
          <div class="font-bold">{{ translateLanguage(currentLang) }}</div>
        </div>
        <div v-if="useDropDownStore().isOpenLanguageDropDown" ref="languageDropDown"
             class="absolute flex flex-col mt-2 bg-white border divide-y rounded-md border-slate-200 dark:border-slate-600 dark:bg-slate-800 divide-slate-200 dark:divide-slate-600 md:top-14 top-24">
          <div @click="changeLang('en')"
               class="inline-flex items-center px-2 py-2 space-x-2 leading-5 cursor-pointer text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-900 hover:rounded-t-md">
            <USAFlagIcon class="w-6 h-6"/>
            <div class="text-base leading-none">English</div>
          </div>
          <div @click="changeLang('uz')"
               class="inline-flex items-center px-2 py-2 space-x-2 leading-5 cursor-pointer text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-900 hover:rounded-b-md">
            <UZBFlagIcon class="w-6 h-6"/>
            <div class="text-base leading-none">O'zbek</div>
          </div>
        </div>
        <!--Dark Mode&Light Mode button-->
        <button type="button" @click="isDarkMode= !isDarkMode"
                class="inline-flex items-center justify-center w-10 h-10 mx-4 rounded-full text-slate-600 dark:text-slate-400 bg-slate-200 dark:hover:bg-slate-600 dark:bg-slate-700 hover:bg-slate-300 focus:outline-none"
        >
          <DarkModeIcon v-if="!isDarkMode" class="text-indigo-800"/>
          <LightModeIcon v-else class="text-yellow-300"/>
        </button>
        <!--Login and Register Button-->
        <button class="hidden md:block">
          <router-link to="/registration"
                       class="transition duration-300 inline-flex items-center justify-center px-1.5 py-2 text-sm font-medium text-white bg-indigo-700 rounded-md hover:bg-indigo-800">
            Register to course
          </router-link>
        </button>
        <button @click="useModalStore().openLoginModal()"
                class="mx-2 transition duration-300 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-indigo-800">
              Login/SignUp
        </button>
        <LoginModal/>
        <!--Button Burger-->
        <button @click="toggleSvgPaths" data-collapse-toggle="navbar-language" type="button"
                class="inline-flex items-center ml-2.5 p-2.5 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
                aria-controls="navbar-language" aria-expanded="false">
          <svg v-if="isOpenMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <!--Nav Links-->
      <div class="px-2.5 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
        <ul
            class="flex flex-col p-4 mt-4 font-medium border-b-2 rounded-lg shadow-lg md:shadow-none md:p-0 border-slate-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-slate-600">
          <li v-for="navLink in navLinks">
            <router-link
                :to="navLink.path"
                class="block py-2 pl-3 my-1 border rounded pr- md:border-0 text-slate-900 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-600">
              {{ $t(navLink.i18nKey) }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>