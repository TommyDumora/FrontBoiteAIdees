<style scoped></style>

<template>
  <Layout>
    <FormIdea
      :formTitle="formTitle"
      :formData="newIdea"
      :categories="categories"
      :submitForm="addIdea"
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
      formTitle: 'Ajouter une idée',
      newIdea: {
        title: '',
        description: '',
        categoryId: null,
        userId: 1
      },
      categories: [],
      submitButtonLabel: 'Ajouter',
      ideaPlaceholder: {
        title: "Écrire un titre pour l'idée",
        description: "Écrire une description pour l'idée",
        categoryId: 'Sélectionnez une catégorie'
      }
    }
  },
  methods: {
    async addIdea() {
      try {
        await apiService.addIdea(this.newIdea)
        this.$router.push('/')
      } catch (error) {
        console.error("Erreur lors de la création de l'idée:", error)
      }
    }
  },
  async mounted() {
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
