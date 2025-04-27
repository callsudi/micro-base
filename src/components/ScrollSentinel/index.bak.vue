<!-- 有bug(废弃) Loading.vue 配合element的v-infinite-scroll-->
<template>
  <div class="loading">
    <div class="scroll" ref="scrollRef" v-infinite-scroll="onScrollLoad">
      <slot />
    </div>
    <div class="slvd-loading" v-show="visible">
      <span :class="['iconfont', `icon-loading-${type}`]" :style="{ animationDuration: duration + 's', color, fontSize: size + 'px' }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["onLoad"]);

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  }, // 是否显示
  type: {
    type: String,
    default: "a",
  }, // 图标类型 a | b
  size: {
    type: Number,
    default: 16, // px，用户可以传更大的值
  },
  color: {
    type: String,
    default: "#4a7ed8",
  }, // 图标颜色
  delay: {
    type: Number,
    default: 300,
  }, // 延迟关闭（ms）
  duration: {
    type: Number,
    default: 1,
  }, // 旋转速度（秒）
});

let timer = null;

const scrollRef = ref(null);
const visible = ref(props.loading);
const offset = 2;

function onScrollLoad() {
  emit("onLoad");
}

watch(
  () => props.loading,
  (val) => {
    if (timer) clearTimeout(timer); // 清理上一个 timer

    if (val) {
      visible.value = true;
    } else {
      timer = setTimeout(() => {
        visible.value = false;
        timer = null;
        // 向上滚动父级容器，防止滚动条刚好在底部时触发不到 v-infinite-scroll
        scrollRef.value.scrollTop = Math.max(0, scrollRef.value.scrollTop - offset);
      }, props.delay);
    }
  }
);
</script>

<style scoped lang="less">
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  > .scroll {
    width: 100%;
    height: 100%;
    // flex: 1;
    overflow: auto;
  }

  > .slvd-loading {
    color: #4a7ed8;
    display: inline-block;
    animation: spin linear infinite;
    transform-origin: center;
    overflow: hidden; // 注意...

    position: absolute;
    bottom: 0; // 50%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 3;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
