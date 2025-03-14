<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="cocktails-grid">
        <div v-for="cocktail in cocktailsList" :key="cocktail.idDrink" class="cocktail-card">
            <v-img
                :src="cocktail.strDrinkThumb"
                :alt="cocktail.strDrink"
                class="cocktail-image"
                :aspect-ratio="16/9"
                cover
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <h2>{{ cocktail.strDrink }}</h2>
            <p>{{ cocktail.strInstructions }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCocktailStore } from '../store/cocktails';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useCocktailStore();
const { cocktails, loading, error } = storeToRefs(store);

const cocktailCode = computed(() => route.params.cocktail as string);
const cocktailsList = computed(() => cocktails.value[cocktailCode.value] || []);

const fetchData = () => {
    store.fetchCocktails(cocktailCode.value);
};

onMounted(fetchData);
watch(cocktailCode, fetchData);
</script>

<style scoped>
.cocktails-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.cocktail-card {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.cocktail-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
}
</style> 