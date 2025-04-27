<!-- 滚动到底部加载下一页 -->

<template>
  <div class="scrollCon">
    <div class="scroll" ref="scrollRef">
      <slot />
      <div class="slvd-loading" ref="sentinelRef" :style="{ marginTop: loadGap + 'px' }">
        <span
          :class="['iconfont', `icon-loading-${type}`]"
          :style="{ animationDuration: duration + 's', color, fontSize: size + 'px', visibility: visible ? 'visible' : 'hidden' }"
        ></span>
      </div>
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
  once: {
    type: Boolean,
    default: false, // 只触发一次, 默认会无限触发
  },
});

let timer = null;
let loadGap = 6; // loading图标距离滚动区域(scrollRef)的空隙

const scrollRef = ref(null);
const sentinelRef = ref(null); // 哨位
const visible = ref(props.loading);

let observer;

let loadingLock = false; // chatgpt推荐 => 正在加载时快速滚动，可能多次触发, 引入一个锁

onMounted(() => {
  const observerOptions = {
    root: scrollRef.value, // 指定监听容器
    rootMargin: "0px", // 不提前触发
    threshold: 0.1, // 哨兵 10% 可见时触发
  };

  observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loadingLock && !visible.value) {
        console.log("load......", visible.value);
        loadingLock = true;
        emit("onLoad");

        if (props.once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  observer.observe(sentinelRef.value);
});

onUnmounted(() => {
  observer?.disconnect();

  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
});

watch(
  () => props.loading,
  (val) => {
    if (val) {
      visible.value = true;

      // 清除之前的定时器
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    } else {
      // 延迟隐藏
      timer = setTimeout(() => {
        visible.value = false;
        loadingLock = false; // 允许下一次触发
        timer = null;

        // 向上滚动父级容器，防止滚动条刚好在底部时触发不到 v-infinite-scroll
        scrollRef.value.scrollTop = Math.max(0, scrollRef.value.scrollTop - props.size - loadGap);
      }, props.delay);
    }
  }
);
</script>

<style scoped lang="less">
.scrollCon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .scroll {
    width: 100%;
    height: 100%;
    // flex: 1;
    overflow: auto;

    > .slvd-loading {
      width: 100%;
      overflow: hidden;
      // margin-top: 6px;
      > span {
        color: #4a7ed8;
        display: inline-block;
        animation: spin linear infinite;
        transform-origin: center;
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
