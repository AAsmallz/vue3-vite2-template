import { BuildOptions } from 'vite';
export function createBuildOptions(): BuildOptions {
  return {
    target: 'es2015',
    cssTarget: 'chrome80',
    // 最新vite3, 默认为esbuild，如果需要配置 terserOptions 则需要给terser
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除 console.log 和 debugger 调试的代码
        drop_console: true,
        drop_debugger: true,
      },
    },
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  };
}
