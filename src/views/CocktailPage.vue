<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="cocktails-grid">
        <div v-for="cocktail in cocktailsList" :key="cocktail.idDrink" class="cocktail-card">
            <div class="cocktail-content">
                <div class="cocktail-info">
                    <h2 class="cocktail-name">{{ cocktail.strDrink }}</h2>
                    
                    <div class="cocktail-details">
                        <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
                        <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
                        <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
                    </div>

                    <div class="cocktail-instructions">
                        <h3>Instructions:</h3>
                        <p>{{ cocktail.strInstructions }}</p>
                    </div>

                    <div class="cocktail-ingredients">
                        <h3>List of ingredients:</h3>
                        <div class="ingredients-list">
                            <div v-for="i in 15" :key="i" class="ingredient-item">
                                <template v-if="cocktail[`strIngredient${i}`]">
                                    <span class="measure">{{ cocktail[`strMeasure${i}`] }}</span>
                                    <span class="ingredient">{{ cocktail[`strIngredient${i}`] }}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img 
                        :src="cocktail.strDrinkThumb"
                        :alt="cocktail.strDrink"
                        loading="lazy"
                        class="cocktail-image"
                    />
                </div>
            </div>
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
    grid-template-columns: 1fr;
    gap: 30px;
}

.cocktail-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
}

.cocktail-content {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 30px;
}

.cocktail-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cocktail-name {
    margin: 0;
    font-size: 24px;
    color: #2c3e50;
}

.cocktail-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.cocktail-details p {
    margin: 0;
}

.cocktail-instructions h3,
.cocktail-ingredients h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #2c3e50;
}

.ingredients-list {
    display: grid;
    gap: 8px;
}

.ingredient-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 10px;
}

.measure {
    color: #666;
}

.ingredient {
    color: #2c3e50;
}

.cocktail-image {
    max-width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    .cocktail-content {
        grid-template-columns: 1fr;
    }
    
    .cocktail-image {
        order: -1;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }

    .ingredient-item {
        grid-template-columns: 80px 1fr;
    }
}
</style> 