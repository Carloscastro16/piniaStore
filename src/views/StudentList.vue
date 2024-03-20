<script lang="ts" setup>
import type { IStudent } from '@/interfaces/IStudent';
import { useStudentsStore } from '@/stores/StudentsData'
import { onMounted, ref, Ref } from 'vue';

const studentsStore = useStudentsStore()

const deleteStudent = (id: number) => {
  studentsStore.DeleteStudent(id)
}

let studentsData: Ref<IStudent[] | null> = ref([
  {
    id: 0,
    name: 'Carlos',
    email: 'carlos@gmail.com',
    group: 'IDYGS82'
  }
])

onMounted(async () => {
  await studentsStore.GetStudents()
  console.log('Estudiantes', studentsStore.students);
  let students = await studentsStore.students;
  studentsData.value = students;
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
        <button @click="deleteStudent(student.id)">Delete</button>
      </li>
    </ul>

    <RouterLink to="/add">Add New Student</RouterLink>
  </div>
</template>
<style scoped lang="scss">
.students-container{
  .ul{
    list-style: none;
  }
}
</style>