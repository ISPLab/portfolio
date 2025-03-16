<template>
    <div class="app-container">
        <nav class="navigation">
            <div class="nav-links">
                <router-link to="/investments" class="nav-item">Investments</router-link>
                <div class="dropdown">
                    <button class="nav-item dropdown-toggle">Projects</button>
                    <div class="dropdown-content">
                        <router-link to="/cocktails" class="dropdown-item">Cocktail Page</router-link>
                        <router-link to="/social-media" class="dropdown-item">Social Media</router-link>
                        <router-link to="/website-chat" class="dropdown-item">Website chat</router-link>
                        <router-link to="/ai-pianist" class="dropdown-item">AI Pianist</router-link>
                        <router-link to="/city-quests" class="dropdown-item">City Quests</router-link>
                        <router-link to="/lumeira-wellness" class="dropdown-item">Lumeira Wellness</router-link>
                        <router-link to="/butler-system" class="dropdown-item">Butler System</router-link>
                        <router-link to="/nuana-data" class="dropdown-item">Nuana data center</router-link>
                        <router-link to="/aurora-media" class="dropdown-item">Aurora media park</router-link>
                        <router-link to="/property-sales" class="dropdown-item">Property sales</router-link>
                    </div>
                </div>
                <router-link to="/about" class="nav-item">About</router-link>
            </div>
            <div class="language-selector">
                <select v-model="currentLanguage" class="language-select">
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
        </nav>
        <main class="main-content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentLanguage = ref('en');
</script>

<style>
/* Глобальные стили в начале */
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* Отключаем горизонтальный скролл */
}

.app-container {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 30px;
    overflow-x: hidden; /* Дополнительная защита от скролла */
    flex-direction: column;
}

.navigation {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-item {
    text-decoration: none;
    color: #2c3e50;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-item:hover {
    color: #42b983;
}

.language-select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    font-size: 16px;
    color: #2c3e50;
    cursor: pointer;
}

.language-select:hover {
    border-color: #42b983;
}

.main-content {
    flex: 1;
    min-width: 0;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 0;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 200px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    border-radius: 4px;
    padding: 8px 0;
    z-index: 1000;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-item {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #2c3e50;
    transition: background-color 0.3s ease;
}

.dropdown-item:hover {
    background-color: #f5f5f5;
    color: #42b983;
}

@media (max-width: 768px) {
    .app-container {
        padding: 15px;
        width: 100%;
        min-width: 0;
        gap: 15px;
        flex-direction: column;
    }

    .navigation {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .main-content {
        width: 100%;
    }

    .dropdown-content {
        position: static;
        display: none;
        box-shadow: none;
        padding-left: 20px;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-item {
        padding: 8px 0;
    }
}

@media (max-width: 480px) {
    .app-container {
        padding: 10px;
        gap: 10px;
    }

    .navigation {
        margin: 0 -10px;
        width: calc(100% + 20px);
        padding: 8px;
        gap: 8px;
    }

    .nav-item {
        padding: 5px 8px;
        font-size: 13px;
    }
}
</style> 