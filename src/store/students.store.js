import { defineStore } from 'pinia';
import {supabase} from "@/client/supabase.js";

export const useStudentsStore = defineStore({
    id: 'students',
    state: () => ({
        students: [],
    }),
    actions: {
        async fetchStudents() {
            const { data, error } = await supabase.from('students').select('*');
            if (error) {
                throw error;
            }
            this.students = data;
        },

        async createStudent(student) {
            const { data, error } = await supabase.from('students').insert([student]).select();
            if (error) {
                throw error;
            }
            this.students.push(data[0]);
        },

        async updateStudent(student) {
            const { data, error } = await supabase.from('students').upsert([student]);
            if (error) {
                throw error;
            }
            const index = this.students.findIndex((s) => s.id === student.id);
            if (index !== -1) {
                this.students[index] = data[0];
            }
        },

        async deleteStudent(id) {
            const { error } = await supabase.from('students').delete().eq('id', id);
            if (error) {
                throw error;
            }
            this.students = this.students.filter((s) => s.id !== id);
        },
    },
});
