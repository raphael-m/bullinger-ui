<template>
  <vue-bootstrap-typeahead-collapse-input
    ref="typeahead"
    v-model="internalValue"
    :data="proposals"
    :serializer="serializer"
    textVariant="body"
    @hit="proposalSelected"
    :minMatchingChars="minMatchingChars"
    :maxMatches="maxMatches"
    type="text"
    :hideEqual="hideEqual"
  ></vue-bootstrap-typeahead-collapse-input>
</template>

<script>
import VueBootstrapTypeaheadCollapseInput from "./vue-bootstrap-typeahead-extensions/VueBootstrapTypeaheadCollapseInput";

export default {
  name: "TypeaheadGeneral",
  props: {
    value: { type: String, default: "" },
    proposals: { type: Array, default: () => [] },
    serializer: { type: Function, default: v => v },
    maxMatches: { type: Number, default: 10 },
    minMatchingChars: { type: Number, default: 2 },
    hideEqual: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  async mounted() {
    this.$refs.typeahead.inputValue = this.internalValue;
  },
  watch: {
    internalValue(newValue) {
      this.$refs.typeahead.inputValue = newValue;
    }
  },
  methods: {
    proposalSelected() {
      // // Workaround for setting the input value: https://stackoverflow.com/a/53512501/496950
      // this.$refs.typeahead.inputValue = proposal;
      // this.internalValue = proposal;
    }
  },
  components: {
    VueBootstrapTypeaheadCollapseInput
  }
};
</script>

<style lang="scss">
.bu-person-editor .vbt-autcomplete-list {
  width: 200% !important;
}
</style>
