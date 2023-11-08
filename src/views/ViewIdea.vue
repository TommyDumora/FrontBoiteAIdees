<style scoped>
@import '../assets/css/view-idea.css';
</style>

<template>
  <Layout>
    <main class="container">
      <div class="contenu-view">
        <p class="categorie-view">{{ idea.categoryName }}</p>
        <p class="titre-view">{{ idea.title }}</p>
      </div>

      <p class="view-description">{{ idea.description }}</p>

      <!-- <div class="like-view">
        <a href="javascript:void(0);">
          <img v-if="idea.nbLikes > 0" src="../assets/img/coeur-plein.png" alt="" />
          <img v-else src="../assets/img/coeur-vide.png" alt="" />
          <p class="like">{{ idea.nbLikes }}</p>
        </a>

        <a href="javascript:void(0);">
          <img v-if="idea.nbDislikes > 0" src="../assets/img/dislike-plein.png" alt="" />
          <img v-else src="../assets/img/dislike-vide.png" alt="" />
          <p class="dislike">{{ idea.nbDislikes }}</p>
        </a>
      </div> -->
    </main>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import apiService from '../services/apiService'

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
  },
  components: {
    Layout
  }
}
</script>
