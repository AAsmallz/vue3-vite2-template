// 导入自动加载路由模块
import autoloadModuleRoutes from "../autoload/index";

const exRoutes = autoloadModuleRoutes();

// 路由数组
export const routes = [
	// 模版
  // {
  //   path: '/',
  //   component: '',
  //   meta: { auth: false },
  // },
	...exRoutes
];
