import { ref } from 'vue'
import type { Ref } from 'vue'

const url = 'https://65e8dab54bb72f0a9c508303.mockapi.io/dev/api/Alumnos'

export default class AuthService {
  private token: Ref<string>

  constructor() {
    this.token = ref('')
  }

  getToken(): Ref<string> {
    return this.token
  }

  async login(email: string, password: string): Promise<boolean> {
    if (!email || !password) {
      return false
    }

    const formData = { email, password }

    try {
      const response = await fetch(url + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const jsonResponse = await response.json()

      if (response.ok) {
        this.token = jsonResponse.token
        return this.token ? true : false
      } else {
        console.error('Error al iniciar sesión:', jsonResponse.error)
        return false
      }
    } catch (error) {
      console.error('Error de red:', error)
      return false
    }
  }
}
