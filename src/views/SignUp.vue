<style scoped></style>

<template>
  <div>
    <form @submit.prevent="signUp">
      <label>Prénom:</label>
      <input type="text" v-model="firstName" required />

      <label>Nom:</label>
      <input type="text" v-model="lastName" required />

      <label>Email:</label>
      <input type="email" v-model="email" required />

      <label>Mot de passe:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
import apiService from '../services/apiService.js'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
      try {
        await apiService.signUp({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })

        this.$router.push('/auth')
      } catch (error) {
        console.error("Erreur de création de l'utilisateur:", error)
      }
    }
  }
}
</script>
