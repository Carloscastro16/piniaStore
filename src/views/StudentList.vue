<script lang="ts" setup>
import type { IStudent } from '@/interfaces/IStudent'
import { useStudentsStore } from '@/stores/StudentsData'
import { onMounted, ref, type Ref } from 'vue'

const studentsStore = useStudentsStore()

const deleteStudent = async (id: number) => {
  studentsStore.DeleteStudent(id)
  alert('Estudiante Eliminado')
  studentsData.value = await studentsStore.students
  /* window.location.reload(); */
}

let studentsData: Ref<IStudent[]> = ref([])

onMounted(async () => {
  await studentsStore.GetStudents()
  console.log('Estudiantes', studentsStore.students)
  let students = await studentsStore.students
  studentsData.value = students
})
</script>

<template>
  <div class="students-container">
    <h2>Student List</h2>
    <ul>
      <li v-for="student in studentsData" :key="student.id">
        <RouterLink :to="{ name: 'StudentDetails', params: { id: student.id } }">{{
          student.name
        }}</RouterLink>
        <button @click="deleteStudent(student.id!)">Delete</button>
      </li>
    </ul>
    <div class="btn-add">
      <RouterLink to="/add">Add more</RouterLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
.students-container {
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      list-style: none;
      padding: 0.5rem 0.6rem;
      background-color: rgba(235, 235, 235, 0.154);
      border-radius: 0.5rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .btn-add {
    margin-top: 1.2rem;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    background: #41B883;
    color: #fff;
    width: fit-content;
    a {
      color: #fff;
    }
  }
}
</style>
