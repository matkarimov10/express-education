<script setup>
import { useToast } from "vue-toastification";
import emailjs from 'emailjs-com';
import {onMounted, ref} from 'vue';
import {initFlowbite} from "flowbite";
onMounted(() => {
  initFlowbite();
})
const form = ref(null)
const toast = useToast();
const inputFieldReset = ref(null)

const sendEmail = () => {
  emailjs.sendForm('service_44jimgz', 'template_c9c6e9b', form.value, 'aM67ZKtgsmSX3-7VI')
      .then(() => {
toast.success('Message sent successfully !')
        inputFieldReset.value = " "
      }).catch((error) => {
    // Error sending email
    console.error('Error sending email', error);
    toast.error('Error sending email. Please try again later.');
  });
}

</script>
<template>
  <section class="py-10 text-slate-700 dark:text-slate-400 dark:bg-slate-800 body-font relative">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-slate-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p class="mt-1 text-slate-600 text-lg dark:text-slate-300">
        Contact us about how we can help you.
      </p>
    </div>
    <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-slate-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe class="absolute inset-0" style="filter: grayscale(0) contrast(1) opacity(1);" title="address map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d424.0161337384946!2d60.612083990720514!3d41.558456613914224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1689568896085!5m2!1suz!2s"
                width="100%" height="100%"></iframe>
        <div class="opacity-50 md:opacity-90 bg-white relative flex flex-wrap py-1.5 mx-auto justify-center rounded shadow-md">
          <div class="lg:w-1/2 px-4">
            <h2 class="title-font font-semibold text-slate-900 tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1 dark:text-slate-900">Street Amir Temur, Urgench City, Uzbekistan</p>
          </div>
          <div class="lg:w-1/2 px-12 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-slate-900 tracking-widest text-xs">EMAIL</h2>
            <a class="text-indigo-500 leading-relaxed tracking-tight">expresseducation@email.com</a>
            <h2 class="title-font font-semibold text-slate-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p class="leading-relaxed dark:text-slate-900">123-456-7890</p>
          </div>
        </div>
      </div>


      <div
          class="flex mt-10 md:mt-0 px-12 dark:bg-slate-900 mx-auto flex-col border-2 border-indigo-800 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-slate-600">
        <h2 class="mb-8 text-xl text-center font-semibold text-indigo-800 dark:text-slate-300">
          Fill in the form
        </h2>
        <form class="form" ref="form" @submit.prevent="sendEmail">
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="firstname-contacts" class="sr-only">First Name</label>
                <input type="text" name="firstname-contacts" id="firstname-contacts"
                       class="py-3 px-4 block w-full border-indigo-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400"
                       placeholder="First Name" required>
              </div>

              <div>
                <label for="lastname-contacts" class="sr-only">Last Name</label>
                <input type="text" name="lastname-contacts" id="lastname-contacts"
                       class="py-3 px-4 block w-full border-indigo-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400"
                       placeholder="Last Name" required>
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label for="email-contacts" class="sr-only">Email</label>
              <input type="email" name="hs-email-contacts-1" id="email-contacts" autocomplete="email"
                     class="py-3 px-4 block w-full border-indigo-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400"
                     placeholder="Email" required>
            </div>

            <div>
              <label for="phone-number" class="sr-only">Phone Number</label>
              <input type="text" name="phone-number" id="phone-number"
                     class="py-3 px-4 block w-full border-indigo-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400"
                     placeholder="Phone Number" required>
            </div>

            <div>
              <label for="about-contacts" class="sr-only">Details</label>
              <textarea id="about-contacts" name="about-contacts" rows="4"
                        class="py-3 px-4 block w-full border-indigo-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400"
                        placeholder="Details" required></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button type="submit"
                    class="inline-flex justify-center items-center gap-x-3 text-center bg-indigo-600 hover:bg-indigo-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-slate-800">
              Send
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-indigo-800 dark:text-slate-300">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </section>
</template>

<style scoped>

</style>