<template>
  <nav class="bu-nav-top">
    <a :href="card.navigation.previous"
      ><font-awesome-icon icon="long-arrow-alt-left" />
      {{ $t("navigation.previous_card") }}</a
    >
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/overview">{{ $t("navigation.overview") }}</a>
      </li>
      <li class="breadcrumb-item">
        <a :href="'/overview_year/' + (date.year || noDate)">{{
          date.year || noDate
        }}</a>
      </li>
      <li class="breadcrumb-item">
        <a
          :href="
            '/overview_month/' +
              (date.year || noDate) +
              '/' +
              (date.month || noDate)
          "
          >{{ month }}</a
        >
      </li>
      <li class="breadcrumb-item">
        <a>{{ $t("navigation.current") }}: {{ current }}</a>
      </li>
    </ul>
    <a :href="card.navigation.next"
      >{{ $t("navigation.next_card") }}
      <font-awesome-icon icon="long-arrow-alt-right" />
    </a>
  </nav>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {
      noDate: "s.d."
    };
  },
  computed: {
    date() {
      return this.card.card.date;
    },
    month() {
      if (!this.date.month) return this.noDate;
      return new Date(2020, this.date.month - 1, 1).toLocaleString("default", {
        month: "long"
      });
    },
    current() {
      return `${this.formatTwoDigits(this.date.day)}.${this.formatTwoDigits(
        this.date.month
      )}.${this.date.year}`;
    }
  },
  methods: {
    formatTwoDigits(val) {
      if (val < 10) return "0" + val;
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
$spacing-nav-top-bottom: 20px;
.bu-nav-top {
  background: #f0f0f0;
  display: flex;
  flex-wrap: norwap;
}
.breadcrumb {
  width: 100%;
  background: none;
  margin-bottom: 0;
  padding: 0;
}
.breadcrumb a {
  color: #212529;
  padding: $spacing-nav-top-bottom 0;
  display: inline-block;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  font-size: 12px;
  position: relative;
  top: -2px;
}
.bu-nav-top > a:first-child,
.bu-nav-top > a:last-child {
  padding: $spacing-nav-top-bottom 16px;
  color: #7c7c7c;
}
.bu-nav-top > a:first-child {
  width: 417px;
}
.bu-nav-top > a:last-child {
  width: 312px;
  text-align: right;
}
</style>
