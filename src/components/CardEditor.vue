<template>
  <div class="bu-card-editor">
    <form>
      <div class="row">
        <div class="col-sm-4">
          <h4>Datum</h4>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label for="year">Jahr</label>
              <input id="year" v-model.number="c.date.year" type="number" class="form-control" />
            </div>
            <div class="col-sm-4 form-group">
              <label for="month">Monat</label>
              <month-input id="month" v-model.number="c.date.month" />
            </div>
            <div class="col-sm-4 form-group">
              <label for="day">Tag</label>
              <input id="day" v-model.number="c.date.day" type="number" class="form-control" />
            </div>
          </div>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label for="year_b">Jahr B</label>
              <input id="year_b" v-model.number="c.date.year_b" type="number" class="form-control" />
            </div>
            <div class="col-sm-4 from-group">
              <label for="month_b">Monat B</label>
              <month-input id="month_b" v-model.number="c.date.month_b" />
            </div>
            <div class="col-sm-4 grom-group">
              <label for="day_b">Tag B</label>
              <input id="day_b" v-model.number="c.date.day_b" type="number" class="form-control" />
            </div>
          </div>
          <label for="date_remarks">Bemerkung (Datum)</label>
          <input id="date_remarks" v-model="c.date.remarks" type="text" class="form-control" />
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col-sm-12">
              <h4>Absender</h4>
              <div class="row narrow">
                <div class="col-sm-6 form-group">
                  <label for="sender_lastname">Nachname</label>
                  <input id="sender_lastname" v-model="c.sender.lastname" type="text" class="form-control" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="sender_firstname">Vorname</label>
                  <input id="sender_firstname" v-model="c.sender.firstname" type="text" class="form-control" />
                </div>
              </div>
              <div class="row narrow">
                <div class="col-sm-6 form-group">
                  <label for="sender_location">Ort</label>
                  <input id="sender_location" v-model="c.sender.location" type="text" class="form-control" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="sender_verified">Verfifiziert?</label>
                  <input id="sender_verified" v-model="c.sender.verified" type="checkbox" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label for="sender_remarks">Bemerkung (Absender)</label>
                <input id="sender_remarks" v-model="c.sender.remarks" type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col-sm-12">
              <h4>Empfänger</h4>
              <div class="row narrow">
                <div class="col-sm-6 form-group">
                  <label for="receiver_lastname">Nachname</label>
                  <input id="receiver_lastname" v-model="c.receiver.lastname" type="text" class="form-control" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="receiver_firstname">Vorname</label>
                  <input id="receiver_firstname" v-model="c.receiver.firstname" type="text" class="form-control" />
                </div>
              </div>
              <div class="row narrow">
                <div class="col-sm-6 form-group">
                  <label for="receiver_location">Ort</label>
                  <input id="receiver_location" v-model="c.receiver.location" type="text" class="form-control" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="receiver_verified">Verfifiziert?</label>
                  <input id="receiver_verified" v-model="c.receiver.verified" type="checkbox" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label for="receiver_remarks">Bemerkung (Empfänger)</label>
                <input id="receiver_remarks" v-model="c.receiver.remarks" type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h4>Autograph</h4>
          <div class="form-group">
            <label for="autograph_location">Standort</label>
            <input id="autograph_location" v-model="c.autograph.location" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="autograph_signature">Signatur</label>
            <input id="autograph_signature" v-model="c.autograph.signature" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="autograph_remarks">Bemerkung (Autograph)</label>
            <input id="autograph_remarks" v-model="c.autograph.remarks" type="text" class="form-control" />
          </div>
        </div>
        <div class="col-sm-4">
          <h4>Kopie</h4>
          <div class="form-group">
            <label for="copy_location">Standort</label>
            <input id="copy_location" v-model="c.copy.location" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="copy_signature">Signatur</label>
            <input id="copy_signature" v-model="c.copy.signature" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="copy_remarks">Bemerkung (Kopie)</label>
            <input id="copy_remarks" v-model="c.copy.remarks" type="text" class="form-control" />
          </div>
        </div>
      </div>
      <h4>Inhalt</h4>
      <div class="row">
        <div class="col-sm-4 form-group">
          <label for="language">Sprache</label>
          <input id="language" v-model="c.language" type="text" class="form-control" />
        </div>
        <div class="col-sm-4 form-group">
          <label for="printed">Gedruckt</label>
          <input id="printed" v-model="c.printed" type="text" class="form-control" />
        </div>
        <div class="col-sm-4 form-group">
          <label for="literature">Literatur</label>
          <input id="literature" v-model="c.literature" type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="first_sentence">Erster Satz</label>
        <textarea id="first_sentence" spellcheck="false" v-model="c.first_sentence" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="remarks">Anmerkungen / Notiz zu dieser Karteikarte</label>
        <textarea id="remarks" spellcheck="false" v-model="c.remarks" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select id="status" class="form-control" v-model="c.state">
          <option value="undefined">Unklar</option>
          <option value="invalid">Ungültig</option>
          <option value="finished">Abgeschlossen</option>
        </select>
      </div>
      <div class="form-group text-right">
        <button type="button" class="btn btn-primary">Speichern und weiter</button>
      </div>
    </form>
  </div>
</template>

<script>
//import CardService from '../services/card'
import MonthInput from './MonthInput'
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
    }
  },
  components: {
    MonthInput
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .bu-card-editor { border: 1px solid #DDD; padding:15px 20px; }
  .row.narrow { margin-right: -5px; margin-left: -5px; }
  .row.narrow > [class*=' col-'], .row.narrow > [class^='col-'] { padding-right:5px; padding-left:5px; }

  .form-control { border:0; border-bottom: 2px solid #C3C3C3; border-radius: 0; padding:0; }
  .form-control:focus { box-shadow: none; border-color: #009688; }
  select.form-control { -webkit-appearance: none; -webkit-border-radius: 0px; }
  
  label { font-family: 'Roboto', sans-serif; font-size:12px; color:#000; opacity:0.34; margin-bottom:0rem; }
  h4 { color:#707070; font-size:20px; }
</style>
