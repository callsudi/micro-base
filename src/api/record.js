import apiRequest from '@/utils/request';

// 分页查询学员联系/考试记录
export function examListApi(data) {
  return apiRequest({
    url: '/api/exam/query',
    method: 'post',
    data,
  });
}
export function getExamStudentListApi(params) {
  return apiRequest({
    url: '/api/exam/examStudentList',
    method: 'get',
    params,
  });
}
// 分页查询考试
export function examApi(data) {
  return apiRequest({
    url: '/api/exam/list',
    method: 'post',
    data,
  });
}

// 手动完成
export function taskCompleteApi(data) {
  return apiRequest({
    url: '/api/process/task/complete',
    method: 'post',
    data,
  });
}


export function workflowApi(params) {
  return apiRequest({
    url: `/api/exam/examStudentDetailInfo`,
    method: 'get',
    params
  });
}

// 查询考试记录详情
export function workflowApi2(params) {
  return apiRequest({
    url: `/api/exam/queryById`,
    method: 'get',
    params
  });
}

// 演练记录导出列表
export function recordListExportApi(data) {
  return apiRequest({
    url: '/api/exam/excel/list',
    method: 'post',
    data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 演练记录导出详情
export function recordExportApi(data) {
  return apiRequest({
    url: '/api/exam/excel/details',
    method: 'post',
    data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


// 演练记录导出 统计分析报告
export function exportReport(data) {
  return apiRequest({
    url: '/api/exam/export/word',
    method: 'post',
    data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}