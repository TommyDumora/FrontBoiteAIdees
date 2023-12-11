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

  async deleteIdea(ideaId, jwt) {
    try {
      await api.delete(`Ideas/${ideaId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      throw new Error("Impossible de supprimer l'idée.")
    }
  },

  async updateIdea(ideaId, updatedIdea, jwt) {
    try {
      const response = await api.put(`Ideas/${ideaId}`, updatedIdea, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
      return response.data
    } catch (error) {
      throw new Error("Impossible de mettre à jour l'idée.")
    }
  },

  async addIdea(addIdea, jwt) {
    try {
      await api.post('Ideas', addIdea, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      })
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
  },

  // User
  async signUp(user) {
    try {
      await api.post('Users', user)
    } catch (error) {
      throw new Error("Impossible de créer l'utilisateur.")
    }
  }
}
