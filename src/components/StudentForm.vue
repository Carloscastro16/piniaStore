<template>
  <div>
    <form>
      <div>
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="student.name" required />
      </div>
      <div>
        <label for="email">Correo</label>
        <input type="email" id="email" v-model="student.email" required />
      </div>
      <div>
        <label for="group">Grupo</label>
        <input type="text" id="group" v-model="student.group" required />
      </div>
      <button class="btn-add" @click="submitForm()">Add</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useStudentsStore } from '@/stores/StudentsData'
import type { IStudent } from '@/interfaces/IStudent'
import { useRouter } from 'vue-router';
const router = useRouter();
const studentsStore = useStudentsStore()
const student: Ref<IStudent> = ref({
  id: 0,
  name: '',
  email: '',
  group: ''
})

const submitForm = () => {
  studentsStore.CreateStudent(student.value)
  student.value = { id: 0, name: '', email: '', group: '' }
  router.push({ name: 'StudentList' });
}
</script>

<style scoped lang="scss">
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
form {
  label {
    font-size: 1.2rem;
  }
  input {
    font-size: 1.3rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.8rem;
    &:focus-visible {
      outline: none;
    }
  }
}
.btn-add {
  cursor: pointer;
  border: none;
  font-size: 1.2rem;
  margin-top: 1.2rem;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background: #41b883;
  color: #fff;
  width: fit-content;
  a {
    color: #fff;
  }
}
</style>
