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
          Zum Vergrössern verwenden Sie die Steuerelemente oder das Mausrad.
          <div style="padding-top:20px" ref="card_original">
            <card-viewer :style="{ transform: `translate(0, ${card_original_top}px)` }" :card="card" :focus="focus" :highlight="highlight" />
          </div>
        </div>
        <div class="bu-card-digital">
          <h3>
            Digitale Karteikarte
            <span class="badge-wrapper">
              <span class="badge badge-secondary">{{card.reviews}} Rezensionen</span>
              <span v-if="card.state == 'open'" class="badge badge-danger">offen</span>
              <span v-if="card.state == 'undefined'" class="badge badge-danger">unklar</span>
              <span v-if="card.state == 'done'" class="badge badge-success">abgeschlossen</span>
              <span v-if="card.state == 'invalid'" class="badge badge-danger">ungültig</span>
            </span>
          </h3>
          <p>Prüfen Sie die angezeigten Werte mit den Angaben auf der originalen Karteikarte.</p>
          <card-editor :card="card" @focus="focus = highlight = $event" @unfocus="focus = null" @highlight="highlight = $event" @unhighlight="highlight = null" />
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
      card: null,
      focus: null,
      highlight: null,
      card_original_top: 0
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
    },
    handleScroll() {
      if(!this.$refs.card_original) return;
      this.card_original_top = Math.max(0, -this.$refs.card_original.getBoundingClientRect().top);
      console.log(this.card_original_top)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
  h3 { font-size:20px; color: #000; }
  .bu-card-wrapper, p { color: #707070; }
  .bu-card-outer { padding: 20px; display:flex; }
  .bu-card-original { width:40%; padding-right:40px; }
  .bu-card-digital { width:60%; }

  .badge-wrapper { margin-left: 10px; position:relative; top:-2px; }
  .badge { border-radius:20px; color: #FFF; font-weight:normal; padding:7px 10px; margin-right:6px; }
  .badge-secondary { background: #8E8B8B; }
  .badge-danger { background:#FF7676; }
</style>
