// 引入vue根元素类型
import { App } from "vue";
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 注册所有 @element-plus/icons-vue 图标
export default {
  install: (app: App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
