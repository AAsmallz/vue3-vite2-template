// 导入vite配置模块
import { defineConfig } from 'vite';
// 导入path模块
import * as path from 'path';
import { config } from './config/index';

export default defineConfig({
  base: './', //开发或生产环境服务的公共基础路径
  plugins: config.createPluginsOptions(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
			'/img': './src/assets/images'
    },
  },
  build: config.createBuildOptions(),
});
