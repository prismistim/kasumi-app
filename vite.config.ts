import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'unplugin-vue-markdown/vite'
import path from 'path'
import prism from 'markdown-it-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdown({
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItUses: [
        prism
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
