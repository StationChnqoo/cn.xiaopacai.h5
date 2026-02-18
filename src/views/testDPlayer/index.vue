<template>
  <div class="test-dplayer" ref="playerContainer" />
</template>

<script setup lang="ts">
import DPlayer from "dplayer";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Hls from "hls.js";

const route = useRoute();
const playerContainer = ref<HTMLDivElement | null>(null);
let player: DPlayer | null = null;

onMounted(() => {
  const src = route.query.src as string | undefined;
  if (src) {
    initPlayer(src);
  }
});

watch(
  () => route.query.src,
  (newSrc) => {
    const src = route.query.src as string;
    if (newSrc && player) {
      // @ts-ignore
      player.switchVideo({
        url: src,
        type: src.endsWith(".m3u8") ? "hls" : "auto",
      });
      player.play();
    }
  }
);

onUnmounted(() => {
  if (player) {
    player.destroy();
    player = null;
  }
});

const initPlayer = (src: string) => {
  if (!playerContainer.value) return;

  player = new DPlayer({
    container: playerContainer.value,
    autoplay: true,
    video: {
      url: src,
      type: src.endsWith(".m3u8") ? "hls" : "auto",
      customType: {
        hls: (video: HTMLVideoElement, player: DPlayer) => {
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
          } else {
            console.error("HLS.js is not supported.");
          }
        },
      },
    },
    theme: "#ca6924",
    contextmenu: [],
    playbackSpeed: [1, 1.5, 2],
    mutex: false,
    hotkey: false,
    volume: 1,
    preload: "auto",
    screenshot: false,
    highlight: [],
    loop: true,
  });
  // @ts-ignore
  player.controller.hide = () => {}; // 禁止隐藏Controller
  // @ts-ignore
  document.addEventListener("contextmenu", (event) => {
    // 禁用浏览器右键菜单
    event.preventDefault();
  });
};
</script>

<style>
.test-dplayer {
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .dplayer-full {
    display: none !important;
  }
  .dplayer-full-in-icon {
    display: none !important;
  }
  /** 禁止音量的SideBar，只保留是否静音 */
  .dplayer-volume-bar-wrap {
    display: none !important;
  }
  /** 点进进度条某个位置，tooltip当前的时间 */
  .dplayer-bar-time {
    display: none !important;
  }
  .dplayer-airplay,
  .dplayer-cast {
    display: none !important;
  }
  /** 右键菜单，DPlayer 作者 视频信息 */
  .dplayer-menu.dplayer-menu-show {
    display: none !important;
  }
  /* 点进进度条某个位置，左下角浮动时间 快进/快退多少秒 */
  .dplayer-notice {
    display: none !important;
  }
  /* 进度条上的圆点，默认情况下只有精度条获得焦点才显示 */
  .dplayer-controller
    .dplayer-bar-wrap
    .dplayer-bar
    .dplayer-played
    .dplayer-thumb {
    transform: scale(0) !important;
  }
}
</style>
