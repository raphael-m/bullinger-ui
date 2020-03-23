<template>
  <div>
    <label :for="forValue" tabindex="-1">{{text}}</label>
    <span class="help-icon-outer" tabindex="-1" @focus="open = true" @blur="open = false" v-tooltip="{ trigger: 'manual', show: open, content: tip, classes: tipClasses ? tipClasses : [] }">
      <font-awesome-icon class="help-icon" icon="question-circle" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'MonthInput',
  props: [ 'for', 'text', 'tip', 'tip-classes' ],
  data() {
    return {
      open: false
    }
  },
  computed: {
    forValue() {
      return this["for"];
    }
  }
}
</script>

<style scoped>
.help-icon-outer { outline:none!important; margin-left: 5px; cursor:pointer; position:relative; z-index:10; }
.help-icon { color:#CBCBCB; font-size: 12px; }
</style>