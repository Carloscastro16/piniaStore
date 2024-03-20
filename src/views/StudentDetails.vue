<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStudentsStore } from '@/stores/StudentsData'
import type { IStudent } from '@/stores/StudentsData' // Importa la interfaz IStudent

const route = useRoute()
const studentsStore = useStudentsStore()

const studentId = parseInt(route.params.id as string, 10)
const student = ref<IStudent | null>(null)

onMounted(async () => {
  if (!isNaN(studentId)) {
    await studentsStore.GetStudent(studentId)
    student.value = studentsStore.student
  }
})
</script>

<template>
  <div v-if="student">
    <h2>Details for {{ student.name }}</h2>
    <p><strong>ID:</strong> {{ student.id }}</p>
    <p><strong>Name:</strong> {{ student.name }}</p>
    <p><strong>Email:</strong> {{ student.email }}</p>
    <p><strong>Group:</strong> {{ student.group }}</p>
    <RouterLink to="/studentlist">Back to List</RouterLink>
  </div>
  <div v-else>
    <p>Student not found. Return to <RouterLink to="/studentlist">Student List</RouterLink>.</p>
  </div>
</template>
