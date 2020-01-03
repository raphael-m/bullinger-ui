<template>
  <div class="bu-card-editor">
    <form>
      <div class="row">
        <div class="col-sm-4">
          <h4>Datum</h4>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label>Jahr</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-sm-4 form-group">
              <label>Monat</label>
              <select class="form-control"><option>Oktober</option></select>
            </div>
            <div class="col-sm-4 form-group">
              <label>Tag</label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="row narrow">
            <div class="col-sm-4 form-group">
              <label>Jahr B</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-sm-4 from-group">
              <label>Monat B</label>
              <select class="form-control"><option>Oktober</option></select>
            </div>
            <div class="col-sm-4 grom-group">
              <label>Tag B</label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <label>Bemerkung zum Datum</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col-sm-12">
              <h4>Absender</h4>
              <div class="form-group">
                <label>Nachname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Vorname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Ort</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Bemerkung</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col-sm-12">
              <h4>Empfänger</h4>
              <div class="form-group">
                <label>Nachname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Vorname</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Ort</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Bemerkung</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h4>Autograph</h4>
          <div class="form-group">
            <label>Standort</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Signatur</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Bemerkung</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-sm-4">
          <h4>Kopie</h4>
          <div class="form-group">
            <label>Standort</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Signatur</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Bemerkung</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h4>Sprache</h4>
          <input type="text" class="form-control" />
          <h4>Gedruckt</h4>
          <input type="text" class="form-control" />
          <h4>Literatur</h4>
          <input type="text" class="form-control" />
          <h4>Erster Satz</h4>
          <textarea class="form-control"></textarea>
          <h4>Anmerkungen</h4>
          Notiz zu dieser Karteikarte
          <textarea class="form-control"></textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//import CardService from '../services/card'
export default {
  name: 'CardEditor',
  props: [ 'card' ],
  data() {
    return {
    }
  },
  components: {
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

  .form-control { border:0; border-bottom: 2px solid #A3A3A3; border-radius: 0; padding:0; }
  .form-control:focus { box-shadow: none; border-color: #009688; }
  select.form-control { -webkit-appearance: none; -webkit-border-radius: 0px; }
  
  label { font-family: 'Roboto', sans-serif; font-size:12px; color:#000; opacity:0.54; margin-bottom:0rem; }
</style>
