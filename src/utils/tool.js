import { MSG } from "@/config/Enum";
const { errTip } = MSG;

/**
 * 统一后端响应结构
 * @param {*} res => response data
 * @returns
 */
export function isOk(res) {
  const okArr = ["0000", 200]; // 响应成功状态值
  const { code, data, message = errTip } = res || {};

  const resObj = { code, data, msg: message };

  if (okArr.includes(code)) {
    return { ...resObj, ok: true };
  }

  return { ...resObj, ok: false };
}

/**
 * 多类型逻辑操作函数
 * @param {*} mapObj
 * @param {*} type
 * @returns
 */
export function onCaseMapFun(caseMap, type) {
  //   const caseMap = {
  //     tesDemo: () => {},
  //   }; // demo

  const caseMapFun = caseMap[type];
  if (caseMapFun !== void 0) {
    return caseMapFun();
  } else {
    console.error("Fun: onCaseMapFun => [type] is not find");
  }
}

/**
 * 当月的开始时间和结束时间
 * @returns Array
 */
export function getMonthStartAndEnd() {
  const now = new Date();

  // 获取当前月的第一天和最后一天，使用 UTC 时间
  const startOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1));
  const endOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth() + 1, 0));

  // 格式化为 "YYYY-MM-DD HH:MM:SS"
  const formatDate = (date, hours = 0, minutes = 0, seconds = 0) => {
    date.setUTCHours(hours, minutes, seconds, 0);
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  return [formatDate(startOfMonth, 0, 0, 0), formatDate(endOfMonth, 23, 59, 59)];
}

/**
 * 把分钟数转换为 XX天XX小时XX分钟 的格式，不足的部分补 0
 * @param {*} minutes 1500 分钟 => 01天01小时00分钟
 * @param {*} isArr Array / String
 * @returns
 */
export function getFormatMinutes(minute) {
  const minutes = Math.abs(minute);
  const day = Math.floor(minutes / (60 * 24));
  const hour = Math.floor((minutes % (60 * 24)) / 60);
  const min = minutes % 60;

  const pad = (n) => String(n).padStart(2, "0");

  const D = pad(day);
  const M = pad(hour);
  const H = pad(min);

  return { str: `${D}天${M}小时${H}分钟`, arr: [D, M, H] };
}

/**
 * 加载动态script标签
 * @param {string} dynamicScriptUrl => http://192.168.144.216:9898/web-apps/apps/api/documents/api.js
 * @param {function} cb => 脚本加载完成后执行的逻辑，例如调用全局函数
 * @returns
 */
export function loadExternalScript(dynamicScriptUrl, cb) {
  if (document.querySelector(`script[src="${dynamicScriptUrl}"]`)) {
    console.log("脚本已加载");
    cb();
    return;
  }

  const script = document.createElement("script");
  script.src = dynamicScriptUrl;
  script.async = true;

  script.onload = () => {
    console.log("脚本加载完成");
    cb();
  };

  script.onerror = () => {
    console.error("脚本加载失败");
  };

  document.body.appendChild(script);
}
