<template>
  <div>
    <!-- {{zoom}}, {{pos}}<br> -->
    <button @click="zoomIn()">+</button>
    <button @click="zoomOut()">-</button>
    <button @click="reset">Reset</button>
    <div class="card-viewport" :style="{ height: height + 'px' }" @wheel.prevent="scroll">
        <img
          class="card-image"
          :class="{ 'animate-position': !isDraggingConfirmed }" 
          :style="transformation"
          :src="card.card_path"
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
           />
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

export default {
  name: 'Card',
  props: [ 'card' ],
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
      zoom: 1
    }
  },
  computed: {
    transformation() {
      return {
        transform: `translate(${this.pos.x}px, ${this.pos.y}px) scale(${this.zoom})`
      }
    }
  },
  components: {
  },
  mounted() {
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-viewport { overflow:hidden; border:1px solid #000; background:#DDD; }
  .card-image { cursor:move; position:relative; width:100%; top:0; left: 0; }

  .animate-position { transition: all 0.2s; }
</style>