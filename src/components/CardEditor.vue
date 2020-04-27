<template>
  <div class="bu-card-editor">
    <form @submit="save_reload">
      <div class="row">
        <div class="col-sm-4" v-viewer="'date'">
          <h4>{{ $t("editor.date.title") }}</h4>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <help-label
                for="year"
                :text="$t('editor.date.year')"
                :tip="$t('editor.date.year_tip')"
              />
              <input
                id="year"
                v-model.number="c.date.year"
                @change="checkNumber"
                min="0"
                max="2020"
                type="number"
                @mousewheel.prevent
                class="form-control"
              />
            </div>
            <div class="col-sm-4 form-group">
              <help-label
                for="month"
                :text="$t('editor.date.month')"
                :tip="$t('editor.date.month_tip')"
              />
              <month-input id="month" v-model.number="c.date.month" />
            </div>
            <div class="col-sm-4 form-group">
              <help-label for="day" :text="$t('editor.date.day')" :tip="$t('editor.date.day_tip')" />
              <input
                id="day"
                v-model.number="c.date.day"
                @change="checkNumber"
                min="1"
                max="31"
                type="number"
                @mousewheel.prevent
                class="form-control"
              />
            </div>
          </div>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <help-label
                for="year_b"
                :text="$t('editor.date.year_b')"
                :tip="$t('editor.date.year_b_tip')"
              />
              <input
                id="year_b"
                v-model.number="c.date.year_b"
                @change="checkNumber"
                min="0"
                max="2020"
                type="number"
                @mousewheel.prevent
                class="form-control"
              />
            </div>
            <div class="col-sm-4 from-group">
              <help-label
                for="month_b"
                :text="$t('editor.date.month_b')"
                :tip="$t('editor.date.month_b_tip')"
              />
              <month-input id="month_b" v-model.number="c.date.month_b" />
            </div>
            <div class="col-sm-4 grom-group">
              <help-label
                for="day_b"
                :text="$t('editor.date.day_b')"
                :tip="$t('editor.date.day_b_tip')"
              />
              <input
                id="day_b"
                v-model.number="c.date.day_b"
                @change="checkNumber"
                min="1"
                max="31"
                type="number"
                @mousewheel.prevent
                class="form-control"
              />
            </div>
          </div>
          <help-label
            for="date_remarks"
            :text="$t('editor.date.remarks')"
            :tip="$t('editor.date.remarks_tip')"
          />
          <!-- <input id="date_remarks" v-model="c.date.remarks" type="text" class="form-control" /> -->
          <collapse-input id="date_remarks" v-model="c.date.remarks" />
        </div>
        <div class="col-sm-4" v-viewer="'sender'">
          <div class="row">
            <div class="col-sm-12">
              <h4>{{ $t("editor.sender.title") }}</h4>
              <person-editor v-model="c.sender" id="sender" />
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-viewer="'receiver'">
          <div class="row">
            <div class="col-sm-12">
              <h4>{{ $t("editor.receiver.title") }}</h4>
              <person-editor v-model="c.receiver" id="receiver" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" v-viewer="'autograph'">
          <h4>{{ $t("editor.autograph.title") }}</h4>
          <div class="form-group">
            <help-label
              for="autograph_location"
              :text="$t('editor.autograph.location')"
              :tip="$t('editor.autograph.location_tip')"
            />
            <!-- <input id="autograph_location" v-model="c.autograph.location" type="text" class="form-control" /> -->
            <!-- <select-or-other :options='locationProposals.autograph' v-model="c.autograph.location" /> -->
            <typeahead
              v-model="c.autograph.location"
              id="autograph_location"
              :proposals="locationProposals.autograph"
              :maxMatches="50"
              :minMatchingChars="0"
              :hideEqual="true"
            />
          </div>
          <div class="form-group">
            <help-label
              for="autograph_signature"
              :text="$t('editor.autograph.signature')"
              :tip="$t('editor.autograph.signature_tip')"
            />
            <input
              id="autograph_signature"
              v-model="c.autograph.signature"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <help-label
              for="autograph_remarks"
              :text="$t('editor.autograph.remarks')"
              :tip="$t('editor.autograph.remarks_tip')"
            />
            <!-- <input id="autograph_remarks" v-model="c.autograph.remarks" type="text" class="form-control" /> -->
            <collapse-input id="autograph_remarks" v-model="c.autograph.remarks" />
          </div>
        </div>
        <div class="col-sm-4" v-viewer="'copy'">
          <h4>{{ $t("editor.copy.title") }}</h4>
          <div class="form-group">
            <help-label
              for="copy_location"
              :text="$t('editor.copy.location')"
              :tip="$t('editor.copy.location_tip')"
            />
            <!-- <input id="copy_location" v-model="c.copy.location" type="text" class="form-control" /> -->
            <!-- <select-or-other :options='locationProposals.copy' v-model="c.copy.location" /> -->
            <typeahead
              v-model="c.copy.location"
              id="copy_location"
              :proposals="locationProposals.copy"
              :maxMatches="50"
              :minMatchingChars="0"
              :hideEqual="true"
            />
          </div>
          <div class="form-group">
            <help-label
              for="copy_signature"
              :text="$t('editor.copy.signature')"
              :tip="$t('editor.copy.signature_tip')"
            />
            <input id="copy_signature" v-model="c.copy.signature" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <help-label
              for="copy_remarks"
              :text="$t('editor.copy.remarks')"
              :tip="$t('editor.copy.remarks_tip')"
            />
            <!-- <input id="copy_remarks" v-model="c.copy.remarks" type="text" class="form-control" /> -->
            <collapse-input id="copy_remarks" v-model="c.copy.remarks" />
          </div>
        </div>
      </div>
      <!-- <h4>{{$t('editor.contents.title')}}</h4> -->
      <div class="row">
        <div class="col-sm-4 form-group" v-viewer="'language'">
          <help-label
            for="language"
            :text="$t('editor.contents.language')"
            :tip="$t('editor.contents.language_tip')"
          />
          <!-- <input id="language" v-model="c.language" type="text" class="form-control" /> -->
          <typeahead
            v-model="c.language"
            id="language"
            :proposals="['Latein', 'Deutsch', 'Griechisch', 'Französisch']"
            :minMatchingChars="0"
            :hideEqual="true"
          />
        </div>
        <div class="col-sm-4 form-group" v-viewer="'printed'">
          <help-label
            for="printed"
            :text="$t('editor.contents.printed')"
            :tip="$t('editor.contents.printed_tip')"
          />
          <typeahead-collapse-input
            id="printed"
            v-model="c.printed"
            :proposals="['Test', 'Test2']"
            :minMatchingChars="0"
            :hideEqual="true"
          />
        </div>
        <div class="col-sm-4 form-group" v-viewer="'literature'">
          <help-label
            for="literature"
            :text="$t('editor.contents.literature')"
            :tip="$t('editor.contents.literature_tip')"
          />
          <typeahead-collapse-input
            id="literature"
            v-model="c.literature"
            :proposals="['Test']"
            :minMatchingChars="0"
            :hideEqual="true"
          />
        </div>
      </div>
      <div class="form-group" v-viewer="'first_sentence'">
        <help-label
          for="first_sentence"
          :text="$t('editor.contents.first_sentence')"
          :tip="$t('editor.contents.first_sentence_tip')"
        />
        <textarea-autosize
          id="first_sentence"
          spellcheck="false"
          v-model="c.first_sentence"
          class="form-control"
        ></textarea-autosize>
      </div>
      <div class="form-group">
        <help-label
          for="remarks"
          :text="$t('editor.contents.remarks')"
          :tip="$t('editor.contents.remarks_tip')"
        />
        <textarea-autosize id="remarks" spellcheck="false" v-model="c.remarks" class="form-control"></textarea-autosize>
      </div>
      <div class="card-actions" style>
        <div class="form-group form-inline">
          <!-- <label for="status">{{$t('editor.state.label')}}:</label> -->
          <help-label
            style="display:flex; margin-right: 10px;"
            for="status"
            :text="$t('editor.state.label')"
            :tip="$t('editor.state_tip')"
            tip-classes="state-tip"
          />
          <!-- <select id="status" class="form-control" v-model="card.state">
            <option :value="states.open">{{$t('editor.state.open')}}</option>
            <option :value="states.unclear">{{$t('editor.state.unclear')}}</option>
            <option :value="states.invalid">{{$t('editor.state.invalid')}}</option>
            <option :value="states.done">{{$t('editor.state.done')}}</option>
          </select>-->
          <div
            class="custom-control custom-radio custom-control-inline"
            v-for="s in ['open', 'unclear', 'invalid', 'done']"
            :key="s"
          >
            <input
              class="custom-control-input"
              type="radio"
              :id="'status_' + s"
              :value="states[s]"
              v-model="card.state"
            />
            <label class="custom-control-label" :for="'status_' + s">
              {{
              $t("editor.state." + s)
              }}
            </label>
          </div>

          <!-- <span v-for="s in ['open', 'unclear', 'invalid', 'done']" :key="s" class="badge badge-danger">{{$t('editor.state.' + s)}}</span> -->
        </div>
        <div>
          <div class="btn-group">
            <button
              @click="save_reload"
              type="button"
              class="btn btn-secondary btn-save"
            >{{ $t("editor.save") }}</button>
            <button
              @click="save_go"
              type="button"
              class="btn btn-primary btn-save-go"
            >{{ $t("editor.save_next") }}</button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="debug">
      <h4>Debug mode</h4>
      <pre>{{ c }}</pre>
    </div>
  </div>
</template>

<script>
import CardService from "../services/card";
import MonthInput from "./MonthInput";
import PersonEditor from "./PersonEditor";
import CollapseInput from "./CollapseInput";
import states from "../services/states";
import locationProposals from "../services/location-proposals";
import Typeahead from "./Typeahead";
import TypeaheadCollapseInput from "./TypeaheadCollapseInput";
import HelpLabel from "./HelpLabel";

export default {
  name: "CardEditor",
  props: ["card"],
  data() {
    return {
      month: 0,
      states,
      locationProposals
    };
  },
  computed: {
    c() {
      return this.card.card;
    },
    debug() {
      return window.location.href.indexOf("debug") != -1;
    }
  },
  components: {
    MonthInput,
    PersonEditor,
    CollapseInput,
    Typeahead,
    TypeaheadCollapseInput,
    HelpLabel
  },
  mounted() {},
  methods: {
    async save_reload() {
      await this.save();
      this.$emit("saved");
    },
    async save() {
      let result = await CardService.saveCard(this.card.id, this.card);
      if (!result.error)
        this.$toasted.success(
          this.$t("editor.save_success", { id: this.card.id })
        );
      else
        this.$toasted.error(
          `<div>${this.$t("editor.save_error")}<br><i>${
            result.error.message
          }</i></div>`
        );
    },
    async save_go() {
      await this.save();
      window.location.href = this.card.navigation.next_unedited;
    },
    checkNumber(e) {
      let t = e.target;
      if (t.valueAsNumber < t.min) {
        t.value = t.min;
        t.dispatchEvent(new Event("input"));
      }
      if (t.valueAsNumber > t.max) {
        t.value = t.max;
        t.dispatchEvent(new Event("input"));
      }
    }
  },
  directives: {
    viewer: {
      bind: function(el, bind, vnode) {
        el.addEventListener("mouseenter", function() {
          vnode.context.$emit("highlight", bind.value);
        });

        Array.from(el.querySelectorAll("input,textarea,select")).forEach(e => {
          e.addEventListener("focus", function() {
            vnode.context.$emit("focus", bind.value);
          });
          e.addEventListener("blur", function() {
            vnode.context.$emit("unfocus", bind.value);
          });
        });

        el.addEventListener("mouseleave", function() {
          vnode.context.$emit("unhighlight", bind.value);
        });
      }
    }
  }
};
</script>

<style lang="scss">
.bu-card-editor {
  border: 1px solid #ddd;
  padding: 15px 20px;
}

.bu-card-editor {
  > form > .row {
    padding-bottom: 15px;
  }
  .row.narrow {
    margin-right: -5px;
    margin-left: -5px;
  }
  .row.narrow > [class*=" col-"],
  .row.narrow > [class^="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }

  .form-control {
    border: 0;
    border-bottom: 2px solid #c3c3c3;
    border-radius: 0;
    padding: 0;
  }
  .form-control:focus {
    box-shadow: none;
    border-color: #009688;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: #000;
    opacity: 0.34;
    margin-bottom: 0rem;
  }
  h4 {
    color: #707070;
    font-size: 20px;
  }

  $btn-color: #009688;
  .btn-save-go {
    background: $btn-color;
    border-color: darken($btn-color, 5%);
  }
  .btn-save-go:hover,
  .btn-save-go:active,
  .btn-save-go:focus {
    background: darken($btn-color, 5%);
    border-color: darken($btn-color, 10%);
  }

  .card-actions {
    display: flex;
    justify-content: flex-end;
  }
  .card-actions > .form-group {
    margin-right: 15px;
  }
  .card-actions label {
    font-size: 20px;
    color: #707070;
    opacity: 1;
    position: relative;
    top: -1px;
    font-size: 18px;
  }
  .card-actions label.custom-control-label {
    font-size: 17px;
    padding-right: 0;
    top: 0;
  }
  .card-actions label .fa-question-circle {
    font-size: 12px;
    opacity: 0.34;
    margin-left: 3px;
  }
  input::placeholder {
    color: #bababa;
  }
}

.state-tip .tooltip-inner {
  max-width: 400px;
}
</style>
