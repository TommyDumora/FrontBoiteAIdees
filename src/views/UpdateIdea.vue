<style scoped>
/* @import '../assets/css/update-idea.css'; */
</style>

<template>
  <Layout>
    <FormGeneric
      :formTitle="formTitle"
      :formData="idee"
      :categories="categories"
      :submitForm="updateIdea"
      :submitButtonLabel="submitButtonLabel"
    />
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import apiService from '../services/apiService.js'
import FormGeneric from '../components/Form.vue'

export default {
  data() {
    return {
      formTitle: 'Modifier une idée',
      idee: {},
      categories: [],
      submitButtonLabel: 'Modifier'
    }
  },
  methods: {
    async fetchIdeaToEdit(ideaId) {
      try {
        const idea = await apiService.getIdea(ideaId)
        this.idee = { ...idea }
        console.log(this.idee)
      } catch (error) {
        console.error("Erreur lors de la récupération de l'idée à modifier:", error)
      }
    },
    async updateIdea() {
      try {
        await apiService.updateIdea(this.idee.ideaId, this.idee)
        this.$router.push('/')
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'idée:", error)
      }
    }
  },
  async mounted() {
    const ideaId = this.$route.params.ideaId
    await this.fetchIdeaToEdit(ideaId)
    try {
      this.categories = await apiService.getCategories()
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error)
    }
  },
  components: {
    Layout,
    FormGeneric
  }
}
</script>
