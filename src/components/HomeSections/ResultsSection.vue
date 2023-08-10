<script setup>

</script>

<template>
  <section class="bg-white dark:bg-slate-800 px-4 pt-16 pb-10 lg:pb-14 dark:bg-gradient-to-b dark:from-violet-500/[.15] dark:via-transparent">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-10 max-w-3xl  text-center lg:mb-20">
           <span class="text-white mb-2 py max-w-[90px] mx-auto bg-green-600 rounded-full block text-base font-medium">
           Narxlar
          </span>
            <h2 class="text-indigo-800 my-4 text-2xl font-bold sm:text-4xl md:text-3xl dark:text-white">
              Our Pricing Plan
            </h2>
            <p class="text-body-color text-base dark:text-slate-300">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-4 flex flex-wrap justify-center">
        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          <div
              class="shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-indigo-800 dark:border-slate-600 bg-white px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 dark:bg-slate-900">
          <span class="text-green-700 dark:text-white mt-6 mb-4 block text-xl font-bold uppercase">
            Grammatika
          </span>
            <h2 class="text-dark mb-5 text-3xl font-bold text-indigo-800 dark:text-white">
              300 000 so'm
              <span class="text-body-color text-base font-medium"> / oy </span>
            </h2>
            <p class="dark:text-slate-300 mb-8 border-b border-slate-300 pb-8 text-base">
              Perfect for using in a personal website or a client project.
            </p>
            <div class="mb-7">
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">1 User</p>
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">
                All UI components
              </p>
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">
                Lifetime access
              </p>
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">
                Free updates
              </p>
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">
                Use on 1 (one) project
              </p>
              <p class="dark:text-slate-300 mb-1 text-base leading-loose">
                3 Months support
              </p>
            </div>
            <router-link to="/registration"
                         class="mb-4 block w-full rounded-md border dark:text-white border-indigo-800 hover:bg-indigo-800 hover:text-white dark:hover:bg-white dark:hover:text-indigo-800  dark:bg-indigo-800 bg-transparent p-4 text-indigo-800 text-center text-base font-semibold transition">
              Register to course
            </router-link>
            <div>
            <span class="absolute right-0 top-7 z-[-1]">
              <svg
                  width="77"
                  height="172"
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient
                      id="paint0_linear"
                      x1="86"
                      y1="0"
                      x2="86"
                      y2="172"
                      gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4F46E5" stop-opacity="0.3" offset="1"/>
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>