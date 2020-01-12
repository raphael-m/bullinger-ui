<template>
  <div id="app" class="bu-app">
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

  // Override styles from Bullinger Flask app
  .bu-app h3, h4 { height:auto; margin-left:0; padding:0; background:none; box-shadow:none; font-variant:normal;  }
  .bu-app p { margin-left:0; padding:0; }
  .bu-app input[type=text], .bu-app input[type=number] { line-height:normal; width:100%; height:calc(1.5em + 0.75rem + 2px); padding:0; font-weight:400; font-size:1rem; }
  
  .toasted-container.bu-toast-container.top-right { top:20px; right:30px; }
  .bu-toast { line-height:1.5em!important; padding:20px!important; max-width:450px!important; }
</style>