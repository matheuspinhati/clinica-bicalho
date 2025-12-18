import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    // Use esbuild for minification (built-in, faster than terser)
    minify: 'esbuild',
    
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
    
    // Disable source maps for production
    sourcemap: false,
    
    // Chunk size warning limit (in kBs)
    chunkSizeWarningLimit: 500,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
  },
  
  // Development server
  server: {
    port: 5173,
    strictPort: false,
    open: false,
  },
  
  // Preview server
  preview: {
    port: 4173,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
  
  // Esbuild options
  esbuild: {
    legalComments: 'none',
    drop: ['console', 'debugger'],
  },
})
