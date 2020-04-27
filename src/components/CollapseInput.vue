<template>
  <div>
    <textarea-autosize
      ref="input"
      :id="id"
      v-model="inputValue"
      class="form-control"
      :min-height="38"
      :class="{ unfocused: !focused }"
      @blur.native="focused = false; $emit('blur', $event)"
      @focus.native="focused = true; $emit('focus', $event)"
    />
  </div>
</template>

<script>
/**
A component which allows multi-line text-input but shows only one line (collapsed) when not focused
 */
export default {
  name: "CollapseInput",
  props: ["value", "id"],
  data() {
    return {
      focused: false
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
textarea.unfocused {
  height: 38px !important;
}
textarea {
  transition: height 0.2s;
}
</style>
