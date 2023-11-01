<script setup>
import useMoneyFormatter from "@/mixins/currencyFormat.js";
import AddIcon from "@/assets/icons/AddIcon.vue";
import FilterIcon from "@/assets/icons/FilterIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import ProfileIcon from "@/assets/icons/ProfileIcon.vue";
import EditIcon from "@/assets/icons/EditIcon.vue";
import ChevronBottomIcon from "@/assets/icons/ChevronBottomIcon.vue";
import TrashIcon from "@/assets/icons/TrashIcon.vue";
import PreviewIcon from "@/assets/icons/PreviewIcon.vue";
import PaymentIcon from "@/assets/icons/PaymentIcon.vue";
import {useDropDownStore} from "@/store/dropdown.store.js";
import {useModalStore} from "@/store/modal.store.js";
import FilterStudentDropDown from "@/components/AdminComponents/FilterStudentDropDown.vue";
import CreateStudentModal from "@/components/AdminComponents/AdminModals/CreateStudentModal.vue";
import DeleteStudentModal from "@/components/AdminComponents/AdminModals/DeleteStudentModal.vue";
import PreviewStudentModal from "@/components/AdminComponents/AdminModals/PreviewStudentModal.vue";
import UpdateStudentModal from "@/components/AdminComponents/AdminModals/UpdateStudentModal.vue";
import {onMounted, ref} from "vue";
import {supabase} from "@/client/supabase.js";

const students = ref({})
const getStudents = async () => {
  const {data} = await supabase.from('students').select("*")
  students.value = data
}
onMounted(()=>{
  getStudents()
})

const deleteStudent = async (id) => {
const {status} = await supabase.from('students').delete().eq("id", id)
  if (status===200){
    alert("ok")
  }else {
    alert("error")
  }
}
console.log(students)
</script>
<template>
  <div class="mx-auto min-h-screen dark:bg-slate-800">
    <div class="bg-white pt-4 pb-14 dark:bg-slate-800 relative overflow-hidden">
      <div class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4">
        <!--            Search-->
        <div class="w-full md:w-1/2">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">Qidirish</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon class="w-5 h-5 text-slate-500 dark:text-slate-400"/>
              </div>
              <input type="text" id="simple-search" placeholder="Talaba qidirish..."
                     class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
          </form>
        </div>
        <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button type="button" @click="useModalStore().openCreateStudentModal()"
                  class="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-300 font-bold rounded-lg px-4 py-2 focus:outline-none dark:focus:ring-primary-800">
            <AddIcon class="h-6 w-6 mr-1.5 -ml-1 text-white"/>
            O'quvchi qo'shish
          </button>
          <CreateStudentModal/>
          <button @click="useDropDownStore().openFilterStudentDropDown()"
                  class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-indigo-700 focus:outline-none bg-white rounded-lg border border-indigo-800 hover:bg-indigo-800 hover:text-white focus:z-10 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-700 dark:bg-slate-800 dark:text-white dark:border-slate-500 dark:hover:text-white dark:hover:bg-slate-600"
                  type="button">
            <FilterIcon class="h-6 w-6 mr-1.5 hover:text-white "/>
            Filtr
            <ChevronBottomIcon class="-mr-1 ml-1.5 w-5 h-5"/>
          </button>
          <FilterStudentDropDown/>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-white">
          <tr>
            <th scope="col" class="p-4">№</th>
            <th scope="col" class="p-4">ism familiya</th>
            <th scope="col" class="p-4">to'lov holati</th>
            <th scope="col" class="p-4">oylik to'lov</th>
            <th scope="col" class="p-4">tug'ilgan sana</th>
            <th scope="col" class="p-4">o'quvchi turi</th>
            <th scope="col" class="p-4">amallar</th>
          </tr>
          </thead>
          <tbody v-for="(student, index) in students" :key="student.id">
          <tr class="border-b dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-900">
            <td class="p-4 w-4 text-slate-900 font-bold dark:text-slate-200">{{index+1}}</td>
            <th scope="row" class="px-4 py-3 font-medium text-slate-900 whitespace-nowrap dark:text-slate-200">
              <div class="flex items-center mr-3">
                <ProfileIcon class="h-8 w-8 p-1 border dark:border-slate-600 rounded-full mr-2"/>
                {{ student.firstname }} {{student.lastname}}
              </div>
            </th>
            <td class="px-4 py-3 font-medium text-slate-900 whitespace-nowrap dark:text-slate-200">
              <div class="bg-green-500 inline-flex rounded-lg px-3 py-0.5">
                <span class="text-white text-sm font-bold">To'langan</span>
              </div>
            </td>
            <td class="px-4 py-3 text-slate-900 font-bold whitespace-nowrap dark:text-slate-200">{{ useMoneyFormatter(350000) }}</td>
            <td class="px-4 py-3 font-medium text-slate-900 whitespace-nowrap dark:text-slate-200">{{student.birthday}}</td>
            <td class="px-4 py-3 font-medium text-slate-900 whitespace-nowrap dark:text-slate-200">{{student.student_type}}</td>
            <td class="px-4 py-3 font-medium text-slate-900 whitespace-nowrap dark:text-slate-200">
              <div class="flex items-center space-x-4">
                <button type="button"
                        class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-600 focus:ring-4 dark:border dark:border-slate-600 dark:hover:border-green-600 focus:outline-none focus:ring-green-300 dark:bg-slate-800 dark:hover:bg-green-600 dark:focus:ring-green-800">
                  <PaymentIcon class="h-4 w-4 mr-2 -ml-0.5"/>
                  Payment
                </button>
                <button type="button" @click="useModalStore().openUpdateStudentModal()"
                        class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 dark:border dark:border-slate-600 dark:hover:border-blue-600 focus:outline-none focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                  <EditIcon class="h-4 w-4 mr-2 -ml-0.5"/>
                  Edit
                </button>
                <UpdateStudentModal :studentId="student.id"/>
                <button type="button" @click="useModalStore().openPreviewStudentModal()"
                        class="py-2 px-3 flex items-center text-sm font-medium text-center text-slate-900 focus:outline-none bg-white rounded-lg border border-slate-300 hover:bg-slate-200 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700">
                  <PreviewIcon class="w-5 h-5 mr-2 -ml-0.5"/>
                  Preview
                </button>
                <!--                Preview modal-->
                <button type="button" @click="deleteStudent"
                        class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                  <TrashIcon class="h-5 w-5 mr-2 -ml-0.5"/>
                  Delete
                </button>
<!--                <DeleteStudentModal :studentId="student.id"/>-->
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!--      Pagination-->
      <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
                        <span class="text-sm font-normal text-slate-500 dark:text-slate-400">
                            Showing
                            <span class="font-semibold text-slate-900 dark:text-white">1-10</span>
                            of
                            <span class="font-semibold text-slate-900 dark:text-white">1000</span>
                        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <a href="#"
               class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-slate-500 bg-white rounded-l-lg border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
               class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">...</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">100</a>
          </li>
          <li>
            <a href="#"
               class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-slate-500 bg-white rounded-r-lg border border-slate-300 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped>

</style>