import request from '@/utils/request';

// 总体分析-上方卡片、日历图
export function analysisTotalApi(params) {
    return request({
      url: '/api/analysis/total',
      method: 'get',
      params,
    });
}

// 总体分析-段排名
export function paragraphRankingApi(params) {
    return request({
      url: '/api/analysis/getParagraphRanking',
      method: 'get',
      params,
    });
}

// 总体分析-站排名
export function stationRankingApi(params) {
    return request({
      url: '/api/analysis/getStationRanking',
      method: 'get',
      params,
    });
}

// 字典查询排名
export function getOrgRankingApi(params) {
  return request({
    url: '/api/analysis/getOrgRanking',
    method: 'get',
    params,
  });
};

// 总体分析-学员时长排名
export function studentRankingApi(params) {
    return request({
      url: '/api/analysis/getStudentRanking',
      method: 'get',
      params,
    });
}

// 总体分析-学员练习次数排名
export function studentTCRankingApi(params) {
    return request({
      url: '/api/analysis/getStudentTCRanking',
      method: 'get',
      params,
    });
}

// 个人分析-上方卡片
export function analysisPersonalApi(params) {
    return request({
      url: '/api/analysis/personal',
      method: 'get',
      params,
    });
}

// 个人分析-训练分布图
export function stuTrainingDistributionApi(params) {
    return request({
      url: '/api/analysis/stuTrainingDistribution',
      method: 'get',
      params,
    });
}

// 个人分析-试卷使用率气泡图
export function paperUseDistributionApi(params) {
  return request({
    url: '/api/analysis/getPaperUseDistribution',
    method: 'get',
    params,
  });
}

// 查询个人训练计划
export function getTrainingPlanByUserIdApi(data) {
  return request({
    url: '/api/plan/getTrainingPlanByUserId',
    method: 'post',
    data,
  });
}

// 查询机构训练计划
export function getOrgTrainingPlanApi(data) {
  return request({
    url: '/api/trainingPlan/getOrgTrainingPlan',
    method: 'post',
    data,
  });
}

