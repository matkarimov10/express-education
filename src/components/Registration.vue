<script setup>

</script>

<template>
  <main class="dark:bg-slate-800">

    <!-- Card Section -->
    <div class="max-w-6xl  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Card -->
      <div class="bg-white shadow-xl border  dark:border-slate-600 rounded-xl p-4 sm:p-7 dark:bg-slate-900">
        <form>
          <!-- Section -->
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 first:border-transparent border-slate-200 dark:border-slate-700">
            <div class="sm:col-span-12">
              <div class="my-1 flex items-center justify-center  w-full md:w-auto">
                  <img src="../../public/images/express-logo.png" class="h-14 flex items-center" alt="Express Education Logo"/>
              </div>
              <h2 class="text-2xl mt-4 text-center py-2 font-semibold text-slate-800 dark:text-slate-200">
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
                       class="py-2 px-3 pr-11 block w-full border-slate-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-lg relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
                <input type="text"
                       class="py-2 px-3 pr-11 block w-full border-slate-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-lg relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
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
                     class="py-2 px-3 pr-11 block w-full border-slate-200 shadow-sm rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
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
                     class="py-2 px-3 pr-11 block w-full border-slate-200 shadow-sm text-lg rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
            </div>

            <div class="sm:col-span-3">
              <label for="af-submit-application-email" class="inline-block text-lg font-medium dark:text-slate-300 text-slate-600 mt-2.5">
                Description
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <textarea id="af-account-bio"
                        class="py-2 px-3 block w-full border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-300" rows="6" placeholder="Type your message..."></textarea>
            </div>
          </div>
          <!-- End Section -->
          <!-- Section -->
          <div
              class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-slate-200 dark:border-slate-700">
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
                     class="py-2 px-3 pr-11 block w-full border-slate-200 shadow-sm text-lg rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300">
            </div>
            <!-- End Col -->
          </div>
          <!-- End Section -->
          <button type="button"
                  class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-slate-800">
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