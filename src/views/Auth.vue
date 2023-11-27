<style scoped></style>

<template>
  <div>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Mot de passe:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
import apiService from '../services/apiService.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await apiService.login({
          email: this.email,
          password: this.password
        })

        this.$router.push('/')
      } catch (error) {
        console.error("Erreur d'authentification:", error)
      }
    }
  }
}
</script>
