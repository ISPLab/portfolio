<template>
    <div class="cocktails-container">
        <div v-if="loading" class="cocktails-grid">
            <div v-for="n in 8" :key="n" class="skeleton-item">
                <div class="skeleton-content">
                    <div class="skeleton-info">
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text"></div>
                    </div>
                    <div class="skeleton-image-container">
                        <div class="skeleton-image"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else class="cocktails-grid">
            <div v-for="cocktail in cocktailsList" :key="cocktail.idDrink" class="cocktail-card">
                <div class="cocktail-content">
                    <div class="image-container">
                        <img 
                            :src="cocktail.strDrinkThumb" 
                            :alt="cocktail.strDrink"
                            loading="lazy"
                            class="cocktail-image"
                        />
                    </div>
                    
                    <article class="cocktail-info">
                        <h2 class="cocktail-name">{{ cocktail.strDrink }}</h2>
                        
                        <div class="cocktail-details">
                            <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
                            <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
                            <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
                        </div>

                        <div class="cocktail-instructions">
                            <h3>Instructions:</h3>
                            <p class="instructions">{{ cocktail.strInstructions }}</p>
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
                    </article>
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
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
    overflow-x: hidden;
    justify-items: center;
    justify-content: center;
}

.cocktail-card {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cocktail-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
}

.image-container {
    float: right;
    width: 300px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.cocktail-image {
    width: 100%;
    height: auto;
    display: block;
}

.cocktail-info {
    width: 100%;
    display: block;
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
.cocktail-instructions {
    margin-top: 30px;
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
    margin-top: 30px;
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

.instructions {
    text-align: justify;
    margin: 0;
    width: 100%;
}

.cocktail-ingredients {
    margin-top: 30px;
    width: 100%;
}

@media (max-width: 1200px) {
    .image-container {
        width: 250px;
    }
}

@media (max-width: 992px) {
    .image-container {
        width: 200px;
    }
}

@media (max-width: 768px) {
    .image-container {
        width: 150px;
    }
}

@media (max-width: 480px) {
    .image-container {
        width: 100px;
    }
}

@keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}

.skeleton-item {
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skeleton-content {
    display: flex;
    gap: 20px;
    justify-content: space-between;
}

.skeleton-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.skeleton-image-container {
    width: 150px;
    flex-shrink: 0;
}

.skeleton-image {
    width: 100%;
    height: 150px;
    background-color: #e0e0e0;
    border-radius: 8px;
    animation: pulse 1.5s infinite;
}

.skeleton-text {
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
}

.skeleton-text:nth-child(1) {
    width: 70%;
}

.skeleton-text:nth-child(2) {
    width: 60%;
}

.skeleton-text:nth-child(3) {
    width: 80%;
}

.skeleton-text:nth-child(4) {
    width: 65%;
}

@media (max-width: 768px) {
    .skeleton-content {
        flex-direction: column-reverse;
    }

    .skeleton-image-container {
        width: 100%;
    }

    .skeleton-image {
        height: 200px;
    }
}
</style> 