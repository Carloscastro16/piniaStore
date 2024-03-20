<template>
  <div>
    <form>
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="student.name" required />
      </div>
      <div>
        <label for="email">Correo:</label>
        <input type="email" id="email" v-model="student.email" required />
      </div>
      <div>
        <label for="group">Grupo:</label>
        <input type="text" id="group" v-model="student.group" required />
      </div>
      <button type="submit" @click="submitForm()">Añadir</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useStudentsStore } from '@/stores/StudentsData'
import type { IStudent } from '@/interfaces/IStudent'

const studentsStore = useStudentsStore()
const student: Ref<IStudent> = ref({
  id: 0,
  name: '',
  email: '',
  group: ''
})

const submitForm = () => {
  studentsStore.CreateStudent(student.value)
  student.value = { id: null, name: '', email: '', group: '' }
}
</script>

<style scoped>
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  form div {
    display: flex;
    flex-direction: column;
  }
</style>
