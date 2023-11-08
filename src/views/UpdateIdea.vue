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
        this.idee = {
          id: idea.ideaId,
          title: idea.title,
          categoryName: idea.categoryName,
          description: idea.description
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'idée à modifier:", error)
      }
    },
    async updateIdea() {
      try {
        await apiService.updateIdea(this.idee.id, this.idee)
        this.$router.push('/')
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'idée:", error)
      }
    }
  },
  created() {
    const ideaId = this.$route.params.ideaId
    this.fetchIdeaToEdit(ideaId)

    apiService
      .getCategories()
      .then((categories) => {
        this.categories = categories
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories:', error)
      })
  },
  components: {
    Layout,
    FormGeneric
  }
}
</script>
