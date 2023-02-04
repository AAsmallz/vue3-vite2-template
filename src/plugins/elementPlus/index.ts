// 引入vue根元素类型
import { App } from 'vue';

// 全局引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export const setupElementPlus = (app: App) => {
  app.use(ElementPlus);
};
