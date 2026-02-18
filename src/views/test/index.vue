<script setup lang="ts">
import { onMounted, ref } from "vue";
const text = ref(
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join("")
);

const loadDatas = async () => {};

onMounted(() => {
  loadDatas();
});
</script>

<template>
  <div class="test">
    <n-input
      v-model:value="text"
      placeholder="输入应用名称"
      :maxlength="15"
      style="width: 560px"
      show-count
    />
  </div>
</template>

<style>
.test {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
