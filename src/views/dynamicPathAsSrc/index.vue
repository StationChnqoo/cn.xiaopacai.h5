<script setup lang="ts">
import { ref } from "vue";
import DynamicPathImage from "./components/dynamicPathImage.vue";
const src = ref("");
</script>

<template>
  <div class="dynamic-path-as-src">
    <n-flex vertical :align="'center'">
      <DynamicPathImage :src="src" style="width: 198px" @click="() => {}" />
      <div>Path: {{ src }}</div>
      <n-flex>
        <n-space
          ><n-button
            v-for="(item, index) in [1, 2, 3]"
            :key="index"
            @click="src = `/images/Alipay0${item}.jpg`"
            >第{{ index + 1 }}张图片</n-button
          ></n-space
        >
      </n-flex>
    </n-flex>
  </div>
</template>

<style>
.dynamic-path-as-src {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  .mobile {
  }
}
</style>
