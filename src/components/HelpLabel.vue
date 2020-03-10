<template>
  <label :for="forValue" v-tooltip="{ content: tip, classes: tipClasses ? tipClasses : [] }">{{text}} <font-awesome-icon style="color:#666;" icon="question-circle" /></label>
</template>

<script>
export default {
  name: 'MonthInput',
  props: [ 'for', 'text', 'tip', 'tip-classes' ],
  computed: {
    forValue() {
      return this["for"];
    }
  }
}
</script>