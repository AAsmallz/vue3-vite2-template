// 导入创建Vue对象的API
import { createApp } from 'vue';
// 引入注册图标的脚本
import 'virtual:svg-icons-register';
// 导入使用外部的svg组件
import elementIcons from '@/utils/svgIcon';
// 从一个单文件组件中导入根组件
import App from './App.vue';
// 导入axios
import './utils/http';
// 导入路由对象
import { setupRouter } from './router';
// 导入pinia对象
import { createPinia } from 'pinia';
// 导入全局公共样式
import '@/styles/common.scss';
// 导入三方插件
import { setipPlugins } from '@/plugins/index';

// 全局引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 全局配置国际化, element-plus中文化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

async function setupApp() {
  // vue3创建vue应用实例
  const app = createApp(App);
  // 挂载pinia状态
  app.use(createPinia());
  // 挂载三方插件
  setipPlugins(app);
  // 挂载svg图片加载组件
	app.use(elementIcons);
  // 挂载路由
  await setupRouter(app);
  // 路由准备就绪后挂载路由
  app.mount('#app');
}

setupApp();
