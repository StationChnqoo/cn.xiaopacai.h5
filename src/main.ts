import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";
import { VueQueryPlugin } from "@tanstack/vue-query";
import "plyr/dist/plyr.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import VueAMap, { initAMapApiLoader } from "@vuemap/vue-amap";
// import VueAMapLoca from '@vuemap/vue-amap-loca';
// import VueAMapExtra from '@vuemap/vue-amap-extra';
import "@vuemap/vue-amap/dist/style.css";

initAMapApiLoader({
  key: "b724b90148aa514b01a39a7393da151d",
  securityJsCode: "be05d13e6d7cd345577acc79b87499d9", // 新版key需要配合安全密钥使用
  //Loca:{
  //  version: '2.0.0'
  //} // 如果需要使用loca组件库，需要加载Loca
});

import App from "./App.vue";
import router from "./router";
// 1. 引入你需要的组件
import { Button, Collapse, CollapseItem, Tab, Tabs } from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate); // 注册持久化插件

const app = createApp(App);

const vantComponents = [Button, Collapse, CollapseItem, Tab, Tabs];
vantComponents.forEach((component) => {
  app.use(component);
});
app.use(pinia);
app.use(VueQueryPlugin);
app.use(router);
app.use(naive);
app.use(VueAMap);
app.mount("#app");
