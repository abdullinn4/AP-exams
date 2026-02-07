import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // @ = путь к src/
        },
    },
    assetsInclude: ['**/*.md'],
    server: {
        port: 3000, // Запуск на порту 3000
        host: '127.0.0.1',
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Проксируем API на бэкенд
                changeOrigin: true,
            },
        },
    },
})