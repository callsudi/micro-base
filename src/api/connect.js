import apiRequest from '@/utils/request'

const publicConst = {
  prefixSoc: 'soc/api'
}

// sftp 上传文件
export function uploadSFTPFile(data, onUploadProgress) {
  return apiRequest({
    url: 'core/sftp/upload',
    method: 'post',
    timeout: 0,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
    data
  })
}

// rdp 获取文件
export function getFilesApi(params) {
  return apiRequest({
    url: publicConst.prefixSoc + '/FileManage/GetFiles',
    method: 'get',
    params
  })
}

// rdp 新增文件夹
export function addDirApi(params) {
  return apiRequest({
    url: publicConst.prefixSoc + '/FileManage/AddDir',
    method: 'get',
    params
  })
}

// rdp 上传文件
export function uploadFileApi(data, onUploadProgress) {
  return apiRequest({
    url: publicConst.prefixSoc + '/FileManage/Upload',
    method: 'post',
    timeout: 0,
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress,
    data
  })
}

// rdp 文件重命名
export function reNameFile(params) {
  return apiRequest({
    url: publicConst.prefixSoc + '/FileManage/ReNameFile',
    method: 'get',
    params
  })
}

// rdp 删除文件
export function deleteFile(data) {
  return apiRequest({
    url: publicConst.prefixSoc + '/FileManage/DeleteFile',
    method: 'delete',
    data
  })
}

// 历史会话查询
export function getSessions(params) {
  return apiRequest({
    url: publicConst.prefixSoc + '/terminal/Session/GetSessionsByParams',
    method: 'get',
    params
  })
}

// 历史会话下载
export function downloadSessions(params) {
  return apiRequest({
    url: publicConst.prefixSoc + '/terminal/Session/DownloadHistorySession',
    method: 'get',
    params
  })
}

export function GetAllAssets() {
  // return request({
  //   url: publicConst.prefixSoc + '/AssetAccount/GetAll',
  //   method: 'get'
  // })

  return new Promise((resolve, reject) => {
    const asset = [
      {
        Code: '116',
        Name: '222.116',
        Ips: [
          {
            Ip: '192.168.222.116',
            DeviceCode: '116'
          }
        ],
        ConnectModes: [{ Protocol: 'fts_c', Port: 9905, DeviceCode: '116' }],
        Os_Version: 'Windows'
      },
      {
        Code: '153',
        Name: '222.153',
        Ips: [
          {
            Ip: '192.168.222.153',
            DeviceCode: '153'
          },
          {
            Ip: '192.168.222.189',
            DeviceCode: '189'
          }
        ],
        ConnectModes: [{ Protocol: 'fts_c', Port: 9905, DeviceCode: '153' }],
        Os_Version: 'Windows'
      },
      {
        Code: '189',
        Name: '222.189',
        Ips: [
          {
            Ip: '192.168.222.189',
            DeviceCode: '189'
          }
        ],
        ConnectModes: [{ Protocol: 'fts_c', Port: 9905, DeviceCode: '189' }],
        Os_Version: 'Windows'
      },
      {
        Code: '197',
        Name: '222.197',
        Ips: [
          {
            Ip: '192.168.222.197',
            DeviceCode: '197'
          }
        ],
        ConnectModes: [{ Protocol: 'fts_c', Port: 9905, DeviceCode: '197' }],
        Os_Version: 'Windows'
      }
    ]
    resolve(asset)
  })
}

export function getUserPermAllAssets(userId) {
  return apiRequest({
    url: publicConst.prefixSoc + '/UserAsset/GetUserPermAllAssets/' + userId,
    method: 'get'
  })
}

// 根据 id 查询回放
export function getReplay(sessionId) {
  return apiRequest({
    url: 'core/ReplayRecorder/getReplay/',
    method: 'get',
    params: {
      sessionId
    }
  })
}

// 根据 id 查询回放和大小
export function getReplayAndSize(sessionId) {
  return apiRequest({
    url: 'core/ReplayRecorder/getReplayAndSize/',
    method: 'get',
    params: {
      sessionId
    }
  })
}

// 根据路径查询回放
export function getReplaySrc(src) {
  return apiRequest({
    url: src,
    method: 'get'
  })
}

// 根据路径查询回放
export function getMp4Replay(sessionId) {
  return apiRequest({
    url: 'core/ReplayRecorder/getMp4Replay/',
    method: 'get',
    params: {
      sessionId
    }
  })
}
