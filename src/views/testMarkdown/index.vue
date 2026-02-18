<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import katexExtension from "marked-katex-extension";

marked.use(katexExtension());

const route = useRoute();
const htmlContent = ref("");
const objectUrl = ref("");

const loadMarkdown = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const blob = await response.blob();
  
  // 释放旧 URL
  if (objectUrl.value) {
    URL.revokeObjectURL(objectUrl.value);
  }
  
  objectUrl.value = URL.createObjectURL(blob);
  
  const text = await blob.text();
  htmlContent.value = await marked(text);
};

onMounted(() => {
  const src = route.query.src as string;
  if (src) {
    loadMarkdown(src);
  }
});

onBeforeUnmount(() => {
  if (objectUrl.value) {
    URL.revokeObjectURL(objectUrl.value);
  }
});
</script>

<template>
  <div v-html="htmlContent" class="markdown-content"></div>
</template>

<style>
.markdown-content {
  padding: 0 12px;
  line-height: 1.6;
  font-size: 14px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 1.4;
}
.markdown-content h1 {
  font-size: 22px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 12px;
}
.markdown-content h2 {
  font-size: 18px;
}
.markdown-content h3 {
  font-size: 16px;
}
.markdown-content p {
  margin-bottom: 16px;
  text-align: justify;
}
.markdown-content ul,
.markdown-content ol {
  margin-bottom: 16px;
  padding-left: 20px;
}
.markdown-content li {
  margin-bottom: 8px;
}
.markdown-content a {
  color: #1890ff;
  text-decoration: none;
}
.markdown-content code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
.markdown-content pre {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 16px;
  font-size: 13px;
}
.markdown-content pre code {
  background: transparent;
  padding: 0;
}
.markdown-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px 0;
}
.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  display: block;
  overflow-x: auto;
}
.markdown-content th,
.markdown-content td {
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  text-align: left;
}
.markdown-content th {
  background: #fafafa;
  font-weight: 500;
}
.markdown-content blockquote {
  border-left: 4px solid #1890ff;
  padding: 8px 16px;
  margin: 16px 0;
  background: #f0f7ff;
  color: #555;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .markdown-content {
    font-size: 14px;
  }
  .markdown-content h1 {
    font-size: 20px;
  }
  .markdown-content h2 {
    font-size: 17px;
  }
  .markdown-content h3 {
    font-size: 15px;
  }
  .markdown-content pre {
    padding: 10px;
    font-size: 13px;
  }
  .markdown-content code {
    font-size: 13px;
  }
  .markdown-content th,
  .markdown-content td {
    padding: 6px 8px;
    font-size: 13px;
  }
}
</style>
