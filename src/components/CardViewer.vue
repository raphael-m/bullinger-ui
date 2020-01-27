<template>
  <div>
    <div class="toolbar">
      <div class="autofocus form-check form-check-inline">
        <input type="checkbox" class="form-check-input" v-model="autofocus" id="autofocus" />
        <label :title="$t('viewer.autofocus_title')" class="form-check-label" for="autofocus">{{$t('viewer.autofocus')}}</label>
      </div>
      <label class="zoom-info">{{$t('viewer.zoom')}}: {{(zoom * 100).toFixed() + '%'}}</label>
      <a @click="zoomIn()" @mousedown.prevent :title="$t('viewer.zoom_in')"><font-awesome-icon icon="plus" /></a>
      <a @click="zoomOut()" @mousedown.prevent :title="$t('viewer.zoom_out')"><font-awesome-icon icon="minus" /></a>
      <a @click="reset" @mousedown.prevent :title="$t('viewer.zoom_full')"><font-awesome-icon icon="expand" /></a>
    </div>
    <div class="card-viewport" @wheel.prevent="scroll">
      <div
        :class="{ 'animate-position': !isDraggingConfirmed }" 
        :style="transformation"
        >
        <img
          ref="img"
          draggable="false"
          @mousedown="dragStart"
          @touchstart.prevent="dragStart"
          @mousemove="drag"
          @touchmove="drag"
          @mouseup="dragEnd"
          @touchend="dragEnd"
          @load="setWidthHeight"
          @dblclick="zoomIn"
          @contextmenu.prevent="zoomOut"
          :src="card.card_path"
          class="card-image" />
        
        <transition name="fade">
          <div
            class="highlight"
            v-if="highlightings[highlight]"
            :style="{
              top: highlightings[highlight].y + '%',
              left: highlightings[highlight].x + '%',
              width: highlightings[highlight].w + '%',
              height: highlightings[highlight].h + '%'
            }"
            ></div>
        </transition>
        <div class="copy-overlay">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import highlightings from '../assets/highlights'
const settings = {
  zoom: {
    min: 0.5,
    max: 20
  },
  maxBorderOverlap: 2,
  zoomFactor: 1.5,
  autoFocusPadding: 5,
  scrollFactor: 500
}

export default {
  name: 'Card',
  props: [ 'card', 'focus', 'highlight' ],
  data() {
    return {
      loaded: false,
      autofocus: true,
      width: null,
      height: null,
      isDragging: false,
      isDraggingConfirmed: false,
      dragPos: {
        x: 0,
        y: 0
      },
      pos: {
        x: 0,
        y: 0
      },
      zoom: 1,
      highlightings: highlightings
    }
  },
  computed: {
    transformation() {
      return {
        transform: `scale(${this.zoom}) translate(${this.pos.x}px, ${this.pos.y}px)`
      }
    }
  },
  watch: {
    focus(newFocus) {
      if(this.autofocus && newFocus && highlightings[newFocus])
        this.moveToBounds(highlightings[newFocus])
    }
  },
  methods: {
    setWidthHeight() {
      this.width = this.$refs.img.width;
      this.height = this.$refs.img.height;
    },
    getPos(e) {
      return {
        x: e.touches ? e.touches[0].screenX : e.screenX,
        y: e.touches ? e.touches[0].screenY : e.screenY
      }
    },
    dragStart(e) {
      this.isDragging = true;
      this.dragPos = this.getPos(e);
    },
    dragEnd() {
      this.isDragging = false;
      this.isDraggingConfirmed = false;
    },
    drag(e) {
      if(!this.isDragging)
        return;
      this.isDraggingConfirmed = true;

      let pos = this.getPos(e);

      let delta = {
        x: pos.x - this.dragPos.x,
        y: pos.y - this.dragPos.y
      }

      this.dragPos.x = pos.x;
      this.dragPos.y = pos.y;
      this.pos.x += delta.x / this.zoom;
      this.pos.y += delta.y / this.zoom;

      this.fixBounds();
    },
    zoomIn(e, zoomFactor = settings.zoomFactor) {
      // Limit zoom
      if(this.zoom * zoomFactor > settings.zoom.max)
        zoomFactor = settings.zoom.max / this.zoom;

      if(e) {
        let midDiff = (-this.pos.x + this.width/2 - e.offsetX);
        this.pos.x = this.pos.x + (midDiff/2) / zoomFactor;

        let hDiff = (-this.pos.y + this.height/2 - e.offsetY);
        this.pos.y = this.pos.y + (hDiff/2) / zoomFactor;
      }

      this.zoom *= zoomFactor;
      this.fixBounds();
    },
    zoomOut() {
      this.zoom /= settings.zoomFactor;
      this.fixBounds();
    },
    reset() {
      this.zoom = 1;
      this.pos.x = 0;
      this.pos.y = 0;
    },
    fixBounds() {
      this.zoom = Math.max(this.zoom, settings.zoom.min);
      this.zoom = Math.min(this.zoom, settings.zoom.max);
      this.pos.x = Math.max(this.pos.x, -this.width / settings.maxBorderOverlap);
      this.pos.x = Math.min(this.pos.x, this.width / settings.maxBorderOverlap);
      this.pos.y = Math.max(this.pos.y, -this.height / settings.maxBorderOverlap);
      this.pos.y = Math.min(this.pos.y, this.height / settings.maxBorderOverlap);
    },
    scroll(e) {
      this.zoom += (-e.deltaY / settings.scrollFactor);
      this.fixBounds();
    },
    moveToBounds({x, y, w, h}) {
      x = x - settings.autoFocusPadding;
      y = y - settings.autoFocusPadding;
      w = w + settings.autoFocusPadding*2;
      h = h + settings.autoFocusPadding*2;
      
      this.zoom = Math.min(100 / w, 100 / h);
      this.pos.x = (-this.width) * x / 100 + (this.width / 2) - (this.width / 2 / this.zoom);
      this.pos.y = (-this.height) * y / 100 + (this.height / 2) - (this.height / 2 / this.zoom);
      this.fixBounds();
    }
  },
  created () {
    window.addEventListener('resize', this.setWidthHeight);
  },
  destroyed () {
    window.removeEventListener('resize', this.setWidthHeight);
  }
}
</script>

<style lang="scss" scoped>
  .card-viewport { overflow:hidden; border:1px solid #000; background:#DDD; position:relative; }
  .card-wrapper { position:relative; }
  .card-image { cursor:move; width:100%; top:0; left:0; position:relative; }

  .animate-position { transition: all 0.2s; }
  .highlight { background:rgba(122,122,122,0.1); position:absolute; }
  .toolbar { border-radius:6px 6px 0 0; background:#F0F0F0; padding:1px 10px; text-align:right; margin-top:1px; }
  .toolbar a { cursor: pointer; display:inline-block; width:40px; padding-left:5px; text-align:center; font-size:22px; padding: 4px; border-left:1px solid #DADADA; color:#BFBFBF; }
  .toolbar a:first-of-type { margin-left: 12px; }
  .toolbar a:last-of-type { padding-right:0px; }
  .zoom-info { position:relative; top:-1px; }
  /* Fade transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /* The field "copy" should be hidden on the original card to prevent confusion */
  .copy-overlay { position:absolute; left: 66.69367909%; width:33.30632091%; top: 23.566%; height:28.65642202%; background:white; opacity:0.9; pointer-events:none; }
</style>

