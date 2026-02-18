import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserService from "../services/user";
import { useUserStore } from "@/stores";

const userService = new UserService();

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/testMarkdown",
      name: "testMarkdown",
      component: () => import("../views/testMarkdown/index.vue"),
    },
    {
      path: "/testLogin",
      name: "testLogin",
      component: () => import("../views/testLogin/index.vue"),
    },
    {
      path: "/testPlyr",
      name: "testPlyr",
      component: () => import("../views/testPlyr/index.vue"),
    },
    {
      path: "/testDPlayer",
      name: "testDPlayer",
      component: () => import("../views/testDPlayer/index.vue"),
    },
    {
      path: "/testXiGuaPlayer",
      name: "testXiGuaPlayer",
      component: () => import("../views/testXiGuaPlayer/index.vue"),
    },
  ],
});

export default router;
