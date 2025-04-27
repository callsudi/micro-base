import apiRequest from '@/utils/request'
const token = sessionStorage.getItem('accessToken')
// 根据组获取设备
export function getGroupItems(params) {
  return apiRequest({
    url: '/api/machine/getMachinesByGroupId',
    method: 'get',
    params
  })
}

// 设备组新增
export function assetGroupAdd(data) {
  return apiRequest({
    url: '/api/machineGroup/add',
    method: 'post',
    data
  })
}

// 设备组删除
export function assetGroupDelete(data) {
  return apiRequest({
    url: '/api/machineGroup/del',
    method: 'post',
    data: data
  })
}

// 设备组修改
export function assetGroupUpdate(data) {
  return apiRequest({
    url: '/api/machineGroup/update',
    method: 'post',
    data
  })
}

// 设备组列表
export function assetGroupList(params = {}) {
  return apiRequest({
    url: '/api/assetgroup/listAll',
    method: 'get',
    params
  })
}
// 运行程序下拉
export function assetSysTypeList(data) {
  return apiRequest({
    url: '/api/paramKind/query',
    method: 'post',
    data
  })
}
// 根据组获取运行程序
export function assetQueryByGId(params) {
  return apiRequest({
    url: '/api/paramKind/queryByGId',
    method: 'get',
    params
  })
}
// 设备组列表 - 附带设备数量
export function assetGroupListWidthSize(data) {
  return apiRequest({
    url: '/api/machineGroup/query',
    method: 'post',
    data: data
  })
}

// 设备组列表 - 附带设备列表
export function assetGroupListWidthAsset(params) {
  return apiRequest({
    url: '/api/assetgroup/listAllWithAsset',
    method: 'get',
    params
  })
}

// 设备组列表 - 附带设备和目录列表
export function listAllWithAssetAndLogDir(params) {
  return apiRequest({
    url: '/api/asset/log/listAllWithAssetAndLogDir',
    method: 'get',
    params
  })
}

// 设备新增
export function assetAdd(data) {
  return apiRequest({
    url: '/api/machine/add',
    method: 'post',
    data
  })
}

// 设备删除
export function assetDelete(data) {
  return apiRequest({
    url: '/api/machine/del',
    method: 'post',
    data: data
  })
}

// 批量同步设备到车站
export function synAssetsToStation(ids) {
  return apiRequest({
    url: 'api/asset/synAssetsToStation',
    method: 'post',
    data: ids
  })
}

// 修改虚拟机
export function assetUpdate(data) {
  return apiRequest({
    url: '/api/machine/update',
    method: 'post',
    data
  })
}

// 管理员释放虚拟机，只在虚拟机管理模块调用，用于管理员强制释放虚拟机，当释放时有用户在使用，将强制下线。
export function releaseMachine(data) {
  return apiRequest({
    url: '/api/machine/releaseMachine',
    method: 'post',
    data
  })
}

// 修改虚拟机状态
export function updateStatus(data) {
  return apiRequest({
    url: '/api/machine/updateStatus',
    method: 'post',
    data
  })
}
// 根据用户编号获取设备信息
export function getMachinesByUserId(params) {
  return apiRequest({
    url: '/api/machineGroup/getMachinesByUserId',
    method: 'get',
    params
  })
}

// 虚拟机列表
export function assetList(data) {
  return apiRequest({
    url: '/api/machine/query',
    method: 'post',
    data: data
  })
}

// 目标设备列表
export function userViewList(params) {
  return apiRequest({
    url: '/api/user/queryUserInTraining',
    method: 'get',
    params
  })
}

// 文件传输设备列表
export function assetListForBastion(params) {
  return apiRequest({
    url: '/api/assetremote/listForBastion',
    method: 'get',
    params
  })
}

// 设备详情
export function assetDetail(id) {
  return apiRequest({
    url: 'api/asset/detail/' + id,
    method: 'get'
  })
}

// 设备配置IP信息
export function assetSetIps(data) {
  return apiRequest({
    url: '/api/asset/setIps',
    method: 'post',
    data
  })
}

// 设备配置采集信息
export function assetSetMonitors(data) {
  return apiRequest({
    url: '/api/asset/setMonitors',
    method: 'post',
    data
  })
}

// 采集配置SNMP-获取
export function assetSetMonitorSnmpGet(params) {
  return apiRequest({
    url: '/api/assetMonitor/snmp/get/' + params.assetId,
    method: 'get'
  })
}

// 采集配置Agent-获取
export function assetSetMonitorAgentGet(params) {
  return apiRequest({
    url: '/api/assetMonitor/agent/get/' + params.assetId,
    method: 'get'
  })
}

// 采集配置IMM-获取
export function assetSetMonitorImmGet(params) {
  return apiRequest({
    url: '/api/assetMonitor/imm/get/' + params.assetId,
    method: 'get'
  })
}

// 采集配置Ping-获取
export function assetSetMonitorPingGet(params) {
  return apiRequest({
    url: '/api/assetMonitor/ping/get/' + params.assetId,
    method: 'get'
  })
}

// 采集配置SNMP-编辑
export function snmpUpdate(data) {
  return apiRequest({
    url: '/api/assetMonitor/snmp/update',
    method: 'post',
    data
  })
}

// 采集配置Agent-编辑
export function agentUpdate(data) {
  return apiRequest({
    url: '/api/assetMonitor/agent/update',
    method: 'post',
    data
  })
}

// 采集配置IMM-编辑
export function immUpdate(data) {
  return apiRequest({
    url: '/api/assetMonitor/imm/update',
    method: 'post',
    data
  })
}

// 采集配置Ping-编辑
export function pingUpdate(data) {
  return apiRequest({
    url: '/api/assetMonitor/ping/update',
    method: 'post',
    data
  })
}

// 远程配置-修改
export function remoteConfigUpdate(data) {
  return apiRequest({
    url: '/api/assetremote/update',
    method: 'post',
    data
  })
}

// 查询设备下的日志目录列表
export function assetLogDirs(params) {
  return apiRequest({
    url: '/api/asset/log/dirs',
    method: 'get',
    params
  })
}

// 查询目录下文件列表
export function assetLogFiles(data) {
  return apiRequest({
    url: '/api/asset/log/files',
    method: 'post',
    data
  })
}

// 查询设备下的日志目录列表
export function assetLogDownload(form) {
  return apiRequest({
    url: '/api/asset/log/download',
    method: 'post',
    responseType: 'blob',
    data: form
  })
}
//日志文件一键下载
export function assetLogDownloadAll(form) {
  return apiRequest({
    url: '/api/asset/log/downloadAllInOne',
    method: 'post',
    responseType: 'blob',
    data: form,
    // headers: {
    //   'Authorization': 'Bearer ' + token,
    // }
  })
}
//日志文件一系统日志
export function assetGetHisLogList(data) {
  return apiRequest({
    url: '/api/log/query',
    method: 'post',
    data
  })
}
// 中心上传记录列表
export function transRecord(params) {
  return apiRequest({
    url: '/api/asset/log/trans-record',
    method: 'get',
    params
  })
}
// 中心上传记录重传
export function logReTrans(data) {
  return apiRequest({
    url: '/api/asset/log/retrans',
    method: 'post',
    data
  })
}

// 设备状态信息
export function assetStatus(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/assetStatus',
    method: 'get',
    params
  })
}

// 设备状态信息
export function overview(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/overview',
    method: 'get',
    params
  })
}

// 版本信息
export function getPlatformDetailsByAssetId(params) {
  return apiRequest({
    url: '/api/platform/center/getPlatformDetailsByAsset',
    method: 'get',
    params
  })
}

// 获取磁盘信息数据
export function getDisks(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getDisks',
    method: 'get',
    params
  })
}

// 获取全部进程数据
export function getProcessall(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getProcessall',
    method: 'get',
    params
  })
}

// 获取关键进程数据
export function getProcess(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getProcess',
    method: 'get',
    params
  })
}

// 获取网卡数据
export function getNetworks(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getNetworks',
    method: 'get',
    params
  })
}

// 获取端口数据
export function getPorts(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getPorts',
    method: 'get',
    params
  })
}

// 获取cpu使用率
export function cpuUsedRatio(params) {
  return apiRequest({
    url: '/api/center/metricValueHistory/cpuUsedRatio',
    method: 'get',
    params
  })
}

// 获取内存使用率
export function memoryUsedRatio(params) {
  return apiRequest({
    url: '/api/center/metricValueHistory/memoryUsedRatio',
    method: 'get',
    params
  })
}

// 获取 smart 信息
export function getSmart(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getSmart',
    method: 'get',
    params
  })
}

// 获取IO
export function networkBound(params) {
  return apiRequest({
    url: '/api/center/metricValueHistory/diskIostat',
    method: 'get',
    params
  })
}

// 查询Agent配置
export function getAgentConfig(params) {
  return apiRequest({
    // url: `/api/assetMonitor/agent/get/config/${params.assetId}`,
    url: `/api/assetMonitor/agent/get/${params.assetId}`,
    method: 'get'
  })
}

// 更新Agent配置
export function updateAgentConfig(data) {
  return apiRequest({
    // url: '/api/assetMonitor/agent/update/config',
    url: '/api/assetMonitor/agent/update',
    method: 'post',
    data
  })
}

// 查询组织结构（节点包含告警等级）
export function listAllWithWarnSeverity(params) {
  return apiRequest({
    url: '/api/assetgroup/listAllWithWarnSeverity',
    method: 'get',
    params
  })
}

// 获取首页拓扑图 svg
export function getIndexSvgByKey(key) {
  return apiRequest({
    url: `/api/sysTopo/getIndexSvgByKey?key=${key}`,
    method: 'get'
  })
}

// 查询拓扑的状态
export function getTopStatus(params) {
  return apiRequest({
    url: '/api/sysTopo/getTopStatus',
    method: 'get',
    params
  })
}

// 获取对应组织下所有设备
export function listAssetByStation(params) {
  return apiRequest({
    url: '/api/assetgroup/listAssetByStation',
    method: 'get',
    params
  })
}

// 获取tab页数据数量接口
export function getTabCountByAsset(params) {
  return apiRequest({
    url: '/api/center/assetInfomation/getTabCountByAsset',
    method: 'get',
    params
  })
}

// 拓扑图-根据组织ID查询
export function getByOrgId(params) {
  return apiRequest({
    url: '/api/sysTopo/getByOrgId',
    method: 'get',
    params
  })
}

// 加载最新配置（从远程维护机上加载）
export function getAgentLatest(params) {
  return apiRequest({
    url: '/api/assetMonitor/agent/get/latest/' + params.assetId,
    method: 'get'
  })
}

// 查询设备黑名单
export function getHideAssetlds() {
  return apiRequest({
    url: '/api/sysTopo/getHideAssetIds',
    method: 'get'
  })
}
//系统日志下载
export function systemctlDown(form){
  return apiRequest({
    url:'/api/asset/log/hisLogListExport',
    method:'post',
    responseType: 'blob',
    data: form,
  })
}


// 首页
// 获取所有车站-实训系统
export function homeStationList(data){
  return apiRequest({
    url:'/api/trainingSystem/query',
    method:'post',
    data
  })
}
// 获取车站下的虚拟机
export function stationVmList(params){
  return apiRequest({
    url:'/api/machine/getMachinesByTrainSystemId',
    method:'get',
    params
  })
}
// 切换仿真
export function changeStation(data){
  return apiRequest({
    url:'/api/machineGroup/changeStation',
    method:'post',
    data
  })
}
// 仿真登录
export function loginSimpEnv(data){
  return apiRequest({
    url:'/api/machineGroup/loginSimpEnv',
    method:'post',
    data
  })
}

// 修改虚拟机组状态
export function updateGroupStatus(data){
  return apiRequest({
    url:'/api/machineGroup/updateStatus',
    method:'post',
    data
  })
}

// 管理员释放虚拟机组
export function releaseMachineGroup(data){
  return apiRequest({
    url:'/api/machineGroup/releaseMachineGroup',
    method:'post',
    data
  })
}

// 导入虚拟机
export function assetImportData(data) {
  return apiRequest({
    url: '/api/machine/importMachine',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

// 导入虚拟机检查
export function assetImportCheck(data) {
  return apiRequest({
    url: '/api/machine/importMachineCheck',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}