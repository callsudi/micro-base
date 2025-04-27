import apiRequest from '@/utils/request'

// 获取本地IP
export function getLocalIp() {
  return apiRequest({
    url: '/api/assetremote/getRequestIp',
    method: 'get'
  })
}

// 获取工作状态详情
export function getPlatformDetails() {
  return apiRequest({
    url: 'api/platform/center/getPlatformDetails',
    method: 'get'
  })
}

// 获取工作状态
export function getPlatformStatus() {
  return apiRequest({
    url: '/api/platform/center/getPlatformStatus',
    method: 'get'
  })
}

// 获取系统连接S版状态
export function getSConnStatus() {
  return apiRequest({
    url: '/api/center/smonitorStatus/getSConnStatus',
    method: 'get'
  })
}
