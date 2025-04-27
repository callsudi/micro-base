import apiRequest from '@/utils/request'

// 总时长概览
export function totalDurationApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/duration',
    method: 'post',
    data
  })
}

// 实操演练时长排名
export function durationTopAPi(data) {
  return apiRequest({
    url: '/api/large/screen/total/duration/top',
    method: 'post',
    data
  })
}
// 理论演练时长排名
export function durTheoryTopAPi(data) {
  return apiRequest({
    url: '/api/large/screen/total/duration/theory/top',
    method: 'post',
    data
  })
}

// 实操分数排名
export function totalAverageTopApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/average/top',
    method: 'post',
    data
  })
}

// 理论分数排名
export function totalAverageTheoryApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/average/theory/top',
    method: 'post',
    data
  })
}

// 考试对比(合格率、完成人数、平均分)
export function totalCompletionAateApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/pass/rate',
    method: 'post',
    data
  })
}

// 训练计划查询
export function queryTrainingPlanApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/trainingPlan/queryTrainingPlan',
    method: 'post',
    data
  })
}

// 大屏中间部分
export function totalTopApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/top',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 练习完成率
export function completionRateApi(data) {
  return apiRequest({
    url: '/api/large/screen/total/completion/rate',
    method: 'post',
    data
  })
}


