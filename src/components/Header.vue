<style scoped>
@import '../assets/css/components/header.css';
</style>

<template>
  <header>
    <div class="container flex-header">
      <RouterLink :to="{ name: 'ListIdeas' }">
        <div class="contain-logo">
          <img src="../assets/img/logo.png" alt="logo" />
          <div class="txt-logo">
            <p class="txt-header-idee">Boîte à Idées</p>
            <p class="txt-header-human">HUMAN</p>
          </div>
        </div>
      </RouterLink>

      <nav role="navigation">
        <RouterLink :to="{ name: 'AddIdea' }" v-if="$route.path === '/'">
          Ajouter une idée
          <img src="../assets/img/icon-ajouter.png" alt="icône" />
        </RouterLink>

        <RouterLink :to="{ name: 'ListIdeas' }" v-else>
          Liste des idées
          <img src="../assets/img/icon-liste.png" alt="icône" />
        </RouterLink>

        <RouterLink :to="{ name: 'Auth' }" v-if="!isAuthenticated"> Connexion </RouterLink>

        <RouterLink :to="{ name: 'ListIdeas' }" @click="disconnect" v-else>
          Déconnexion
        </RouterLink>
      </nav>
    </div>
  </header>

  <img class="papier-dechire" src="../assets/img/separation-v2.svg" alt="Papier déchiré" />
</template>

<script>
export default {
  data() {
    return {
      token: null
    }
  },
  methods: {
    disconnect() {
      localStorage.removeItem('token')
      this.token = null // Update the local data property
    }
  },
  computed: {
    isAuthenticated() {
      return !!this.token // Convert the token to a boolean
    }
  },
  created() {
    this.token = localStorage.getItem('token')
  }
}
</script>
