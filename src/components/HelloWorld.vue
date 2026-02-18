<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "@/router";

interface GuideRoute {
  title: string;
  message: string;
  route: string;
}
const routes = ref<GuideRoute[]>([
  {
    route: "dynamicPathAsSrc",
    title: "测试<DynamicPathAsSrc />",
    message: "动态指定路径，加载本地图片",
  },
  {
    route: "emailSetting",
    title: "测试登录、注册、忘记密码流程",
    message: "自定义Hooks，所有逻辑委托useOP完成",
  },
  {
    route: "hasReadHTML",
    title: "测试<HTMLViewer />",
    message: "阅读完成，滑动到底，才可以点击下一步",
  },
  {
    route: "test",
    title: "什么都测 ...",
    message: "临时用",
  },
  {
    route: "testCascader",
    title: "测试<Cascader />",
    message: "naive-ui多级联动组件",
  },
  {
    route: "testUseInfiniteQuery",
    title: "测试useInfiniteQuery",
    message: "研究react-query/useInfiniteQuery在移动端的ListView的使用可行性",
  },
  {
    route: "webCapture",
    title: "研究PC iPad iPhone的截图",
    message: "研究能否实现一个网址，多端截图",
  },
]);
</script>

<template>
  <div class="hello-world">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="items">
      <n-flex vertical>
        <div v-for="(item, index) in routes" :key="index" class="item">
          <n-flex :justify="'space-between'">
            <div>{{ item.title }}</div>
            <n-button text @click="router.push({ name: item.route })">{{
              item.route
            }}</n-button>
          </n-flex>
          <div>{{ item.message }}</div>
        </div>
      </n-flex>
    </div>
  </div>
</template>

<style scoped>
.hello-world {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 361px;
  .items {
    border: 1px goldenrod solid;
    border-radius: 12px;
    padding: 12px;
    height: 61.8%;
    overflow-y: scroll;
    .item {
      border: 1px white solid;
      margin: 1px 0;
      padding: 2px 4px;
      border-radius: 12px;
      &:hover {
        border: 1px goldenrod solid;
        cursor: pointer;
      }
    }
  }
}
</style>
