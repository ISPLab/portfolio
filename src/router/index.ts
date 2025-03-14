import { createRouter, createWebHistory } from 'vue-router';

const COCKTAIL_CODES = ['margarita', 'mojito', 'a1', 'kir'];

const routes = [
    {
        path: '/',
        redirect: `/${COCKTAIL_CODES[0]}`
    },
    {
        path: '/:cocktail',
        name: 'CocktailPage',
        component: () => import('../views/CocktailPage.vue'),
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

export { COCKTAIL_CODES }; 