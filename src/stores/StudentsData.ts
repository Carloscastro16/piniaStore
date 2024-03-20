import { defineStore } from 'pinia'
import { ref } from 'vue'
import StudentService from '@/services/StudentService'

export interface IStudent {
  id?: number
  name: string
  email: string
  group: string
}

export const useStudentsStore = defineStore('students', () => {
  // state
  const students = ref<IStudent[]>([])
  const student = ref<IStudent | null>(null)
  const service = new StudentService()

  // actions
  async function GetStudents() {
    try {
      const response = await service.getStudents() 
      students.value = response
    } catch (error) {
      console.error('Error getting students:', error)
    }
  }

  async function GetStudent(id: number) {
    try {
      const response = await service.getStudentById(id)
      student.value = response
    } catch (error) {
      console.error('Error getting student:', error)
    }
  }

  async function CreateStudent(newStudent: IStudent) {
    try {
      const response = await service.createStudent(newStudent)
      students.value.push(response)
    } catch (error) {
      console.error('Error creating student:', error)
    }
  }

  async function DeleteStudent(id: number) {
    try {
      await service.deleteStudent(id);
      students.value = students.value.filter((s) => s.id !== id);
    } catch (error) {
      console.error('Error deleting student:', error)
    }
  }

  return { students, student, GetStudents, GetStudent, CreateStudent, DeleteStudent }
})
