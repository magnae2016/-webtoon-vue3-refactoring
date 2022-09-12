<template>
  <div id="wrap">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { AppHeader, AppFooter },
});
</script>

<style>
@import "@/assets/comic.css";
</style>