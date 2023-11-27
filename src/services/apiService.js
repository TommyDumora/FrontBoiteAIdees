import axios from 'axios'
// import { jwtDecode } from 'jwt-decode'

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
      const response = await api.put(`Ideas/${ideaId}`, updatedIdea)
      return response.data
    } catch (error) {
      throw new Error("Impossible de mettre à jour l'idée.")
    }
  },

  async addIdea(addIdea) {
    try {
      await api.post('Ideas', addIdea)
    } catch (error) {
      throw new Error("Impossible de créer l'idée.")
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
  },

  // Likes
  async addLike(ideaId, jwt) {
    try {
      await api.post(`UserLikedIdeas/${ideaId}/like`, null, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      throw new Error("Impossible d'ajouter un like.")
    }
  },

  // Authentification
  async login(credentials) {
    try {
      const response = await api.post('Auth/login', credentials)
      const token = response.data
      localStorage.setItem('token', token)
    } catch (error) {
      throw new Error("Impossible de récupérer l'utilisateur.")
    }
  }
}
