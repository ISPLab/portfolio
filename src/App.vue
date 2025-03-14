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
}

.navigation {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.nav-link {
    text-decoration: none;
    color: #333;
    text-transform: capitalize;
}

.nav-link.active {
    color: #42b983;
    font-weight: bold;
}

.main-content {
    width: 100%;
}
</style> 