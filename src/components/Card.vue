<template>
  <div>
    <div class="loading" v-if="!card">
      {{ $t('card.loading') }}
    </div>
    <div class="bu-card-wrapper" v-if="card">
      <top-navigation :card="card" />
      <div class="bu-card-outer">
        <div class="bu-card-original">
          <h3>{{ $t('card.original_title')}}</h3>
          {{ $t('card.original_intro' )}}
          <div style="padding-top:20px" ref="card_original">
            <card-viewer :style="{ transform: `translate(0, ${card_original_top}px)` }" :card="card" :focus="focus" :highlight="highlight" />
          </div>
        </div>
        <div class="bu-card-digital">
          <h3>
            {{ $t('card.digital_title') }}
            <span class="badge-wrapper">
              <span class="badge badge-secondary">{{card.reviews}} {{$tc('card.reviews', card.reviews)}}</span>
              <span v-if="card.state == states.open" class="badge badge-danger">{{$t('card.state.open')}}</span>
              <span v-if="card.state == states.unclear" class="badge badge-danger">{{$t('card.state.unclear')}}</span>
              <span v-if="card.state == states.done" class="badge badge-success">{{$t('card.state.done')}}</span>
              <span v-if="card.state == states.invalid" class="badge badge-danger">{{$t('card.state.invalid')}}</span>
            </span>
          </h3>
          <p>{{ $t('card.digital_intro' )}}</p>
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
import states from '../services/states'

export default {
  name: 'Card',
  data() {
    return {
      card: null,
      focus: null,
      highlight: null,
      card_original_top: 0,
      states
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
      // Get id from url, or null if not found
      let id;
      if(window.location.href.match(/\/assignment\/[0-9]+/))
        id = parseInt(window.location.href.split('/').pop());
      this.card = await CardService.getCard(id);
    },
    handleScroll() {
      if(!this.$refs.card_original) return;
      this.card_original_top = Math.max(0, -this.$refs.card_original.getBoundingClientRect().top);
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

  @import '../assets/badges.scss';
  .badge-wrapper { margin-left: 10px; position:relative; top:-2px; }

</style>
