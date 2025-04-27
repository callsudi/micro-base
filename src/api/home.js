import apiRequest from "@/utils/request";

// 首页区域一->卡片数据
export function areaOneApi(params) {
  return apiRequest({
    url: "/api/analysis/areaOne",
    method: "get",
    params,
  });
}

// 获取统计分析（首页区域二）指标数据
export function indicatorsApi(params) {
  return apiRequest({
    url: "/api/analysis/getIndicators",
    method: "get",
    params,
  });
}

// 获取统计分析（首页区域二）数据
export function areaTwoApi(params) {
  return apiRequest({
    url: "/api/analysis/areaTwo",
    method: "get",
    params,
  });
}

// 首页区域三->排名数据
export function queryRankingApi(params) {
  return apiRequest({
    url: "/api/analysis/queryRanking",
    method: "get",
    params,
  });
}
// 首页区域四->分布图数据
export function trainDistriApi(params) {
  return apiRequest({
    url: "/api/analysis/getTrainingContentDistribution",
    method: "get",
    params,
  });
}

// 首页区域五、六->错误块分析
export function queryBlockStatisticApi(params) {
  return apiRequest({
    url: "/api/analysis/queryBlockStatistic",
    method: "get",
    params,
  });
}

// ==============================

// 首页(teacher) 实操题目排名 => 平均分排名
export function getAvgRank(data) {
  return apiRequest({
    url: "/api/home/teacher/avg/ranking",
    method: "post",
    data,
  });
}

// 首页(teacher) 实操题目排名 => 错误模块排名
export function getErrRank(data) {
  return apiRequest({
    url: "/api/home/teacher/error/block/ranking",
    method: "post",
    data,
  });
}

// 首页(teacher) 总体概览 => 中间部分
export function getOverall(data) {
  return apiRequest({
    url: "/api/home/teacher/overall",
    method: "post",
    data,
  });
}

// 首页(teacher) 公告栏 => 右一
export function getNotice(data) {
  return apiRequest({
    url: "/api/notice/queryNotice",
    method: "post",
    data,
  });
}

// 首页(student) 公告栏 => 右一
export function getStuNotice(data) {
  return apiRequest({
    url: "/api/notice/queryNoticeEffective",
    method: "post",
    data,
  });
}

// 首页(teacher) 公告栏 => 右一 上传附件
export function uploadNoticeFile(data) {
  return apiRequest({
    url: "/api/notice/addFile",
    method: "post",
    data,
  });
}

// 首页(teacher) 公告栏 => 右一 新增
export function addNotice(data) {
  return apiRequest({
    url: "/api/notice/addNotice",
    method: "post",
    data,
  });
}

// 首页(teacher) 公告栏 => 右一 修改
export function uptNotice(data) {
  return apiRequest({
    url: "/api/notice/updateNotice",
    method: "post",
    data,
  });
}

// 首页(teacher | student) 人员综合排名 => 左一
export function getScoreRank(data) {
  return apiRequest({
    url: "/api/home/teacher/comprehensiveScoreRanking",
    method: "post",
    data,
  });
}

// 首页(teacher | student) 小组排名 => 左二
export function getGroupRank(data) {
  return apiRequest({
    url: "/api/home/total/group/ranking",
    method: "post",
    data,
  });
}

// 首页(student) 实操雷达图
export function getPractScore(data) {
  return apiRequest({
    url: "/api/home/student/radar/chart/operation",
    method: "post",
    data,
  });
}

// 首页(student) 理论和默规 雷达图
export function getTheoAndDefRuleScore(data) {
  return apiRequest({
    url: "/api/home/student/radar/chart/theory",
    method: "post",
    data,
  });
}

// 首页(student) 个人学习时长、次数
export function getParcticeTime(data) {
  return apiRequest({
    url: "/api/home/student/personalTrainingInfo",
    method: "post",
    data,
  });
}

// 首页(student) 左三 理论计划 & 默规计划
export function getTheoAnDefRulePlan(params) {
  return apiRequest({
    url: "/th_api/api/theory/share/student/exam/todo/page",
    method: "get",
    params,
  });
}

// 首页(student) 右二 理论练习历史
export function getTheoHistoryPlan(params) {
  return apiRequest({
    url: "/th_api/api/theory/share/student/user/exam/page",
    method: "get",
    params,
  });
}

// 首页(student) 右三 考核标签
export function getCheckTag(params) {
  return apiRequest({
    url: "/th_api/api/theory/share/teacher/statistics/tag",
    method: "get",
    params,
  });
}

// 首页(me) 左二 数据分析结果
export function getPersonalResult(data) {
  return apiRequest({
    url: "/api/home/student/personalAnalysisInfo",
    method: "post",
    data,
  });
}

// 首页(me) 左三 个人趋势
export function getPersonalTrendInfo(data) {
  return apiRequest({
    url: "/api/home/student/personalAnalysisResList",
    method: "post",
    data,
  });
}
