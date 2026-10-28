import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue3-autobuilds-demo/',
  plugins: [vue()],
})
