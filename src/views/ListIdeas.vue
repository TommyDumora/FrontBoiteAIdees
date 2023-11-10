<style scoped>
@import '../assets/css/list-ideas.css';
</style>

<template>
  <Layout>
    <main class="container">
      <section class="list-idees">
        <h1>Liste des idées</h1>

        <ul class="contain-idee">
          <li v-for="idee in ideas" :key="idee.ideaId" class="idee">
            <img
              src="../assets/img/icon-delete.png"
              alt="icone supprimer"
              @click="deleteIdea(idee.ideaId)"
            />
            <img
              src="../assets/img/icon-modifier.png"
              alt="icone modifier"
              @click="updateIdea(idee.ideaId)"
            />

            <!-- <a href="javascript:void(0);">
              <img v-if="idee.nbLikes > 0" src="../assets/img/coeur-plein.png" alt="" />
              <img v-else src="../assets/img/coeur-vide.png" alt="" />
              <p class="like">{{ idee.nbLikes }}</p>
            </a>

            <a href="javascript:void(0);">
              <img v-if="idee.nbDislikes > 0" src="../assets/img/dislike-plein.png" alt="" />
              <img v-else src="../assets/img/dislike-vide.png" alt="" />
              <p class="dislike">{{ idee.nbDislikes }}</p>
            </a> -->

            <p class="date">{{ idee.createdAt }}</p>

            <p class="categorie" @click="viewIdea(idee.ideaId)">
              {{ idee.categoryName }}
            </p>
            <p class="titre" @click="viewIdea(idee.ideaId)">{{ idee.title }}</p>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import apiService from '../services/apiService.js'

export default {
  data() {
    return {
      ideas: []
    }
  },
  methods: {
    async fetchIdeas() {
      try {
        this.ideas = await apiService.getIdeas()
      } catch (error) {
        console.error(error)
      }
    },

    async deleteIdea(ideaId) {
      try {
        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer l'idée?")
        if (confirmDelete) {
          await apiService.deleteIdea(ideaId)
          this.fetchIdeas()
        }
      } catch (error) {
        console.error(error)
      }
    },

    async updateIdea(ideaId) {
      this.$router.push(`/update-idea/${ideaId}`)
    },

    async viewIdea(ideaId) {
      this.$router.push(`/view-idea/${ideaId}`)
    }
  },
  async mounted() {
    this.fetchIdeas()
  },
  components: {
    Layout
  }
}
</script>
