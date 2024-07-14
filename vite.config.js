// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  plugins: [react(), sassPlugin()],
  build: {
    outDir: 'build', // make sure this matches what Vercel is expecting
    rollupOptions: {
      // further configuration if needed
    }
  }
})
