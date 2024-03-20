<template>
  <div>
    <form @submit.prevent="loginRequest" method="post" class="login-form">
      <input
        type="email"
        name="Email"
        v-model="inputEmail"
        id="email"
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        name="Password"
        v-model="inputPass"
        id="password"
        placeholder="Contraseña"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
    <p v-if="!error && errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router/index'

const inputEmail = ref('')
const inputPass = ref('')
const userStore = useUserStore()
const errorMessage = ref<string>('')
const error = ref(false)

async function loginRequest() {
  if (inputEmail.value && inputPass.value) {
    error.value = await userStore.login(inputEmail.value, inputPass.value)
    if (error.value) {
      router.push({ name: 'dashboard', params: {} })
    } else {
      errorMessage.value = 'Inicio de sesión incorrecto'
    }
  } else {
    errorMessage.value = 'Por favor, introduce tu correo electrónico y contraseña.'
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
