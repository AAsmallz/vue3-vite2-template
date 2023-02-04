// 引入PluginOption类型
import { PluginOption } from 'vite';
// 导入path模块
import * as path from 'path';
// 导入vue插件
import vue from '@vitejs/plugin-vue';
// 导入vite-plugin-svg-icons插件 版本不同引入方式不同
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 导入 viteMockServe
import { viteMockServe } from "vite-plugin-mock";

// element-plus 按需引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export function createPluginsOptions() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
		vueJsx({}),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    // viteCompression({
    //   verbose: true, //控制台输出压缩结果
    //   disable: false, //是否禁止压缩
    //   threshold: 10240, //压缩大小阈值
    //   algorithm: "gzip", //压缩算法
    //   ext: ".gz", //压缩的扩展名
    // }),
    viteMockServe({
      // default
      mockPath: "mock",
			localEnabled: true
    }),
  ];
  return vitePlugins;
}
