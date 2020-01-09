<template>
  <nav class="bu-nav-top">
      <a :href="card.navigation.previous"><font-awesome-icon icon="long-arrow-alt-left" /> Vorherige Karte</a>
      <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Übersicht</a></li>
          <li class="breadcrumb-item"><a :href="card.card.date.year">{{card.card.date.year}}</a></li>
          <li class="breadcrumb-item"><a :href="card.card.date.month">Juni</a></li>
          <li class="breadcrumb-item"><a>Aktuelle Karte: {{formatTwoDigits(card.card.date.day)}}.{{formatTwoDigits(card.card.date.month)}}.{{card.card.date.year}}</a></li>
      </ul>
      <a :href="card.navigation.next">Nächste Karte <font-awesome-icon icon="long-arrow-alt-right" /> </a>
  </nav>
</template>

<script>
export default {
    props: ["card"],
    methods: {
        formatTwoDigits(val) {
            if(val < 10) return "0" + val;
            return val;
        }
    }
}
</script>

<style lang="scss" scoped>
    $spacing-nav-top-bottom: 20px;
    .bu-nav-top { background: #F0F0F0; display:flex; flex-wrap:norwap; }
    .breadcrumb { width: 100%; background:none; margin-bottom:0; padding:0; }
    .breadcrumb a { color: #212529; padding: $spacing-nav-top-bottom 0; display:inline-block; }
    .breadcrumb-item + .breadcrumb-item::before { content:'>'; font-size:12px; position:relative; top:-2px; }
    .bu-nav-top > a:first-child, .bu-nav-top > a:last-child { padding: $spacing-nav-top-bottom 16px; color: #7C7C7C; }
    .bu-nav-top > a:first-child { width: 417px; }
    .bu-nav-top > a:last-child { width: 312px; text-align:right; }
</style>