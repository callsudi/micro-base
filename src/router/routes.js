import OutLyout from "@/layout/OutLyout.vue";
import { MicroApps } from "@/config";

const { microMap } = MicroApps;

function createSubAppPath(subAppName) {
  return `${microMap[subAppName]}/:pathMatch(.*)*`;
}

// 注意：路由的name或path修改时全局搜索一下有没有用到的地方，有的地方有对路由的名称和path做了判断
const routes = [
  {
    path: "",
    redirect: { name: "home" },
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/MainLayout/hello.vue"),
      },
      {
        // history模式需要通配所有路由，详见vue-router文档
        path: createSubAppPath("subVue"),
        name: "app-vue3",
        meta: {},
        component: OutLyout,
        // component: () => import("@/layout/OutLyout.vue"), // 懒加载的问题 待解决...
      },
    ],
  },
];

export default routes;
