<template>
  <div class="test-plyr">
    <video ref="videoRef" controls crossorigin="anonymous" playsinline />
  </div>
</template>

<script setup lang="ts">
import Hls from "hls.js";
import Plyr from "plyr";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const videoRef = ref<HTMLVideoElement | null>(null);
let player: Plyr | null = null;
let hls: Hls | null = null;

onMounted(() => {
  if (!videoRef.value) return;
  player = new Plyr(videoRef.value, {
    autoplay: true,
    hideControls: false,
    displayDuration: true,
    storage: { enabled: false },
    disableContextMenu: false,
    // ratio: '360:270',
    settings: ["captions", "quality", "speed"],
    controls: [
      "play", // 播放按钮
      "progress", // 进度条
      "current-time", // 当前时间
      "mute", // 静音
      // "volume", // 音量
      // "captions", // 字幕
      "settings",
    ],
    speed: {
      selected: 1, // 默认倍速
      options: [1.5, 2, 1], // 只显示 1x 和 1.5x
    },
    i18n: {
      normal: "默认",
      speed: "播放速度",
    },
  });
  const src = route.query.src as string | undefined;
  if (src) {
    loadVideo(src);
  }
});

watch(
  () => route.query.src,
  (newSrc) => {
    if (newSrc) {
      loadVideo(newSrc as string);
    }
  }
);

onUnmounted(() => {
  if (player) {
    player.destroy();
    player = null;
  }
  if (hls) {
    hls.destroy();
    hls = null;
  }
});

const loadVideo = (src: string) => {
  if (!videoRef.value) return;

  // 判断是否为 HLS（m3u8）
  if (src.endsWith(".m3u8")) {
    if (Hls.isSupported()) {
      if (hls) {
        hls.destroy();
      }
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.value);
    } else if (videoRef.value.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari 原生支持 HLS
      videoRef.value.src = src;
    } else {
      alert("HLS.js 不支持当前浏览器");
    }
  } else {
    // 普通视频格式（MP4）
    videoRef.value.src = src;
  }
  videoRef.value.load();
};
</script>

<style>
.test-plyr {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}

.test-plyr video {
  width: 100%;
  height: 100%;
  background: black;
}

.plyr__control[data-plyr="play"]:hover {
  background: transparent !important;
  box-shadow: none !important;
}
</style>
