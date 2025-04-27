<template>
  <div class="w-100 h-100">
    <div>header</div>
    <div class="container">
      <div class="right-container w-100 h-100">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
</script>

<style scoped>
.container {
  height: calc(100% - 60px);
  display: flex;
  overflow: hidden;
}
.right-container {
  padding: 0 20px 20px 0;
  display: flex;
  overflow: hidden;
}
</style>
