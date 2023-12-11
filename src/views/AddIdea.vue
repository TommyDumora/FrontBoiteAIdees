<style scoped></style>

<template>
  <FormIdea
    :formTitle="formTitle"
    :formData="newIdea"
    :categories="categories"
    :submitForm="addIdea"
    :submitButtonLabel="submitButtonLabel"
    :ideaPlaceholder="ideaPlaceholder"
  />
</template>

<script>
import apiService from '../services/apiService.js'
import FormIdea from '../components/Form.vue'
import { jwtDecode } from 'jwt-decode'

export default {
  data() {
    return {
      formTitle: 'Ajouter une idée',
      newIdea: {
        title: '',
        description: '',
        categoryId: null,
        userId: null
      },
      categories: [],
      submitButtonLabel: 'Ajouter',
      ideaPlaceholder: {
        title: "Écrivez un titre pour votre l'idée",
        description: "Écrivez une description pour votre l'idée"
      }
    }
  },
  methods: {
    async addIdea() {
      if (!this.newIdea.categoryId || this.newIdea.categoryId === 'Sélectionnez une catégorie') {
        alert('Veuillez sélectionner une catégorie.')
        return
      }
      try {
        const token = localStorage.getItem('token')
        await apiService.addIdea(this.newIdea, token)
        this.$router.push('/')
      } catch (error) {
        console.error("Erreur lors de la création de l'idée:", error)
      }
    }
  },
  async mounted() {
    try {
      this.categories = await apiService.getCategories()
      this.categories.unshift({
        categoryId: null,
        name: 'Sélectionnez une catégorie'
      })
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error)
    }

    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      this.newIdea.userId = decodedToken.userId
    }
  },
  components: {
    FormIdea
  }
}
</script>
