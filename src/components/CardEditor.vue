<template>
  <div class="bu-card-editor">
    <form @submit="save">
      <div class="row">
        <div class="col-sm-4" v-viewer="'date'">
          <h4>{{$t('editor.date.title')}}</h4>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label for="year">{{$t('editor.date.year')}}</label>
              <input id="year" v-model.number="c.date.year" type="number" @mousewheel.prevent class="form-control" />
            </div>
            <div class="col-sm-4 form-group">
              <label for="month">{{$t('editor.date.month')}}</label>
              <month-input id="month" v-model.number="c.date.month" />
            </div>
            <div class="col-sm-4 form-group">
              <label for="day">{{$t('editor.date.day')}}</label>
              <input id="day" v-model.number="c.date.day" type="number" @mousewheel.prevent class="form-control" />
            </div>
          </div>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label for="year_b">{{$t('editor.date.year')}} B</label>
              <input id="year_b" v-model.number="c.date.year_b" type="number" @mousewheel.prevent class="form-control" />
            </div>
            <div class="col-sm-4 from-group">
              <label for="month_b">{{$t('editor.date.month')}} B</label>
              <month-input id="month_b" v-model.number="c.date.month_b" />
            </div>
            <div class="col-sm-4 grom-group">
              <label for="day_b">{{$t('editor.date.day')}} B</label>
              <input id="day_b" v-model.number="c.date.day_b" type="number" @mousewheel.prevent class="form-control" />
            </div>
          </div>
          <label for="date_remarks">{{$t('editor.date.remarks')}}</label>
          <input id="date_remarks" v-model="c.date.remarks" type="text" class="form-control" />
        </div>
        <div class="col-sm-4" v-viewer="'sender'">
          <div class="row">
            <div class="col-sm-12">
              <h4>{{$t('editor.sender.title')}}</h4>
              <person-editor v-model="c.sender" id="sender" />
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-viewer="'receiver'">
          <div class="row">
            <div class="col-sm-12">
              <h4>{{$t('editor.receiver.title')}}</h4>
              <person-editor v-model="c.receiver" id="receiver" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" v-viewer="'autograph'">
          <h4>{{$t('editor.autograph.title')}}</h4>
          <div class="form-group">
            <label for="autograph_location">{{$t('editor.autograph.location')}}</label>
            <!-- <input id="autograph_location" v-model="c.autograph.location" type="text" class="form-control" /> -->
            <select-or-other :options='["Zürich Sta.", "Zürich ZB"]' v-model="c.autograph.location" />
          </div>
          <div class="form-group">
            <label for="autograph_signature">{{$t('editor.autograph.signature')}}</label>
            <input id="autograph_signature" v-model="c.autograph.signature" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="autograph_remarks">{{$t('editor.autograph.remarks')}}</label>
            <input id="autograph_remarks" v-model="c.autograph.remarks" type="text" class="form-control" />
          </div>
        </div>
        <div class="col-sm-4" v-viewer="'copy'">
          <h4>{{$t('editor.copy.title')}}</h4>
          <div class="form-group">
            <label for="copy_location">{{$t('editor.copy.location')}}</label>
            <!-- <input id="copy_location" v-model="c.copy.location" type="text" class="form-control" /> -->
            <select-or-other :options='["Zürich Sta.", "Zürich ZB"]' v-model="c.copy.location" />
          </div>
          <div class="form-group">
            <label for="copy_signature">{{$t('editor.copy.signature')}}</label>
            <input id="copy_signature" v-model="c.copy.signature" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="copy_remarks">{{$t('editor.copy.remarks')}}</label>
            <input id="copy_remarks" v-model="c.copy.remarks" type="text" class="form-control" />
          </div>
        </div>
      </div>
      <h4>{{$t('editor.contents.title')}}</h4>
      <div class="row">
        <div class="col-sm-4 form-group" v-viewer="'language'">
          <label for="language">{{$t('editor.contents.language')}}</label>
          <input id="language" v-model="c.language" type="text" class="form-control" />
        </div>
        <div class="col-sm-4 form-group" v-viewer="'printed'">
          <label for="printed">{{$t('editor.contents.printed')}}</label>
          <input id="printed" v-model="c.printed" type="text" class="form-control" />
        </div>
        <div class="col-sm-4 form-group" v-viewer="'literature'">
          <label for="literature">{{$t('editor.contents.literature')}}</label>
          <input id="literature" v-model="c.literature" type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group" v-viewer="'first_sentence'">
        <label for="first_sentence">{{$t('editor.contents.first_sentence')}}</label>
        <textarea id="first_sentence" spellcheck="false" v-model="c.first_sentence" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="remarks">{{$t('editor.contents.remarks')}}</label>
        <textarea id="remarks" spellcheck="false" v-model="c.remarks" class="form-control"></textarea>
      </div>
      <div class="card-actions" style="">
        <div class="form-group form-inline">
          <label for="status">{{$t('editor.state.label')}}</label>
          <select id="status" class="form-control" v-model="card.state">
            <option value="open">{{$t('editor.state.open')}}</option>
            <option value="undefined">{{$t('editor.state.undefined')}}</option>
            <option value="invalid">{{$t('editor.state.invalid')}}</option>
            <option value="done">{{$t('editor.state.done')}}</option>
          </select>
        </div>
        <div>
          <div class="btn-group">
            <button @click="save" type="button" class="btn btn-secondary btn-save">{{$t('editor.save')}}</button>
            <button @click="save_go" type="button" class="btn btn-primary btn-save-go">{{$t('editor.save_next')}}</button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="debug">
    <h4>Debug mode</h4>
    <pre>{{c}}</pre>
    </div>
  </div>
</template>

<script>
import CardService from '../services/card'
import MonthInput from './MonthInput'
import SelectOrOther from './SelectOrOther'
import PersonEditor from './PersonEditor'

export default {
  name: 'CardEditor',
  props: [ 'card' ],
  data() {
    return {
      month: 0
    }
  },
  computed: {
    c() {
      return this.card.card;
    },
    debug() {
      return window.location.href.indexOf('debug') != -1
    }
  },
  components: {
    MonthInput, SelectOrOther, PersonEditor
  },
  mounted() {
  },
  methods: {
    async save() {
      let result = await CardService.saveCard(this.card.id, this.card);
      if(!result.error)
        this.$toasted.success(this.$t('editor.save_success', { id: this.card.id }));
      else
        this.$toasted.error(`<div>${this.$t('editor.save_error')}<br><i>${result.error.message}</i></div>`)
    },
    async save_go() {
      await this.save();
      window.location.href = this.card.navigation.next_unedited;
    }
  },
  directives: {
    viewer: {
      bind: function(el, bind, vnode) {
        el.addEventListener('mouseenter', function() {
          vnode.context.$emit('highlight', bind.value);
        });

        Array.from(el.querySelectorAll("input,textarea,select")).forEach((e) => {
          e.addEventListener('focus', function() {
            vnode.context.$emit('focus', bind.value);
          });
          e.addEventListener('blur', function() {
            vnode.context.$emit('unfocus', bind.value);
          });
        })

        el.addEventListener('mouseleave', function() {
          vnode.context.$emit('unhighlight', bind.value);
        });
      }
    }
  }
}
</script>

<style lang="scss">
    .bu-card-editor { border: 1px solid #DDD; padding:15px 20px; }

    .bu-card-editor {
      > form > .row { padding-bottom:15px; }
      .row.narrow { margin-right: -5px; margin-left: -5px; }
      .row.narrow > [class*=' col-'], .row.narrow > [class^='col-'] { padding-right:5px; padding-left:5px; }

      .form-control { border:0; border-bottom: 2px solid #C3C3C3; border-radius: 0; padding:0; }
      .form-control:focus { box-shadow: none; border-color: #009688; }
      
      label { font-family: 'Roboto', sans-serif; font-size:12px; color:#000; opacity:0.34; margin-bottom:0rem; }
      h4 { color:#707070; font-size:20px; }

      $btn-color: #009688;
      .btn-save-go { background:$btn-color; border-color:darken($btn-color, 5%) }
      .btn-save-go:hover, .btn-save-go:active, .btn-save-go:focus { background:darken($btn-color, 5%); border-color:darken($btn-color, 10%) }

      .card-actions { display:flex; justify-content: flex-end; }
      .card-actions > .form-group { margin-right: 15px; }
      .card-actions label { font-size:20px; color:#707070; opacity:1; padding-right:10px; position:relative; top:-2px; font-size:18px; }

      input::placeholder { color:#BABABA }
    }
</style>
