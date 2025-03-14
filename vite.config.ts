import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'vuetify': resolve(__dirname, 'node_modules/vuetify')
        }
    },
    optimizeDeps: {
        include: ['vuetify']
    },
    build: {
        rollupOptions: {
            external: [
                'vuetify/styles',
                'vuetify',
                'vuetify/components',
                'vuetify/directives'
            ],
            output: {
                globals: {
                    vuetify: 'Vuetify',
                    'vuetify/components': 'VuetifyComponents',
                    'vuetify/directives': 'VuetifyDirectives'
                }
            }
        },
        commonjsOptions: {
            transformMixedEsModules: true
        }
    },
    define: {
        'process.env': {}
    }
}); 