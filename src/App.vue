<template>
    <div class="app-container">
        <nav class="navigation">
            <div class="nav-links">
                <router-link to="/portfolio" class="nav-item">Portfolio</router-link>
            
                <div class="dropdown">
                    <button class="nav-item dropdown-toggle">Projects</button>
                    <div class="dropdown-content">
                        <router-link to="/ai-pianist" class="dropdown-item">AI Pianist</router-link>
                        <router-link to="/social-media" class="dropdown-item">Social Media</router-link>
                        <router-link to="/website-chat" class="dropdown-item">Website Chat</router-link>                  
                        <router-link to="/city-quests" class="dropdown-item">City Quests</router-link>
                        <router-link to="/lumeira-wellness" class="dropdown-item">Lumeira Wellness</router-link>
                        <router-link to="/butler-system" class="dropdown-item">Butler System</router-link>
                        <router-link to="/nuana-data" class="dropdown-item">Nuana Data Center</router-link>
                        <router-link to="/aurora-media" class="dropdown-item">Aurora Media Park</router-link>
                        <router-link to="/property-sales" class="dropdown-item">Property Sales</router-link>
                        <router-link to="/cocktails" class="dropdown-item">Cocktail Page</router-link>
                        <router-link to="/router-device" class="dropdown-item">Router Device</router-link>
                    </div>
                </div>
                <router-link to="/cv" class="nav-item">CV</router-link>
                <router-link to="/about" class="nav-item">About</router-link>
            </div>
            <div class="language-selector">
                <span 
                    @click="currentLanguage = currentLanguage === 'en' ? 'ru' : 'en'"
                    class="language-option"
                >
                    {{ currentLanguage === 'en' ? 'Eng' : 'Рус' }}
                </span>
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
    flex-direction: row;
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

.language-selector {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px; 
}

.language-option {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    color: #2c3e50;
}

.language-option:hover {
    color: #42b983;
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
}
</style> 