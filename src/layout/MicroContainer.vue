<template>
  <div id="sub-container"></div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import { start } from "qiankun";
import { Qiankun } from "@/utils";
const { registerApps } = Qiankun;

onMounted(async () => {
  await nextTick(); // 保证dom渲染完成
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    registerApps();
    start({
      prefetch: true, // 关闭预加载，防止提前请求
      // prefetch: false, // 关闭预加载，防止提前请求
      sandbox: {
        experimentalStyleIsolation: true,
      },
    });
  }
});
</script>

<style lang="less" scoped>
#sub-container {
  width: 100%;
  background-color: #ccc;
}
</style>
