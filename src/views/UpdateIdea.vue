<template>
  <Layout>
    <FormIdea
      :formTitle="formTitle"
      :formData="idee"
      :categories="categories"
      :submitForm="updateIdea"
      :submitButtonLabel="submitButtonLabel"
      :ideaPlaceholder="ideaPlaceholder"
    />
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import apiService from '../services/apiService.js'
import FormIdea from '../components/Form.vue'

export default {
  data() {
    return {
      formTitle: 'Modifier une idée',
      idee: {},
      categories: [],
      submitButtonLabel: 'Modifier',
      ideaPlaceholder: {}
    }
  },
  methods: {
    async fetchIdeaToEdit(ideaId) {
      try {
        const idea = await apiService.getIdea(ideaId)
        this.idee = { ...idea }
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
    FormIdea
  }
}
</script>
