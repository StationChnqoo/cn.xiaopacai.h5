<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="保皇" />
      <van-tab title="够级" />
    </van-tabs>
    <van-collapse v-model="activeNames">
      <van-collapse-item
        v-for="item in callapseOptions"
        :key="item.name"
        :title="`${item.name}. ${item.title}`"
        :name="item.name"
      >
        <div style="white-space: pre-wrap">{{ item.content }}</div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeNames = ref(["1"]);
const active = ref(0);

const callapseOptions = [
  {
    title: "多少张牌",
    content: [
      "潍坊保皇：41张牌，去掉一张3，每人剩余40张牌",
      "疯狂保皇：31张牌，去掉一张6，每人剩余30张牌",
    ].join("\n"),
  },
  {
    title: "算牌原理",
    content: [
      "1. 进贡：相当于出牌",
      "2. 买3：相当于不进不出，因为2换3一张换一张",
      "3. 送3：送的人相当于出了一张3，被送的人相当于多了一张3",
      "4. 让牌：相当于出牌，最后当皇帝的相当于多了之前所有让牌人的张数",
      "5. 吃贡：相当于多发了N张牌，闷贡+落贡"
    ].join("\n"),
  },
  {
    title: "记牌器使用技巧",
    content: [
      "1. 记录每轮出的牌，注意别人的进贡和买3",
      "2. 注意送3和让牌，这些都会影响牌面情况",
      "3. 吃贡时要特别记录，因为会影响最终的牌数"
    ].join("\n"),
  },
].map((item, index) => ({ ...item, name: String(index + 1) }));
</script>
<style scoped></style>
