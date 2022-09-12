<template>
  <div id="container">
    <div id="content" class="webtoon">
      <router-view></router-view>
    </div>
    <app-aside></app-aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAside from "@/components/layout/AppAside/index.vue";

export default defineComponent({
    setup() {
        return {};
    },
    components: { AppAside }
});
</script>

<style scoped>
</style>