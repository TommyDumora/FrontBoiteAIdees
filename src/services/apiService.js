import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:7031/api/'
})

export default {
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

  async updateIdea(ideaId, updatedIdeaData) {
    try {
      await api.put(`Ideas/${ideaId}`, updatedIdeaData)
    } catch (error) {
      throw new Error("Impossible de mettre à jour l'idée.")
    }
  }
}
