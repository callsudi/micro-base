import axios from "axios";
import { ElMessage } from "element-plus";

const BaseUrl = "";

const apiRequest = axios.create({
  baseURL: BaseUrl,
  timeout: 600000,
});

apiRequest.interceptors.request.use(
  (config) => {
    // config.headers['Content-Type'] = 'application/json'
    const token = localStorage.getItem("accessToken");
    // if (token) config.headers.Authorization = 'Bearer_' + token;
    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiRequest.interceptors.response.use(
  (res) => {
    if (res.request.responseType === "blob") {
      return Promise.resolve(res);
    }
    try {
      if (res.status === 200 || res.status === 201) {
        if (res.data.code === "0004") {
          return Promise.resolve(res.data);
        }
        if (res.headers["content-disposition"]) {
          return Promise.resolve(res);
        } else {
          return Promise.resolve(res.data);
        }
      } else if (res.status === 401) {
      } else {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  },
  (error) => {
    if (error.response && error.response.status && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      return;
    }

    if (error.response && error.response.status && error.response.status === 403) {
      ElMessage.error("权限不足！");
      return;
    }

    if (error.response && error.response.data) {
      if ((error.config.method === "get" && error.config.params) || (error.config.method !== "get" && error.config.data)) {
        ElMessage({
          message: error.response.data.msg ? error.response.data.msg : error.message,
          showClose: true,
          grouping: true,
          type: "error",
          duration: 2000,
        });
      }
    }

    return Promise.reject(error);
  }
);

export default apiRequest;
