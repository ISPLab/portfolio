import { createRouter, createWebHistory } from 'vue-router';
import CocktailPage from '../views/CocktailPage.vue';
import CV from '../views/CV.vue';
import Portfolio from '../views/Portfolio.vue';
import About from '../views/About.vue';

export const COCKTAIL_CODES = ['margarita', 'mojito', 'martini'];

const routes = [
    {
        path: '/',
        redirect: '/portfolio'
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/cv',
        name: 'cv',
        component: CV
    },
    {
        path: '/cocktails',
        name: 'cocktails',
        component: CocktailPage
    },
    {
        path: '/:cocktail',
        name: 'cocktail',
        component: CocktailPage,
        beforeEnter: (to, from, next) => {
            if (COCKTAIL_CODES.includes(to.params.cocktail as string)) {
                next();
            } else {
                next('/cocktails');
            }
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About
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