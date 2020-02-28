<template>
  <div class="bu-person-editor">
    <div class="row narrow">
      <div class="col-sm-6 form-group">
          <help-label :for="id + '_lastname'" :text="$t(`editor.${id}.lastname`)" :tip="$t(`editor.${id}.lastname_tip`)" />
          <!-- <input :id="id + '_lastname'" v-model="value.lastname" type="text" class="form-control" /> -->
          <vue-bootstrap-typeahead
            ref="typeahead"
            v-model="value.lastname"
            :data="proposals"
            :serializer="(v) => `${v.lastname} ${v.firstname}, ${v.location}`"
            textVariant="body"
            @hit="proposalSelected"
            type="text"
          />
      </div>
      <div class="col-sm-6 form-group">
        <help-label :for="id + '_firstname'" :text="$t(`editor.${id}.firstname`)" :tip="$t(`editor.${id}.firstname_tip`)" />
        <input :id="id + '_firstname'" v-model="value.firstname" type="text" class="form-control" />
      </div>
    </div>
    <div class="row narrow">
      <div class="col-sm-6 form-group">
          <help-label :for="id + '_location'" :text="$t(`editor.${id}.location`)" :tip="$t(`editor.${id}.location_tip`)" />
          <input :id="id + '_location'" v-model="value.location" type="text" class="form-control" />
      </div>
      <div class="col-sm-6 form-group">
          <help-label :for="id + '_not_verified'" :text="$t(`editor.${id}.not_verified`)" :tip="$t(`editor.${id}.not_verified_tip`)" />
          <input :id="id + '_not_verified'" v-model="value.not_verified" type="checkbox" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label :for="id + '_remarks'">{{$t(`editor.${id}.remarks`)}}</label>
      <!-- <input :id="id + '_remarks'" v-model="value.remarks" type="text" class="form-control" /> -->
      <collapse-input :id="id + '_remarks'" v-model="value.remarks" />
    </div>
  </div>
</template>


<script>
import VueBootstrapTypeahead from './vue-bootstrap-typeahead/VueBootstrapTypeahead'
import CollapseInput from './CollapseInput'
import axios from 'axios'
import HelpLabel from './HelpLabel'

/**
A component which allows selecting / entering recievers and senders
 */
export default {
  name: 'PersonEditor',
  props: [ 'value', 'id' ],
  data() {
    return {
      proposals: []
    }
  },
  computed: {
  },
  async mounted() {
    this.$refs.typeahead.inputValue = this.value.lastname;
    this.proposals = (await axios.get('/api/persons')).data;
  },
  watch: {
  },
  methods: {
    proposalSelected(proposal) {
      // Workaround for setting the input value: https://stackoverflow.com/a/53512501/496950
      this.$refs.typeahead.inputValue = proposal.lastname;
      this.value.firstname = proposal.firstname;
      this.value.lastname = proposal.lastname;
      this.value.location = proposal.location;
    }
  },
  components: {
    VueBootstrapTypeahead,
    CollapseInput,
    HelpLabel
  }
}
</script>

<style lang="scss">
.bu-person-editor .vbt-autcomplete-list { width:200%!important; }
</style>