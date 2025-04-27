<template>
  <router-view></router-view>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { start } from "qiankun";
import { Qiankun } from "@/utils";

const router = useRouter();
const { registerApps } = Qiankun;

onMounted(() => {
  console.log("build & deploy =>", __BUILDTIME__);

  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    registerApps();
    start({
      sandbox: {
        experimentalStyleIsolation: true, // 样式隔离
      },
    });
  }
});
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
