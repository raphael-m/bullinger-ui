<template>
  <div id="app">
    <card />
  </div>
</template>

<script>
import Card from './components/Card.vue'
export default {
  name: 'app',
  components: {
    Card
  }
}
</script>

<style lang="scss">
  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  body { font-family: 'Noto Serif', serif; color:#000; }
</style>