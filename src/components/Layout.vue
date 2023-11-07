<template>
  <Header />
  <slot />
  <!-- <Footer /> -->
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    Header
  }
}
</script>
