/**
 * 自动化导入路由组件routes模块，只适用于vite
 * @returns modules定义的路由组件routes
 */
export default function autoloadModuleRoutes() {
  const modules = import.meta.globEager("../modules/*.ts");

  const routes: any = [];

  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });

  return routes;
}

