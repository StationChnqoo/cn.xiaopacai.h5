<template>
  <div class="test-xg" />
</template>

<script setup lang="ts">
import Player from "xgplayer";
import HlsPlugin from "xgplayer-hls";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import "xgplayer/dist/index.min.css";

const route = useRoute();
const videoRef = ref<HTMLVideoElement | null>(null);
let player: Player | null = null;

onMounted(() => {
  if (!videoRef.value) return;
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
});

const loadVideo = (src: string) => {
  if (!videoRef.value) return;

  if (player) {
    player.destroy();
    player = null;
  }

  player = new Player({
    id: "test-xg",
    url: src,
    height: "100%",
    width: "100%",
    autoplay: true,
  });
};
</script>

<style>
.test-xg {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}
</style>
