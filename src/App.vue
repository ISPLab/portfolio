<template>
    <div class="app-container">
        <nav class="navigation">
            <div class="nav-links">
                <router-link to="/portfolio" class="nav-item">{{ t.portfolio }}</router-link>
            
                <div class="dropdown">
                    <button class="nav-item dropdown-toggle">{{ t.projects }}</button>
                    <div class="dropdown-content">
                        <router-link to="/ai-pianist" class="dropdown-item">{{ t.aiPianist }}</router-link>
                        <router-link to="/social-media" class="dropdown-item">{{ t.socialMedia }}</router-link>
                        <router-link to="/website-chat" class="dropdown-item">{{ t.websiteChat }}</router-link>                  
                        <router-link to="/city-quests" class="dropdown-item">{{ t.cityQuests }}</router-link>
                        <router-link to="/lumeira-wellness" class="dropdown-item">{{ t.lumeiraWellness }}</router-link>
                        <router-link to="/butler-system" class="dropdown-item">{{ t.butlerSystem }}</router-link>
                        <router-link to="/nuana-data" class="dropdown-item">{{ t.nuanaData }}</router-link>
                        <router-link to="/aurora-media" class="dropdown-item">{{ t.auroraMedia }}</router-link>
                        <router-link to="/property-sales" class="dropdown-item">{{ t.propertySales }}</router-link>
                        <router-link to="/cocktails" class="dropdown-item">{{ t.cocktails }}</router-link>
                        <router-link to="/router-device" class="dropdown-item">{{ t.routerDevice }}</router-link>
                    </div>
                </div>
                <router-link to="/cv" class="nav-item">{{ t.cv }}</router-link>
                <router-link to="/about" class="nav-item">{{ t.about }}</router-link>
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
import { ref, computed } from 'vue';

const currentLanguage = ref('en');

const translations = {
    en: {
        portfolio: 'Portfolio',
        projects: 'Projects',
        cv: 'CV',
        about: 'About',
        aiPianist: 'AI Pianist',
        socialMedia: 'Social Media',
        websiteChat: 'Website Chat',
        cityQuests: 'City Quests',
        lumeiraWellness: 'Lumeira Wellness',
        butlerSystem: 'Butler System',
        nuanaData: 'Nuana Data Center',
        auroraMedia: 'Aurora Media Park',
        propertySales: 'Property Sales',
        cocktails: 'Cocktail Page',
        routerDevice: 'Router Device'
    },
    ru: {
        portfolio: 'Портфолио',
        projects: 'Проекты',
        cv: 'Резюме',
        about: 'О сайте',
        aiPianist: 'ИИ Пианист',
        socialMedia: 'Соцсети',
        websiteChat: 'Чат для сайта',
        cityQuests: 'Городские квесты',
        lumeiraWellness: 'Lumeira Wellness',
        butlerSystem: 'Система Батлер',
        nuanaData: 'Дата-центр Nuana',
        auroraMedia: 'Медиапарк Аврора',
        propertySales: 'Продажа недвижимости',
        cocktails: 'Страница коктейлей',
        routerDevice: 'Роутер'
    }
};

const t = computed(() => translations[currentLanguage.value]);
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