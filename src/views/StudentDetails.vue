<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStudentsStore } from '@/stores/StudentsData'
import type { IStudent } from '@/interfaces/IStudent';

const route = useRoute()
const studentsStore = useStudentsStore()

const studentId = parseInt(route.params.id as string, 10)
const student = ref<IStudent | null>()

onMounted(async () => {
  if (!isNaN(studentId)) {
    await studentsStore.GetStudent(studentId)
    student.value = studentsStore.student
  }
})
</script>

<template>
  <div v-if="student" class="student-card">
    <h2>Details for {{ student.name }}</h2>
    <div class="content">
      <p>ID: {{ student.id }}</p>
      <p>Name: {{ student.name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>1Group: {{ student.group }}</p>
    </div>
    <RouterLink to="/studentlist">Back to List</RouterLink>
  </div>
  <div v-else>
    <p>Student not found. Return to <RouterLink to="/studentlist">Student List</RouterLink>.</p>
  </div>
</template>

<style scoped lang="scss">
.student-card {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.8rem;
  h2 {
    padding-bottom: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
