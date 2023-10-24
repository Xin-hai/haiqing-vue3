import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base 关于路径
  // base: '/haiqing-vue3/dist/',
  // 支持TSX
  plugins: [vue(), vueJsx({
    transformOn: true,
    mergeProps: true
  })]
})
