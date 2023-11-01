import {defineStore} from "pinia";

export const useDropDownStore = defineStore('dropdown', {
    state: () => ({
        isOpenLanguageDropDown: false,
        isOpenFilterStudentDropDown: false
    }),
    actions: {
        openLanguageDropDown() {
            this.isOpenLanguageDropDown = true
        },
        closeLanguageDropDown() {
            this.isOpenLanguageDropDown = false
        },
        openFilterStudentDropDown() {
            this.isOpenFilterStudentDropDown = true
        },
        closeFilterStudentDropDown() {
            this.isOpenFilterStudentDropDown = false
        }
    }
})