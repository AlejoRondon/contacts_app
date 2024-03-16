import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Ensure font files and CSS files are not excluded from being served
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-free/css/all.css'],
  },
  // server: {
  //   host: '127.0.0.1',
  //   port: 3000,
  // },
})
