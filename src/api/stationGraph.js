import apiRequest from '@/utils/request'

export function getStationGraph(data) {
  return apiRequest({
    url: '/api/stationGraph/list',
    method: 'post',
    data
  })
}

export function editStationGraph(data) {
  return apiRequest({
    url: '/api/stationGraph/edit',
    method: 'post',
    data
  })
}

export function getStationGraphLine() {
  return apiRequest({
    url: '/api/stationGraph/getlineinfos',
    method: 'get'
  })
}

export function getAlarmList(data) {
  return apiRequest({
    url: '/api/s/monitor/alarm/list',
    method: 'post',
    data
  })
}


export function getpalybackdDateList(params={}) {
  return apiRequest({
    url: '/api/playback/dateList',
    method: 'get',
    params
  })
}


export function getReplayBackInfo(data) {
  return apiRequest({
    url: '/api/station/graph/replayBack/info',
    method: 'post',
    data
  })
}

export function getReplayBackSwitch(data) {
  return apiRequest({
    url: '/api/station/graph/replayBack/switch',
    method: 'post',
    data
  })
}
