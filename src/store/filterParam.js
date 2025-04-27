import { defineStore } from "pinia";
import { ref, reactive } from "vue";

const initState = {
  drillRecord: {
    userName: "", // 学员名称
    timeRange: [], // 时间范围
    pageNo: 1,
    pageSize: 20,
    nickName: null,
    maxScore: null,
    minScore: null,
    scoreType: "", // 得分范围
    IsPractice: null, // 0-考试 1-练习
  }, // 演练记录
};

/**
 * 缓存过滤条件
 */
export const useFilterParamStore = defineStore("filterParam", {
  state: () => ({
    ...JSON.parse(JSON.stringify(initState)),
  }),
  actions: {
    onReset(key) {
      this[key] = Object.assign(
        this[key],
        JSON.parse(JSON.stringify(initState[key]))
      );
    },
  },
});
