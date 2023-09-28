import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isLoginSignUpModalOpen: false,
        isForgotPasswordModalOpen:false
    }),
    actions: {
        openLoginSignUpModal() {
            this.isLoginSignUpModalOpen = true
        },
        closeLoginSignUpModal() {
            this.isLoginSignUpModalOpen = false
        },
        openForgotPasswordModal(){
            this.isForgotPasswordModalOpen = true
        },
        closeForgotPasswordModal(){
           this.isForgotPasswordModalOpen = false
        }
    }
})