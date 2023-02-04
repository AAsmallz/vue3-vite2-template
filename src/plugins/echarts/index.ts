// 引入vue根元素类型
import { App } from "vue";

// 引入 vue-echarts
import ECharts from "vue-echarts";
import {use} from 'echarts/core';

import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart, RadarChart, LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

import { VisualMapComponent } from 'echarts/components';
import 'echarts/lib/component/legend';

use([CanvasRenderer, BarChart, PieChart, RadarChart, GridComponent, TooltipComponent,  VisualMapComponent, LineChart ]);

export function setupEcharts(app: App) {
  app.component("VChart", ECharts);
}


