import apiRequest from '@/utils/request';

// 考试计划查询
export function examQueryApi(data) {
  return apiRequest({
    url: '/api/plan/examQuery',
    method: 'post',
    data,
  })
}
// 考试计划查询
export function examQueryByIdApi(data) {
  return apiRequest({
    url: '/api/plan/examQueryById',
    method: 'post',
    data,
  })
}

// 训练计划查询
export function queryApi(data) {
  return apiRequest({
    url: '/api/plan/query',
    method: 'post',
    data
  })
}

export function getUserPlanById(params) {
  return apiRequest({
    url: '/api/plan/exam/user',
    method: 'get',
    params
  })
}

// 训练计划详情
export function queryByIdApi(data) {
  return apiRequest({
    url: '/api/plan/queryById',
    method: 'post',
    data
  })
}

// 重置
export function resetExamByIdApi(data) {
  return apiRequest({
    url: '/api/plan/resetExamById',
    method: 'post',
    data
  })
}

// 删除训练计划
export function deletePlanApi(params) {
  return apiRequest({
    url: '/api/plan/delete',
    method: 'get',
    params
  })
}

// 新增计划
export function insertPlanApi(data) {
  return apiRequest({
    url: '/api/plan/insert',
    method: 'post',
    data
  })
}

// 修改计划
export function updatePlanApi(data) {
  return apiRequest({
    url: '/api/plan/update',
    method: 'post',
    data
  })
}


// 用户树结构
export function userTreeApi(params) {
  return apiRequest({
    url: '/api/dept/user/tree',
    method: 'get',
    params
  })
}


// 获取试题类型
export function paperTypeQueryApi(params) {
  return apiRequest({
    url: '/api/plan/paper/query',
    method: 'get',
    params
  })
}

// 导出训练与考试计划
export function planExcelApi(params) {
  return apiRequest({
    url: '/api/plan/excel',
    method: 'get',
    params,
    responseType: 'blob', // 表明返回服务器返回的数据类型
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

// 考试和计划详情
export function planDetailsApi(params) {
  return apiRequest({
    url: '/api/plan/plan/details',
    method: 'get',
    params
  })
}
