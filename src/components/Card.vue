<template>
  <div>
    <div class="loading" v-if="!card">
      Loading
    </div>
    <div class="bu-card-wrapper" v-if="card">
      <top-navigation :card="card" />
      <div class="bu-card-outer">
        <div class="bu-card-original">
          <h3>Originale Karteikarte</h3>
          <p>Zum Vergrössern verwenden Sie die Steuerelemente oder das Mausrad.</p>
          <card-viewer :card="card" />
        </div>
        <div class="bu-card-digital">
          <h3>Digitale Karteikarte <span class="badge badge-secondary">0 Rezensionen</span> <span class="badge badge-danger">offen</span></h3>
          <p>Prüfen Sie die angezeigten Werte mit den Angaben auf der originalen Karteikarte.</p>
          <card-editor :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigation from './TopNavigation'
import CardService from '../services/card'
import CardEditor from './CardEditor'
import CardViewer from './CardViewer'

export default {
  name: 'Card',
  data() {
    return {
      card: null
    }
  },
  components: {
    TopNavigation,
    CardEditor,
    CardViewer
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.card = await CardService.getCard(6);
    }
  }
}
</script>

<style lang="scss" scoped>
  .bu-card-outer { padding: 20px; display:flex; }
  .bu-card-original { width:40%; padding-right:40px; }
  .bu-card-digital { width:60%; }
</style>
