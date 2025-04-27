import apiRequest from '@/utils/request'

export function getParams1(data) {
  return apiRequest({
    url: '/api/s/monitor/alarm/list',
    method: 'post',
    data
  })
}
