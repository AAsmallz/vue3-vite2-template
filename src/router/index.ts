// 引入vue根元素类型
import { App } from "vue";
// 导入创建路由的API
import { createRouter, createWebHashHistory } from 'vue-router';
// 导入路由组件配置
import { routes } from './routes/index';
// 导入路由守卫配置
import { createRouterGuard } from './guard/index';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes]
});

export async function setupRouter(app: App) {
	app.use(router);
	createRouterGuard(router);
	await router.isReady();
}

export * from './routes';


