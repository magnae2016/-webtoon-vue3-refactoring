<template>
  <div id="wrap">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { AppHeader },
});
</script>

<style>
@import "@/assets/comic.css";
</style>