import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:7031/api/'
})

export default {
  // Idées
  async getIdeas() {
    try {
      const response = await api.get('Ideas')
      return response.data
    } catch (error) {
      throw new Error('Impossible de récupérer les idées.')
    }
  },

  async getIdea(ideaId) {
    try {
      const response = await api.get(`Ideas/${ideaId}`)
      return response.data
    } catch (error) {
      throw new Error("Impossible d'afficher l'idée.")
    }
  },

  async deleteIdea(ideaId) {
    try {
      await api.delete(`Ideas/${ideaId}`)
    } catch (error) {
      throw new Error("Impossible de supprimer l'idée.")
    }
  },

  async updateIdea(ideaId, updatedIdea) {
    try {
      await api.put(`Ideas/${ideaId}`, updatedIdea)
    } catch (error) {
      throw new Error("Impossible de mettre à jour l'idée.")
    }
  },

  // Catégories
  async getCategories() {
    try {
      const response = await api.get('Categories')
      return response.data
    } catch (error) {
      throw new Error('Impossible de récupérer les catégories.')
    }
  }
}
