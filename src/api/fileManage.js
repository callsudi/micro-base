import request from '@/utils/request'
import publicConst from '@/utils/public-const.js'

const timeout = '100000'

export function getFiles(param) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/GetFiles',
    method: 'get',
    params: param
  })
}

export function downloadFile(param) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/download',
    method: 'get',
    timeout: 0,
    responseType: 'blob',
    params: param
  })
}

export function uploadSFTPFile(param, onUploadProgress) {
  return request({
    url: '/core/sftp/upload',
    method: 'post',
    timeout: 0,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
    data: param
  })
}

export function uploadFile(param, onUploadProgress) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/Upload',
    method: 'post',
    timeout: 0,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
    data: param
  })
}

export function addDir(param) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/AddDir',
    method: 'get',
    params: param
  })
}

export function reNameFile(param) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/ReNameFile',
    method: 'get',
    params: param
  })
}

export function deleteFile(data) {
  return request({
    url: publicConst.prefixSoc + '/FileManage/DeleteFile',
    method: 'delete',
    data
  })
}

// agent 文件传输 获取盘符
export function getDir(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetDir',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 获取盘符下得文件
export function GetDirByFile(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetDirByFile',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 添加修改
export function CreateDir(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/CreateDir',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 重命名文件
export function EditDir(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/EditDir',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 删除文件
export function DeleteDir(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/DeleteDir',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function FileCopy(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/FileCopy',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function UpFileUserGroupAuth(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/UpFileUserGroupAuth',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 下载的机器建立连接
export function ConnectionTargetDevice(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/ConnectionTargetDevice',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 文件上传下载 （传输）
export function FileTransfer(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/FileTransfer',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function FileDownload(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/FileDownload',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function GetTransferModels(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetTransferModels',
    method: 'get',
    params: data,
    timeout: timeout
  })
}

export function IsNewVersion(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/IsNewVersion',
    method: 'get',
    params: data,
    timeout: timeout
  })
}

export function GetTransferModelHistory(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetTransferModelHistory',
    method: 'get',
    params: data,
    timeout: timeout
  })
}

// 开始传输
export function Recover(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/Recover',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function TaskLimitSpeed(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/TaskLimitSpeed',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function Stop(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/Stop',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function Susppend(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/Susppend',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function DeleteTask(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/DeleteTask',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function LimitSpeed(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/LimitSpeed',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

export function GetTransferMode(params) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetTransferMode',
    method: 'get',
    timeout: timeout,
    params
  })
}

export function UpdateTransferMode(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/UpdateTransferMode',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 轮询判断是否下载结束
export function PollingFileState(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/PollingFileState',
    method: 'post',
    data: data
  })
}

// 轮询上传下载数据列表
export function PollingFileTable(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/PollingFileState',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 查询数据表中的任务
export function GetStatueFileTransfer(params) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/GetStatueFileTransfer',
    method: 'get',
    timeout: timeout,
    params
  })
}

// 文件列表排序
export function OrderFileTrans(data) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/OrderFileTrans',
    method: 'post',
    data: data,
    timeout: timeout
  })
}

// 远程回放记录批量压缩
export function compressZip(data) {
  return request({
    url: '/core/ReplayRecorder/compressZip',
    method: 'post',
    data,
    timeout
  })
}

// 远程回放记录批量下载
export function downloadVideoZip(params) {
  return request({
    url: '/core/ReplayRecorder/downloadVideoZip',
    method: 'get',
    params,
    timeout
  })
}

// 刷新查找未完成的
export function FindNotFinishedTask (params) {
  return request({
    url: publicConst.prefixSoc + '/FileTransfer/FindNotFinishedTask',
    method: 'get',
    timeout: timeout,
    params
  })
}
