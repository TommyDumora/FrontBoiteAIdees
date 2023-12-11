<style scoped>
@import '../assets/css/view-idea.css';
</style>

<template>
  <main class="container">
    <div class="contenu-view">
      <p class="categorie-view">{{ idea.categoryName }}</p>
      <p class="titre-view">{{ idea.title }}</p>
    </div>

    <p class="view-description">{{ idea.description }}</p>
  </main>
</template>

<script>
import apiService from '../services/apiService.js'

export default {
  data() {
    return {
      idea: {}
    }
  },
  async mounted() {
    const ideaId = this.$route.params.ideaId
    try {
      this.idea = await apiService.getIdea(ideaId)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
