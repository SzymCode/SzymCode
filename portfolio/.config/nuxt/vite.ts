export const viteConfig = {
  build: {
    chunkSizeWarningLimit: 1600,
    minify: 'terser',
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      maxParallelFileOps: 2,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'mixed-decls',
          'import',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
}
