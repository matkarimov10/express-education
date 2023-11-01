<script setup>
import {useModalStore} from "@/store/modal.store.js"
import CloseIcon from "@/assets/icons/CloseIcon.vue"
import {onMounted, reactive} from "vue";
import {supabase} from "@/client/supabase.js";

const newStudent = reactive({
  firstname: '',
  lastname: '',
  region: '',
  city: '',
  phone: '',
  birthday: '',
  student_type: '',
  gender: '',
  course: ''
});

const clearForm = () => {
  newStudent.firstname = ''
  newStudent.lastname = ''
  newStudent.region = ''
  newStudent.city = ''
  newStudent.phone = ''
  newStudent.birthday = ''
  newStudent.student_type = ''
  newStudent.gender = ''
  newStudent.course = ''
}
const closeModal = () => {
  useModalStore().closeCreateStudentModal()
  clearForm()
}
onMounted(() => {
  closeModal()
})

const addStudent = async (e) => {
  e.preventDefault();
    const data = {
      firstname: newStudent.firstname,
      lastname: newStudent.lastname,
      student_type: newStudent.student_type,
      region: newStudent.region,
      city: newStudent.city,
      birthday: newStudent.birthday,
      phone: newStudent.phone,
      gender:newStudent.gender,
      course: newStudent.course
    };
    const {status} = await supabase.from("students").insert(data);
    if (status === 201) {
      closeModal()
    } else {
      alert("Something Wrong");
    }
};
</script>
<template>
  <div v-if="useModalStore().isCreateStudentModalOpen"
       class="fixed -left-10 -top-10 inset-0 z-40 bg-black opacity-50 min-h-screen dark:bg-slate-700">
  </div>
  <div v-if="useModalStore().isCreateStudentModalOpen"
       class="fixed md:top-14 top-0 left-0 flex z-50 justify-center items-center w-full">
    <div class="relative p-3 w-full max-w-6xl">
      <div class="px-4 py-2 bg-white rounded-lg shadow dark:bg-slate-800 sm:p-5">
        <div class="flex justify-between items-center pb-1 mb-1 rounded-t border-b sm:mb-2 dark:border-slate-600">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">O'quvchi qo'shish</h3>
          <button type="button" @click="closeModal"
                  class="text-slate-400 bg-transparent hover:bg-slate-200 hover:text-slate-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-600 dark:hover:text-white">
            <CloseIcon class="w-5 h-5"/>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit="addStudent">
          <div class="grid gap-4 px-2 mb-4 sm:grid-cols-3 overflow-y-auto h-[500px] md:h-full">
            <div>
              <label for="firstname" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Ism</label>
              <input type="text" name="firstname" id="firstname" v-model="newStudent.firstname"
                     class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="O'quvchi ismi">
            </div>
            <div>
              <label for="lastname" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Familiya</label>
              <input type="text" name="lastname" id="lastname" v-model="newStudent.lastname"
                     class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="O'quvchi familiyasi">
            </div>
            <div>
              <label for="student-type" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">O'quvchi turi</label>
              <select id="student-type" v-model="newStudent.student_type"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected value="Abituriyent">Abiturient</option>
                <option value="Talaba">Talaba</option>
                <option value="Maktab o'quvchisi (5-8 sinf)">Maktab o'quvchisi (5-8 sinf)</option>
                <option value="O'qituvchi">O'qituvchi</option>
              </select>
            </div>
            <div>
              <label for="birthday" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Tug'ilgan sanasi</label>
              <input type="date" name="birthday" id="birthday" v-model="newStudent.birthday"
                     class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="day/month/year">
            </div>
            <div>
              <label for="region" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Viloyat</label>
              <select id="region" v-model="newStudent.region"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected value="Xorazm">Xorazm</option>
                <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
                <option value="Buxoro">Buxoro</option>
                <option value="Navoiy">Navoiy</option>
                <option value="Andijon">Andijon</option>
                <option value="Farg'ona">Farg'ona</option>
                <option value="Jizzax">Jizzax</option>
                <option value="Namangan">Namangan</option>
                <option value="Qashqadaryo">Qashqadaryo</option>
                <option value="Samarqand">Samarqand</option>
                <option value="Sirdaryo">Sirdaryo</option>
                <option value="Surxondaryo">Surxondaryo</option>
                <option value="Toshkent">Toshkent</option>
              </select>
            </div>
            <div>
              <label for="city" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Shahar, tuman</label>
              <select id="city" v-model="newStudent.city"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected value="Urganch shahar">Urganch shahar</option>
                <option value="Urganch tuman">Urganch tuman</option>
                <option value="Xonqa">Xonqa</option>
                <option value="Xiva">Xiva</option>
              </select>
            </div>
            <div>
              <label for="course" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Kursni tanlang</label>
              <select id="course" v-model="newStudent.course"
                      class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="Grammatika">Grammatika</option>
                <option value="Pre">Pre</option>
                <option value="IELTS">IELTS</option>
                <option value="Multi-level">MULTI-LEVEL</option>
                <option value="Kid's English">Kid's English</option>
              </select>
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Telefon raqami</label>
              <input type="text" name="phone" id="phone" v-model="newStudent.phone"
                     class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="+998 90 123 45 67">
            </div>
            <div>
              <h3 class="mb-2 font-medium text-sm text-slate-900 dark:text-white">Jinsi</h3>
              <ul class="items-center w-full text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-lg sm:flex dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                <li class="w-full border-b border-slate-200 sm:border-b-0 sm:border-r dark:border-slate-600">
                  <div class="flex items-center pl-3">
                    <input id="male" type="radio" value="Erkak" name="male" v-model="newStudent.gender"
                           class="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500">
                    <label for="male" class="w-full py-2.5 ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Erkak</label>
                  </div>
                </li>
                <li class="w-full dark:border-slate-600">
                  <div class="flex items-center pl-3">
                    <input id="female" type="radio" value="Ayol" name="female" v-model="newStudent.gender"
                           class="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-700 dark:focus:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500">
                    <label for="female" class="w-full py-2.5 ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Ayol</label>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div class="items-center space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
            <button type="submit"
                    class="w-full sm:w-auto justify-center text-white inline-flex bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center">
              Saqlash
            </button>
            <button type="button" @click="closeModal"
                    class="w-full sm:w-auto justify-center text-white inline-flex bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <CloseIcon class="mr-1 -ml-1 w-5 h-5"/>
              Orqaga
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>