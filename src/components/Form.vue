<style scoped>
@import '../assets/css/components/form.css';
</style>

<template>
  <main class="container">
    <section class="main-form-add">
      <h1>{{ formTitle }}</h1>

      <form @submit.prevent="submitForm" action="" method="post">
        <div class="form-titre">
          <label for="titre">Titre</label>
          <input
            type="text"
            id="titre"
            name="titre"
            v-model="formData.title"
            :placeholder="ideaPlaceholder.title"
            required
          />
        </div>

        <div class="form-categorie">
          <label for="choisir-categorie">Catégorie</label>
          <select
            name="choisir-categorie"
            id="choisir-categorie"
            v-model="formData.categoryId"
            :disabled="categories.length === 0"
            required
          >
            <option
              v-for="category in categories"
              :value="category.categoryId"
              :key="category.categoryId"
              :disabled="category.categoryId === null"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="form-contenu">
          <label for="contenu">Contenu</label>
          <textarea
            v-model="formData.description"
            :placeholder="ideaPlaceholder.description"
            id="contenu"
            name="contenu"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn-submit-form-idee">
          {{ submitButtonLabel }}
          <img src="../assets/img/icon-envoier.png" alt="icone envoier" />
        </button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    formTitle: String,
    formData: Object,
    categories: Array,
    submitForm: Function,
    submitButtonLabel: String,
    ideaPlaceholder: Object
  }
}
</script>
