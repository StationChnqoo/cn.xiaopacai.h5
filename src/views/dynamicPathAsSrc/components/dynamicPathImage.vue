<!-- 动态路径的public/图片 -->
<template>
  <div :style="props.style" @click="emits('click')">
    <img v-if="imageSrc" :style="props.style" :src="imageSrc" alt="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { watch } from 'vue'
import { ref } from 'vue'

const imageSrc = ref('')
const props = defineProps(['style', 'src'])
const emits = defineEmits(['click'])

const loadSrc = async (url: string) => {
  const response = await fetch(url) // 确保路径相对 `public/`
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const blob = await response.blob()
  imageSrc.value = URL.createObjectURL(blob)
}

watch(
  () => props.src,
  (newSrc, oldSrc) => {
    if (imageSrc.value) {
      URL.revokeObjectURL(imageSrc.value)
    }
    loadSrc(newSrc)
  }
)

onMounted(() => {
  loadSrc(props.src)
})

onBeforeUnmount(() => {
  if (imageSrc.value) {
    URL.revokeObjectURL(imageSrc.value)
  }
})
</script>
