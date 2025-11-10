// vite.config.js (Recommended check)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Ensures all assets are built relative to the root path (/)
  base: '/', 
  plugins: [react()],
})