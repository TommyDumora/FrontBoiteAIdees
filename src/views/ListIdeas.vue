<style scoped>
@import '../assets/css/list-ideas.css';
</style>

<template>
  <main class="container">
    <section class="list-idees">
      <h1>Liste des idées</h1>

      <ul class="contain-idee">
        <li v-for="idee in ideas" :key="idee.ideaId" class="idee">
          <img
            v-if="userId == idee.userId"
            src="../assets/img/icon-delete.png"
            alt="icone supprimer"
            @click="deleteIdea(idee.ideaId)"
          />
          <img
            v-if="userId == idee.userId"
            src="../assets/img/icon-modifier.png"
            alt="icone modifier"
            @click="updateIdea(idee.ideaId)"
          />

          <a @click="likeIdea(idee.ideaId)">
            <img v-if="idee.likeCount > 0 && !isLiked" src="../assets/img/coeur-plein.png" alt="" />
            <img v-else src="../assets/img/coeur-vide.png" alt="" />
            <p class="like">{{ idee.likeCount }}</p>
          </a>

          <p class="date">{{ idee.createdAt }}</p>

          <p class="categorie" @click="viewIdea(idee.ideaId)">
            {{ idee.categoryName }}
          </p>
          <p class="titre" @click="viewIdea(idee.ideaId)">{{ idee.title }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import apiService from '../services/apiService.js'
import { jwtDecode } from 'jwt-decode'

export default {
  data() {
    return {
      ideas: [],
      isLiked: false,
      userId: null
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
    },

    async likeIdea(ideaId) {
      try {
        const token = localStorage.getItem('token')
        await apiService.addLike(ideaId, token)
        this.isLiked = true
        await this.fetchIdeas()
      } catch (error) {
        console.error('Erreur lors de la mise à jour du like :', error)
      }
    }
  },
  updated() {
    this.isLiked = false
  },
  async mounted() {
    await this.fetchIdeas()

    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      this.userId = decodedToken.userId
    }
  }
}
</script>
