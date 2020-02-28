<template>
  <label :for="forValue" abc="def" v-tooltip="tip">{{text}} <font-awesome-icon style="color:#666;" icon="question-circle" /></label>
</template>

<script>
export default {
  name: 'MonthInput',
  props: [ 'for', 'text', 'tip' ],
  computed: {
    forValue() {
      return this["for"];
    }
  }
}
</script>