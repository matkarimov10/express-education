<script setup>

</script>

<template>
  <main class="dark:bg-slate-800">

    <!-- Card Section -->
    <div class="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      <!-- Card -->
      <div class="p-4 bg-white border shadow-xl dark:border-slate-600 rounded-xl sm:p-7 dark:bg-slate-900">
        <form>
          <!-- Section -->
          <div class="grid gap-2 py-8 sm:grid-cols-12 sm:gap-4 first:pt-0 last:pb-0 first:border-transparent border-slate-200 dark:border-slate-700">
            <div class="sm:col-span-12">
              <div class="flex items-center justify-center w-full my-1 md:w-auto">
                  <img src="../../public/images/express-logo.png" class="flex items-center h-14" alt="Express Education Logo"/>
              </div>
              <h2 class="py-2 mt-4 text-2xl font-semibold text-center text-slate-800 dark:text-slate-200">
                Registration for the course
              </h2>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <label for="af-submit-application-full-name" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                Full name *
              </label>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input id="af-submit-application-full-name" type="text"
                       class="relative block w-full px-3 py-2 -mt-px -ml-px text-lg shadow-sm pr-11 border-slate-200 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
                <input type="text"
                       class="relative block w-full px-3 py-2 -mt-px -ml-px text-lg shadow-sm pr-11 border-slate-200 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
              </div>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <div class="inline-block">
                <label for="af-submit-application-phone" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                  Phone *
                </label>
              </div>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-9">
              <input id="af-submit-application-phone" type="text"
                     class="block w-full px-3 py-2 text-lg rounded-lg shadow-sm pr-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
            </div>
            <!-- End Col -->
<!--            Select Courses-->
            <div class="sm:col-span-3">
              <label for="countries" class="block mb-2 text-lg font-medium text-slate-600 dark:text-slate-300">Select course *</label>
            </div>
            <div class="sm:col-span-9">
              <select id="countries"
                      class="bg-slate-50 border border-slate-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected>Choose a course</option>
                <option value="kids">Kid's English</option>
                <option value="beginner">English Beginner</option>
                <option value="pre">Pre-IELTS</option>
                <option value="ielts">IELTS</option>
                <option value="cefr">Multi-level / CEFR</option>
                <option value="speaking">English Speaking</option>
              </select>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <label for="countries" class="block mb-2 text-lg font-medium text-slate-600 dark:text-slate-300">Select a day</label>
            </div>
            <div class="sm:col-span-9">
              <select id="countries"
                      class="bg-slate-50 border border-slate-200 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                <option selected>Choose a day</option>
                <option value="even-days">Even days</option>
                <option value="odd-days">Odd days</option>
                <option value="other-days">Other days</option>
              </select>
            </div>
            <div class="sm:col-span-3">
              <label for="af-submit-application-email" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                Email
              </label>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-9">
              <input id="af-submit-application-email" type="email"
                     class="block w-full px-3 py-2 text-lg rounded-lg shadow-sm pr-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
            </div>

            <div class="sm:col-span-3">
              <label for="af-submit-application-email" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                Description
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <textarea id="af-account-bio"
                        class="block w-full px-3 py-2 text-lg border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300" rows="6" placeholder="Type your message..."></textarea>
            </div>
          </div>
          <!-- End Section -->
          <!-- Section -->
          <div
              class="grid gap-2 py-8 border-t sm:grid-cols-12 sm:gap-4 first:pt-0 last:pb-0 first:border-transparent border-slate-200 dark:border-slate-700">
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-slate-800 dark:text-white">
                Links
              </h2>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <label for="af-submit-application-linkedin-url" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                Telegram URL
              </label>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-9">
              <input id="af-submit-application-linkedin-url" type="text"
                     class="block w-full px-3 py-2 text-lg rounded-lg shadow-sm pr-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
            </div>
            <!-- End Col -->
          </div>
          <!-- End Section -->
          <button type="button"
                  class="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-lg font-semibold text-white transition-all bg-indigo-700 border border-transparent rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800">
            Submit application
          </button>
        </form>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Card Section -->
  </main>

</template>

<style scoped>

</style>