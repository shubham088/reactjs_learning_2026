import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base : "/reactjs_learning_2026",
  plugins: [react()],
})
