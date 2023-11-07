<style scoped></style>

<template>
  <Layout>
    <main class="container">
      <section class="list-idees">
        <h1>Liste des idées</h1>

        <ul class="contain-idee"></ul>
      </section>
    </main>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
// import apiService from '../services/apiService'
import axios from 'axios'

export default {
  data() {
    return {
      ideas: []
      // loading: false
    }
  },
  methods: {
    async getAllIdeas() {
      try {
        const response = await axios.get('https://localhost:7031/api/Ideas')
        this.ideas = response.data
        console.log(this.ideas)
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted() {
    this.getAllIdeas()
    // this.loading = true
    // try {
    //   this.ideas = await apiService.getIdeas()
    // } catch (error) {
    //   console.error(error)
    // } finally {
    //   this.loading = false
    // }
  },
  components: {
    Layout
  }
}
</script>
