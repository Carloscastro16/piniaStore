import type { IStudent } from '@/interfaces/IStudent'
import axios from 'axios'
const baseUrl = 'https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos'

export default class StudentService {
  async getStudents(): Promise<IStudent[]> {
    const response = await axios.get(baseUrl)
    return response.data
  }

  async getStudentById(id: number): Promise<IStudent> {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }

  async createStudent(student: IStudent): Promise<IStudent> {
    const response = await axios.post(baseUrl, student)
    return response.data
  }

  async deleteStudent(id: number): Promise<void> {
    await axios.delete(`${baseUrl}/${id}`)
  }
}
