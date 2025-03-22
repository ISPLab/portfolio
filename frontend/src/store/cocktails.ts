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
            const apiResponse = await fetch(`/api/cocktails?code=${code}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            
            if (!apiResponse.ok) {
                throw new Error(`HTTP error! status: ${apiResponse.status}`);
            }
            
            const data = await apiResponse.json();
            
            if (data.drinks) {
                cocktails.value[code] = data.drinks;
            } else {
                throw new Error('No cocktails found');
            }
        } catch (e) {
            console.error('API Error:', e);
            error.value = e instanceof Error ? e.message : 'An error occurred while fetching data';
        } finally {
            loading.value = false;
        }
    };

    return { cocktails, loading, error, fetchCocktails };
}); 