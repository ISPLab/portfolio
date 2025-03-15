import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
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
            '/api': {
                target: 'https://www.thecocktaildb.com/api/json/v1/1',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => {
                    // Преобразуем /api/cocktails?code=margarita в /search.php?s=margarita
                    const url = new URL(path, 'http://dummy.com');
                    const searchCode = url.searchParams.get('code');
                    return `/search.php?s=${searchCode}`;
                }
            }
        }
    }
}); 