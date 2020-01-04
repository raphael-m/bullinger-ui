<template>
  <div>
    <!-- {{zoom}}, {{pos}}<br> -->
    <button @click="zoomIn()">+</button>
    <button @click="zoomOut()">-</button>
    <button @click="reset">Reset</button>
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
          @load="onLoad"
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
      </div>
    </div>
  </div>
</template>

<script>
const settings = {
  zoom: {
    min: 0.5,
    max: 20
  },
  maxBorderOverlap: 2,
  zoomFactor: 2
}

const highlightings = {
  // ToDo: List all possible highlightings with its coordinates
  date: {
    x: 0,
    y: 0,
    w: 31.44246353,
    h: 23.30848624
  },
  sender: {
    x: 31.42220421,
    y: 0,
    w: 35.2917342,
    h: 23.30848624
  },
  receiver: {
    x: 66.69367909,
    y: 0,
    w: 33.30632091,
    h: 23.30848624
  },
  autograph: {
    x: 0,
    y: 23.27981651,
    w: 31.44246353,
    h: 28.95642202
  },
  copy: {
    x: 31.42220421,
    y: 23.27981651,
    w: 35.2917342,
    h: 28.95642202
  },
  language: {
    x: 0,
    y: 52.20756881,
    w: 31.44246353,
    h: 9.690366972
  },
  printed: {
    x: 0,
    y: 61.86926606,
    w: 31.44246353,
    h: 38.13073394
  },
  literature: {
    x: 31.42220421,
    y: 52.20756881,
    w: 68.57779579,
    h: 25.37270642
  },
  first_sentence: {
    x: 31.42220421,
    y: 77.5516055,
    w: 68.57779579,
    h: 22.4483945
  }
};

export default {
  name: 'Card',
  props: [ 'card', 'focus', 'autofocus', 'highlight' ],
  data() {
    return {
      loaded: false,
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
        transform: `translate(${this.pos.x}px, ${this.pos.y}px) scale(${this.zoom})`
      }
    }
  },
  watch: {
    focus(newFocus) {
      if(this.autofocus && newFocus && highlightings[newFocus])
        this.moveTo(highlightings[newFocus])
    }
  },
  methods: {
    onLoad() {
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
      console.log('started',e)
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
      this.pos.x += delta.x;
      this.pos.y += delta.y;

      this.fixBounds();
    },
    zoomIn(e) {
      if(e) {
        this.pos.x += (this.width / 2 - e.offsetX) * this.zoom;
        this.pos.y += (this.height / 2 - e.offsetY) * this.zoom;
      } else {
        this.pos.x *= settings.zoomFactor;
        this.pos.y *= settings.zoomFactor;
      }

      this.zoom *= settings.zoomFactor;
      this.fixBounds();
    },
    zoomOut() {
      this.pos.x /= settings.zoomFactor;
      this.pos.y /= settings.zoomFactor;
      this.zoom /= settings.zoomFactor;
      this.fixBounds();
    },
    // zoom(factor, anchor = {x, y}) {
    //   if(!anchor) {
    //     anchor =  {
    //       x: 
    //     }
    //   }
    //   this.pos.x /= settings.zoomFactor;
    //   this.pos.y /= settings.zoomFactor;
    //   this.zoom /= settings.zoomFactor;
    //   this.fixBounds();
    // },
    reset() {
      this.zoom = 1;
      this.pos.x = 0;
      this.pos.y = 0;
    },
    fixBounds() {
      this.zoom = Math.max(this.zoom, settings.zoom.min);
      this.zoom = Math.min(this.zoom, settings.zoom.max);
      this.pos.x = Math.max(this.pos.x, -this.width / settings.maxBorderOverlap * this.zoom);
      this.pos.x = Math.min(this.pos.x, this.width / settings.maxBorderOverlap * this.zoom);
      this.pos.y = Math.max(this.pos.y, -this.height / settings.maxBorderOverlap * this.zoom);
      this.pos.y = Math.min(this.pos.y, this.height / settings.maxBorderOverlap * this.zoom);
    },
    scroll(e) {
      this.zoom += (-e.deltaY / 500);
      this.fixBounds();
    },
    moveTo({x, y, w}) {
      x = x - 5;
      y = y - 5;
      w = w + 10;
      
      this.zoom = 100 / w;
      console.log(this.zoom, this.width, this.height)
      this.pos.x = (-this.width * this.zoom) * x / 100 + (this.width / 2 * this.zoom) - (this.width / 2);
      this.pos.y = (-this.height * this.zoom) * y / 100 + (this.height / 2 * this.zoom) - (this.height / 2);
      this.fixBounds();
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-viewport { overflow:hidden; border:1px solid #000; background:#DDD; position:relative; }
  .card-wrapper { position:relative; }
  .card-image { cursor:move; width:100%; top:0; left:0; position:relative; }

  .animate-position { transition: all 0.2s; }
  .highlight { background:rgba(122,122,122,0.1); position:absolute; }

  /* Fade transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
