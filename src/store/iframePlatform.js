import { defineStore } from "pinia";
import { ref, reactive } from "vue";

/**
 * iframe postMessage通信
 */
export const userIframePlatform = defineStore("iframePlatform", {
  state: () => ({
    platformData: null,
  }),
  actions: {
    onSet(data) {
      this.platformData = data;
      console.log("Received message:", data);
    },
  },
});
