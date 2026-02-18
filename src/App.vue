<script setup lang="ts">
import { RouterView } from "vue-router";
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-message-provider>
    <nav class="app">
      <div class="router">
        <RouterView />
      </div>
    </nav>
  </n-message-provider>
</template>

<style scoped>
.app {
  display: flex;
  .nav {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .line {
    width: 1px;
    background-color: #eee;
    height: 100vh;
  }
  .router {
    flex: 1;
    flex-direction: column;
    display: flex;
    overflow-y: hidden;
  }
}
</style>
