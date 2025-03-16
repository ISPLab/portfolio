<template>
    <div class="app-container">
        <nav class="navigation" :class="{ 'no-animation': isPortfolioRoute }">
            <div class="nav-links">
                <router-link to="/portfolio" class="nav-item">{{ t.portfolio }}</router-link>
            
                <div class="dropdown" v-click-outside="closeDropdown">
                    <button 
                        class="nav-item dropdown-toggle" 
                        :class="{ 'router-link-active': isProjectRoute }"
                        @click="toggleDropdown"
                    >
                        {{ t.projects }}
                    </button>
                    <div class="dropdown-content" v-show="isDropdownOpen">
                        <router-link 
                            v-for="route in projectRoutes" 
                            :key="route.path"
                            :to="route.path" 
                            class="dropdown-item"
                            @click="closeDropdown"
                        >
                            {{ route.title }}
                        </router-link>
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
                    <img :src="currentFlag" class="flag-icon" :alt="currentLanguage === 'en' ? 'English' : 'Русский'">
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
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';
import { useRoute } from 'vue-router';
import type { NavigationTranslations } from '@/types/navigation';

// Импортируем изображения флагов
import ukFlag from '@/assets/uk-flag.svg';
import ruFlag from '@/assets/ru-flag.svg';

const { currentLanguage } = useCurrentLanguage();

const translations: NavigationTranslations = {
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
const currentFlag = computed(() => currentLanguage.value === 'en' ? ukFlag : ruFlag);

const isDropdownOpen = ref(false);
const route = useRoute();

const projectRoutes = computed(() => [
    { path: '/ai-pianist', title: t.value.aiPianist },
    { path: '/social-media', title: t.value.socialMedia },
    { path: '/website-chat', title: t.value.websiteChat },
    { path: '/city-quests', title: t.value.cityQuests },
    { path: '/lumeira-wellness', title: t.value.lumeiraWellness },
    { path: '/butler-system', title: t.value.butlerSystem },
    { path: '/nuana-data', title: t.value.nuanaData },
    { path: '/aurora-media', title: t.value.auroraMedia },
    { path: '/property-sales', title: t.value.propertySales },
    { path: '/cocktails', title: t.value.cocktails },
    { path: '/router-device', title: t.value.routerDevice }
]);

const isProjectRoute = computed(() => {
    return projectRoutes.value.some(r => r.path === route.path);
});

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

// Проверяем, находимся ли мы на странице portfolio
const isPortfolioRoute = computed(() => route.path === '/portfolio');

// Директива для закрытия dropdown при клике вне его
const vClickOutside = {
    mounted(el: HTMLElement, binding: any) {
        el.clickOutsideEvent = (event: Event) => {
            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: HTMLElement) {
        document.removeEventListener('click', el.clickOutsideEvent);
    }
};
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
    background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border-radius: 8px;
}

/* Добавляем класс для отключения анимации */
.navigation.no-animation {
    animation: none;
    background-position: 0% 50%;
}

.nav-links {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    margin-left: 20px;
}

.nav-item {
    text-decoration: none;
    color: white;
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease, background-color 0.3s ease;
    white-space: nowrap;
}

.nav-item:hover {
    color: #AAE2FF;
}

.nav-item.router-link-active {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
}

.language-selector {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    flex: 0 0 auto;
}

.language-option {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
}

.language-option:hover {
    color: #AAE2FF;
}

.flag-icon {
    width: 20px;
    height: 15px;
    object-fit: cover;
    border-radius: 2px;
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
    padding: 8px 15px;
    border-radius: 4px;
    transition: color 0.3s ease, background-color 0.3s ease;
    white-space: nowrap;
}

.dropdown-content {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(135deg, #f6f8f9 0%, #AAE2FF 0%, #1c5a8c 100%);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
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
    color: white;
    transition: background-color 0.3s ease;
}

.dropdown-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #AAE2FF;
}

.dropdown-item.router-link-active {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
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