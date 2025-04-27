import apiRequest from '@/utils/request'

// 用户登录
export function loginApi(data) {
  return apiRequest({
    url: '/api/user/login',
    method: 'post',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  })
}

// 获取当前登录用户信息
export function getCurrentUser() {
  return apiRequest({
    url: '/api/user/getCurrentUser',
    method: 'post'
  })
}
// 用户登出
export function logoutApi() {
  return apiRequest({
    url: '/api/user/logout',
    method: 'post'
  })
}
// 用户菜单
export function menuListApi(params) {
  return apiRequest({
    url: '/api/userFunction/tree',
    method: 'get',
    params
  })
}
// 添加角色
export function roleAdd(data) {
  return apiRequest({
    url: '/api/role/add',
    method: 'post',
    data
  })
}

// 删除角色
export function roleDelete(params) {
  return apiRequest({
    url: '/api/role/del',
    method: 'get',
    params
  })
}

// 修改角色
export function roleUpdate(data) {
  return apiRequest({
    url: '/api/role/update',
    method: 'post',
    data
  })
}

// 角色列表
export function roleList(params) {
  return apiRequest({
    url: '/api/role/queryAll',
    method: 'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params
  })
}

// 所有角色
export function roleAll() {
  return apiRequest({
    url: '/authority/role/all',
    method: 'get'
  })
}

// 添加用户
export function userAdd(data) {
  return apiRequest({
    url: '/api/user/add',
    method: 'post',
    data
  })
}

// 删除用户
export function userDelete(params) {
  return apiRequest({
    url: '/api/user/del',
    method: 'get',
    params
  })
}

// 修改用户
export function userUpdate(data) {
  return apiRequest({
    url: '/api/user/update',
    method: 'post',
    data
  })
}

// 修改用户密码
export function userUpdatePassword(data) {
  return apiRequest({
    url: '/api/user/updatePassword',
    method: 'post',
    data
  })
}

// 用户列表
export function userList(data) {
  return apiRequest({
    url: '/api/user/query',
    method: 'post',
    data
  })
}

// 添加机构
export function deptAdd(data) {
  return apiRequest({
    url: '/api/dept/add',
    method: 'post',
    data
  })
}
export function newDeptAdd(data) {
  return apiRequest({
    url: '/api/dept/addOfCTCS',
    method: 'post',
    data
  })
}

export function addDeptTree(data) {
  return apiRequest({
    url: '/api/paragraph/insert',
    method: 'post',
    data
  })
}

// 删除机构
export function deptDelete(params) {
  return apiRequest({
    url: '/api/dept/del',
    method: 'get',
    params
  })
}
export function newDeptDelete(data) {
  return apiRequest({
    url: '/api/dept/delOfCTCS',
    method: 'post',
    data
  })
}

export function delDeptTree(params) {
  return apiRequest({
    url: '/api/paragraph/delete',
    method: 'get',
    params
  })
}

// 修改机构
export function deptUpdate(data) {
  return apiRequest({
    url: '/api/dept/update',
    method: 'post',
    data
  })
}
export function newDeptUpdate(data) {
  return apiRequest({
    url: '/api/dept/updateOfCTCS',
    method: 'post',
    data
  })
}
export function newDeptUpdate2(data) {
  return apiRequest({
    url: '/api/dept/updateOfCTCS2',
    method: 'post',
    data
  })
}

export function uptDeptTree(data) {
  return apiRequest({
    url: '/api/paragraph/update',
    method: 'post',
    data
  })
}

// 机构列表
export function deptList(params) {
  return apiRequest({
    url: '/api/dept/tree',
    method: 'get',
    params
  })
}
export function newDeptList(data) {
  return apiRequest({
    url: '/api/dept/treeOfCTCS',
    method: 'post',
    data
  })
}

export function getDeptTree() {
  return apiRequest({
    url: '/api/paragraph/tree',
    method: 'get',
  })
}

// 所有 api
export function apiAll() {
  return apiRequest({
    url: '/authority/setting/allApiInfo',
    method: 'get'
  })
}

// 根据类型获取字典列表
export function dictByCode(data) {
  return apiRequest({
    url: '/authority/dict/listByCode',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  })
}

// 添加字典
export function dictAdd(data) {
  return apiRequest({
    url: '/api/trainingSystem/add',
    method: 'post',
    data
  })
}

// 删除字典
export function dictDelete(params) {
  return apiRequest({
    url: '/api/trainingSystem/del',
    method: 'get',
    params
  })
}

// 修改字典
export function dictUpdate(data) {
  return apiRequest({
    url: '/api/trainingSystem/update',
    method: 'post',
    data
  })
}

// 角色授权
export function permissionGrant(data) {
  return apiRequest({
    url: '/api/role/grant',
    method: 'post',
    data
  })
}

// 角色下权限
export function getRolePermission(params) {
  return apiRequest({
    url: '/api/role/getFunByRoleId',
    method: 'get',
    params
  })
}

// 仿真菜单列表
export function menuGrantApi(params) {
  return apiRequest({
    url: '/api/ctcsFunction/tree',
    method: 'get',
    params
  })
}
// 仿真菜单权限设置
export function roleAddMenusApi(data) {
  return apiRequest({
    url: '/api/role/grantCTCS',
    method: 'post',
    data
  })
}
// 导入用户

export function userImportApi(data) {
  return apiRequest({
    url: '/api/user/importUsers',
    method: 'post',
    data
  })
}


// 机构管理 => 组织类型
export function getDictByOrg(data) {
  return apiRequest({
    url: '/api/paramKind/queryByPValue',
    method: 'post',
    data
  })
}