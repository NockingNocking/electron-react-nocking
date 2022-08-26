/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-26 11:26:25
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:14:58
 * @FilePath: \electron-react-nocking\src\render\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
const routes = [
  {
    path: "/",
    auth: false,
    component: lazy(() => import("../components/Layout/index")),
    children: [
      {
        path: "/Home",
        auth: false,
        component: lazy(() => import("../components/Home/index")),
      },
    ],
  },
  {
    path: "/Game",
    auth: false,
    component: lazy(() => import("../components/Game/index")),
  },
];

//根据路径获取路由
const checkAuth = (routers, path) => {
  for (const data of routers) {
    if (data.path === path) return data;
    if (data.children) {
      const res = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};
const checkRouterAuth = (path) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};

// 路由处理方式
const generateRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    );
    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));

export { Router, checkRouterAuth };
