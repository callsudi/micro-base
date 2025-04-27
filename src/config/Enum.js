export const MAX_SCORE = 100; // 业务逻辑中的最大分数

export const RES = {
  T: "0000", // 成功返回
}; // 后端响应值

export const MSG = {
  errTip: "操作失败，请重试",
  loadAll: "已加载全部数据",
};

export const OptionTestType = {
  exam: 0, // 考试
  practice: 1, // 练习
}; // 实操类型

export const TheoryTestType = {
  exam: 2, // 考试
  practice: 1, // 练习
}; // 理论 & 默规

export const TheorySysType = {
  theory: 1, // 理论
  defRule: 2, // 默规
};

export const PlanStatusMap = {
  0: {
    label: "未开始",
    btnClass: "default",
  },
  1: {
    label: "进行中",
    btnClass: "active",
  },
  2: {
    label: "已结束",
    btnClass: "good",
  },
};
