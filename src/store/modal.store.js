import { defineStore } from "pinia"
export const useModalStore = defineStore('modal', {
    state: () => ({
        isLoginSignUpModalOpen: false,
        isForgotPasswordModalOpen:false,
        isCreateStudentModalOpen:false,
        isDeleteStudentModalOpen:false,
        isPreviewStudentModalOpen:false,
        isUpdateStudentModalOpen:false,
        isPaymentStudentModalOpen:false,
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
        },
        openCreateStudentModal(){
            this.isCreateStudentModalOpen = true
        },
        closeCreateStudentModal(){
            this.isCreateStudentModalOpen = false
        },
        openDeleteStudentModal(){
            this.isDeleteStudentModalOpen = true
        },
        closeDeleteStudentModal(){
            this.isDeleteStudentModalOpen = false
        },
        openPreviewStudentModal(){
            this.isPreviewStudentModalOpen = true
        },
        closePreviewStudentModal(){
            this.isPreviewStudentModalOpen = false
        },
        openUpdateStudentModal(){
            this.isUpdateStudentModalOpen = true
        },
        closeUpdateStudentModal(){
            this.isUpdateStudentModalOpen = false
        },
        openPaymentStudentModal(){
            this.isPaymentStudentModalOpen = true
        },
        closePaymentStudentModal(){
            this.isPaymentStudentModalOpen = false
        },
    }
})