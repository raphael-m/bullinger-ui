<template>
  <div class="list-group" :class="{ shadow: matchedItems.length > 0 }">
    <vue-bootstrap-typeahead-list-item
      v-for="(item, id) in matchedItems" :key="id"
      :data="item.data"
      :html-text="highlight(item.text)"
      :background-variant="backgroundVariant"
      :text-variant="textVariant"
      @click.native="handleHit(item, $event)"
    >
      <template v-if="$scopedSlots.suggestion" slot="suggestion" slot-scope="{ data, htmlText }">
        <slot name="suggestion" v-bind="{ data, htmlText }" />
      </template>
    </vue-bootstrap-typeahead-list-item>
  </div>
</template>

<script>
import VueBootstrapTypeaheadListItem from './VueBootstrapTypeaheadListItem.vue'
function sanitize(text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
export default {
  name: 'VueBootstrapTypeaheadList',
  components: {
    VueBootstrapTypeaheadListItem
  },
  props: {
    data: {
      type: Array,
      required: true,
      validator: d => d instanceof Array
    },
    query: {
      type: String,
      default: ''
    },
    backgroundVariant: {
      type: String
    },
    textVariant: {
      type: String
    },
    maxMatches: {
      type: Number,
      default: 10
    },
    minMatchingChars: {
      type: Number,
      default: 2
    },
    hideEqual: {
      type: Boolean
    }
  },
  computed: {
    highlight() {
      return (text) => {
        text = sanitize(text)
        if (this.query.length === 0) {
          return text
        }
        const re = new RegExp(this.escapedQuery, 'gi')
        return text.replace(re, `<strong>$&</strong>`)
      }
    },
    escapedQuery() {
      return escapeRegExp(sanitize(this.query))
    },
    matchedItems() {
      // If minMatchingChars is zero, show all matches on focus
      if(this.escapedQuery === "" && this.minMatchingChars === 0) {
        return this.data.slice(0, this.maxMatches);
      }
      if (this.query.length === 0 || this.query.length < this.minMatchingChars) {
        return []
      }
      const re = new RegExp(this.escapedQuery, 'gi')
      // Filter, sort, and concat
      let data = this.data
        .filter(i => i.text.match(re) !== null)
        .sort((a, b) => {
          const aIndex = a.text.indexOf(a.text.match(re)[0])
          const bIndex = b.text.indexOf(b.text.match(re)[0])
          if (aIndex < bIndex) { return -1 }
          if (aIndex > bIndex) { return 1 }
          return 0
        }).slice(0, this.maxMatches)
      
      // If the query equals to a single match, do not show the match
      if(this.hideEqual) {
        data = data.filter((i) => i.text !== this.escapedQuery)
      }

      return data;
    }
  },
  methods: {
    handleHit(item, evt) {
      this.$emit('hit', item)
      evt.preventDefault()
    }
  }
}
</script>