import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isLoginModalOpen: false,
        isSignUpModalOpen:false
    }),
    actions: {
        openLoginModal() {
            this.isLoginModalOpen = true
        },
        closeLoginModal() {
            this.isLoginModalOpen = false
        },
        openSignUpModal(){
            this.isSignUpModalOpen = true
        },
        closeSignUpModal(){
           this.isSignUpModalOpen = false
        }
    }
})