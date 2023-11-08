<style scoped>
@import '../assets/css/components/header.css';
</style>

<template>
  <header>
    <div class="container flex-header">
      <RouterLink to="/">
        <div class="contain-logo">
          <img src="../assets/img/logo.png" alt="logo" />
          <div class="txt-logo">
            <p class="txt-header-idee">Boîte à Idées</p>
            <p class="txt-header-human">HUMAN</p>
          </div>
        </div>
      </RouterLink>

      <nav role="navigation">
        <RouterLink to="/" v-if="$route.path === '/'">
          Ajouter une idée
          <img src="../assets/img/icon-ajouter.png" alt="icône" />
        </RouterLink>

        <RouterLink to="/" v-else>
          Liste des idées
          <img src="../assets/img/icon-liste.png" alt="icône" />
        </RouterLink>
      </nav>
    </div>
  </header>

  <img class="papier-dechire" src="../assets/img/separation-v2.svg" alt="Papier déchiré" />
</template>

<script></script>
