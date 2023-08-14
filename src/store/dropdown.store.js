import {defineStore} from "pinia";

export const useDropDownStore = defineStore('dropdown', {
    state: () => ({
        isOpenLanguageDropDown: false
    }),
    actions: {
        openLanguageDropDown() {
            this.isOpenLanguageDropDown = true
        },
        closeLanguageDropDown(){
            this.isOpenLanguageDropDown = false
        }
    }
})