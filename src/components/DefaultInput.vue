<template>
  <div>
      <input
  </div>
</template>

<script>
export default {
    props: ["card"]
}
</script>

<style lang="scss" scoped>
    $spacing-nav-top-bottom: 20px;
    .bu-nav-top { background: #F0F0F0; display:flex; flex-wrap:norwap; }
    .breadcrumb { width: 100%; background:none; margin-bottom:0; padding:0; }
    .breadcrumb a { color: #212529; padding: $spacing-nav-top-bottom 0; display:inline-block; }
    .breadcrumb-item + .breadcrumb-item::before { content:'>'; font-size:12px; position:relative; top:-2px; }
    .bu-nav-top > a:first-child, .bu-nav-top > a:last-child { padding: $spacing-nav-top-bottom 16px; color: #7C7C7C; }
    .bu-nav-top > a:first-child { width: 312px; }
    .bu-nav-top > a:last-child { width: 312px; text-align:right; }
</style>