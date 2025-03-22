import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    base: '/',
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        proxy: {
            '/api/cocktails': {
                target: 'https://www.thecocktaildb.com/api/json/v1/1',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => {
                    const url = new URL(path, 'http://dummy.com');
                    const searchCode = url.searchParams.get('code');
                    return `/search.php?s=${searchCode || ''}`;
                }
            },
            '/api/feedback': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
}); 