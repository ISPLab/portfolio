<template>
    <div class="app-container">
        <nav class="navigation">
            <router-link
                v-for="code in COCKTAIL_CODES"
                :key="code"
                :to="'/' + code"
                class="nav-link"
                :class="{ active: route.params.cocktail === code }"
            >
                {{ code }}
            </router-link>
        </nav>
        <main class="main-content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { COCKTAIL_CODES } from './router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.app-container {
    max-width: 1024px;
    min-width: 360px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 30px;
}

.navigation {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 120px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    height: fit-content;
}

.nav-link {
    text-decoration: none;
    color: #333;
    text-transform: capitalize;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background-color: #e0e0e0;
}

.nav-link.active {
    color: #fff;
    background-color: #42b983;
    font-weight: bold;
}

.main-content {
    flex: 1;
    min-width: 0; /* Предотвращает переполнение flex-контейнера */
}
</style> 