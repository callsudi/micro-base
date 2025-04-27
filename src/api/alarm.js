import apiRequest from '@/utils/request'

// 告警列表分页
export function getAlarmList(params, type) {
  return apiRequest({
    url: type === 1 ? 'api/alarm/latestAll' : '/api/alarm/history/list',
    method: 'get',
    params
  })
}

// 告警类别
export function getAlarmTypes() {
  return apiRequest({
    url: '/api/alarm/alarmTypes',
    method: 'get'
  })
}

// 最新告警
export function getAlarmLatestAll() {
  return apiRequest({
    url: 'api/alarm/latestAll',
    method: 'get'
  })
}

// 告警图表-一周统计
export function getStatisticsWeek() {
  return apiRequest({
    url: '/api/alarm/statistics/week',
    method: 'get'
  })
}

// 告警图表-车站和设备维度排名
export function getStatisticsRank(params, type) {
  return apiRequest({
    url: '/api/alarm/statistics/rank',
    method: 'get',
    params: {
      ...params,
      isHis: type === 1 ? 0 : 1
    }
  })
}

// 告警记录-导出
export function exportAlarm(params) {
  return apiRequest({
    url: '/api/alarm/export',
    method: 'post',
    params,
    responseType: 'blob'
  })
}
