import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Cocktail } from '../types/cocktail';

export const useCocktailStore = defineStore('cocktails', () => {
    const cocktails = ref<Record<string, Cocktail[]>>({});
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchCocktails = async (code: string) => {
        if (cocktails.value[code]) return;

        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
            );
            const data = await response.json();
            
            if (data.drinks) {
                cocktails.value[code] = data.drinks;
            } else {
                throw new Error('No cocktails found');
            }
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred';
        } finally {
            loading.value = false;
        }
    };

    return { cocktails, loading, error, fetchCocktails };
}); 