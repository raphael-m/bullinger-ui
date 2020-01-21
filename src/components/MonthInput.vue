<template>
  <select class="form-control" v-model="selected">
      <option v-for="(v,i) in months" :key="i" :value="i+1">{{v}}</option>
      <option disabled>──────────</option>
      <option value="0">s.d. (ohne Datum)</option>
  </select>
</template>

<script>
export default {
  name: 'MonthInput',
  props: [ 'value' ],
  data() {
    return {
        months: [
        ]
    }
  },
  computed: {
    selected: {
      get(){ return this.value },
      set(v){ this.$emit('input', v) }
    }
  },
  beforeMount() {
      this.months = [...Array(12).keys()].map((v, i) => {
        const date = new Date(2020, i, 1);
        const month = date.toLocaleString('default', { month: 'long' });
        return month;
      })
  },
  methods: {
  }
}
</script>