import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nlsPlugin, { Languages, esbuildPluginMonacoEditorNls } from './vite-plugins/nls.js'
import zh_hans from './vite-plugins/zh.json'

const plugins = [vue()]
if (process.env.NODE_ENV !== 'development') {
  plugins.push(nlsPlugin({
    locale: Languages.zh_hans,
    localeData: zh_hans,
  }))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // 开发环境下通过esbuild插件进行汉化
        esbuildPluginMonacoEditorNls({
          locale: Languages.zh_hans,
          localeData: zh_hans,
        }),
      ],
    },
  },
})
