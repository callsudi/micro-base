const prefix = "/sub/"; // 微前端的前缀

export const microMap = {
  subVue: `${prefix}vue-demo`,
};

export const subApps = [
  // {
  //   name: "app-vue2", // 子应用名称，跟package.json一致
  //   entry: "//localhost:8001", // 子应用入口，本地环境下指定端口
  //   container: "#sub-container", // 挂载子应用的dom
  //   activeRule: "/app/vue3", // 路由匹配规则
  //   props: {}, // 主应用与子应用通信传值
  // },
  {
    name: "micro-vue",
    entry: "//localhost:8000",
    container: "#sub-container",
    activeRule: microMap.subVue,
    props: {},
  },
];
