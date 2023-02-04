// 引入vue根元素类型
import { App } from "vue";
// 引入echarts插件
import {setupEcharts} from './echarts/index';
// 引入elementPlus插件
import {setupElementPlus} from './elementPlus/index';

export function setipPlugins(app: App) {
	setupElementPlus(app);
	setupEcharts(app);
}
