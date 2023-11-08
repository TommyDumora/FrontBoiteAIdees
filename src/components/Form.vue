<style scoped>
@import '../assets/css/components/form.css';
</style>

<template>
  <main class="container">
    <section class="main-form-add">
      <h1>{{ formTitle }}</h1>

      <form @submit="submitForm" action="" method="post">
        <div class="form-titre">
          <label for="titre">Titre</label>
          <input
            type="text"
            id="titre"
            name="titre"
            v-model="formData.title"
            :placeholder="formData.title"
          />
        </div>

        <div class="form-categorie">
          <label for="choisir-categorie">Catégorie</label>
          <select
            name="choisir-categorie"
            id="choisir-categorie"
            v-model="formData.categoryName"
            :placeholder="formData.categoryName"
          >
            <option value="" disabled selected>Sélectionnez une catégorie</option>
            <option
              v-for="category in categories"
              :value="category.name"
              :key="category.categoryId"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="form-contenu">
          <label for="contenu">Contenu</label>
          <textarea
            v-model="formData.description"
            :placeholder="formData.description"
            id="contenu"
            name="contenu"
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
    submitButtonLabel: String
  }
}
</script>
