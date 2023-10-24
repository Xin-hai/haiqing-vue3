import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base 关于路径
  base: '/haiqing-vue3/',
  plugins: [vue()]
})
