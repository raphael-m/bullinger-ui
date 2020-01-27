<template>
  <div>
    <div class="form-group">
    <select class="form-control" v-model="selected" @change="updateOuterValue">
      <option v-for="e in options" :key="e" :value="e">{{e}}</option>
      <option disabled>──────────</option>
      <option :value="null">Anderer Standort</option>
    </select>
    </div>
    <input placeholder="Standort manuell eingeben" ref="othersField" v-show="!selected" v-model="othersText" @change="updateOuterValue" type="text" class="form-control" />
  </div>
</template>

<script>
/**
A component which allows either selection from a select list or provides the
possibility to enter custom text.
options: an array with values to display, e.g. [ "Option 1", "Option 2" ]
 */
export default {
  name: 'SelectOrOther',
  props: [ 'value', 'options' ],
  data() {
    return {
        othersText: "",
        selected: null
    }
  },
  computed: {
    outerValue: {
      get() { return this.value; },
      set(v) { this.$emit('input', v) }
    }
  },
  mounted() {
    this.valueChanged(this.value);
  },
  watch: {
    value(newValue) {
      this.valueChanged(newValue);
    }
  },
  methods: {
    updateOuterValue() {
      this.outerValue = this.selected || this.othersText;
      if(this.selected == null) {
        // Focus must happen in the next cycle
        window.setTimeout(this.focusOthersField, 0)
      }
    },
    valueChanged(newValue) {
      if(this.options.some((v) => v == newValue)) {
        this.selected = newValue;
        this.othersText = "";
      }
      else {
        this.selected = null;
        this.othersText = newValue;
      }
    },
    focusOthersField() {
      this.$refs.othersField.focus()
    }
  }
}
</script>