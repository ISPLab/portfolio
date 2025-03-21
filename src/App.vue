<template>
    <div class="app-container">
        <nav class="navigation" :class="{ 'nav-hidden': isScrollingDown, 'nav-visible': !isScrollingDown }">
            <div class="nav-inner">
                <div class="nav-links">
                    <!-- <router-link to="/portfolio" class="nav-item">{{ t.portfolio }}</router-link> -->
                    <router-link to="/" class="portfolio-link">
                        <svg width="48" height="48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="M50 50 L150 50" class="kanji-stroke kanji-stroke-1" />
                            <path d="M100 50 L100 150" class="kanji-stroke kanji-stroke-2" />
                            <path d="M50 100 L150 100" class="kanji-stroke kanji-stroke-3" />
                            <path d="M75 150 L125 150" class="kanji-stroke kanji-stroke-4" />
                        </svg>
                    </router-link>
                    <div class="dropdown" v-click-outside="closeDropdown">
                        <button 
                            class="nav-item dropdown-toggle" 
                            :class="{ 'router-link-active': isProjectRoute }"
                            @click="toggleDropdown"
                        >
                            {{ t.projects.title }}
                        </button>
                        <div class="dropdown-content" v-show="isDropdownOpen">
                            <router-link 
                                v-for="route in projectRoutes" 
                                :key="route.path"
                                :to="route.path" 
                                class="dropdown-item"
                                @click="closeDropdown"
                            >
                                {{ t.projects.items[route.name] }}
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/cv" class="nav-item">{{ t.cv }}</router-link>
                    <router-link to="/about" class="nav-item">{{ t.about }}</router-link>
                    <router-link to="/feedback" class="nav-item">{{ t.feedback }}</router-link>
                </div>
            </div>
            <div class="language-selector">
                <span @click="languageStore.toggleLanguage" class="language-option">
                    <img :src="currentFlag" class="flag-icon" :alt="storeCurrentLanguage === 'en' ? 'English' : 'Русский'">
                    {{ storeCurrentLanguage !== 'en' ? 'Eng' : 'Рус' }}
                </span>
            </div>
        </nav>
        <main class="main-content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';
import { useRoute } from 'vue-router';
import type { NavigationTranslations } from '@/types/navigation';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

// Add type declaration for clickOutsideEvent
declare module '@vue/runtime-dom' {
    interface HTMLElement {
        clickOutsideEvent?: (event: Event) => void;
    }
}

// Fix the SVG imports by creating type declarations
declare module '*.svg' {
    const content: string;
    export default content;
}

// Импортируем изображения флагов
import ukFlag from '@/assets/uk-flag.svg';
import ruFlag from '@/assets/ru-flag.svg';

const { currentLanguage } = useCurrentLanguage();
const languageStore = useLanguageStore();
const { currentLanguage: storeCurrentLanguage } = storeToRefs(languageStore);

const translations: NavigationTranslations = {
    en: {
        portfolio: 'Portfolio',
        projects: {
            title: 'Projects',
            items: {
                cocktails: 'Cocktail Menu',
                router: 'Router Device',
                czca: 'Crowd Analysis',
                visionMap: 'VisionMap Integrator',
                smartMerch: 'SmartMerch',
                trackfleet: 'Trackfleet'
            }
        },
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
        cocktails: 'Cocktail Menu',
        routerDevice: 'Router Device',
        czca: 'Crowd Analysis',
        visionMap: 'VisionMap Integrator',
        smartMerch: 'SmartMerch',
        feedback: 'Feedback'
    },
    ru: {
        portfolio: 'Портфолио',
        projects: {
            title: 'Проекты',
            items: {
                cocktails: 'Барная карта',
                router: 'Роутер',
                czca: 'Анализ Толпы',
                visionMap: 'Интегратор VisionMap',
                smartMerch: 'SmartMerch',
                trackfleet: 'Trackfleet'
            }
        },
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
        cocktails: 'Барная карта',
        routerDevice: 'Роутер',
        czca: 'Анализ Толпы',
        visionMap: 'Интегратор VisionMap',
        smartMerch: 'SmartMerch',
        feedback: 'Отзывы'
    }
};

const t = computed(() => translations[storeCurrentLanguage.value]);
const currentFlag = computed(() => storeCurrentLanguage.value !== 'en' ? ukFlag : ruFlag);

const isDropdownOpen = ref(false);
const route = useRoute();

const projectRoutes = computed(() => [
    { name: 'trackfleet', path: '/projects/trackfleet' },
    { name: 'cocktails', path: '/cocktails' },
    { name: 'router', path: '/router-device' },
    { name: 'czca', path: '/projects/czca' },
    { name: 'visionMap', path: '/projects/vision-map' },
    { name: 'smartMerch', path: '/projects/smart-merch' }, 

] as const);

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

// Добавляем состояние для отслеживания прокрутки
const isScrollingDown = ref(false);
let lastScrollY = 0;

// Функция для обработки прокрутки
const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Проверяем направление прокрутки и показываем/скрываем навигацию
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        isScrollingDown.value = true;
    } else {
        isScrollingDown.value = false;
    }
    
    lastScrollY = currentScrollY;
};

// Добавляем и удаляем слушатель события прокрутки
onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

// Update the interface to include all routes
interface ProjectRoute {
    name: 'cocktails' | 'router' | 'czca' | 'visionMap' | 'smartMerch' | 'trackfleet' |
          'aiPianist' | 'socialMedia' | 'websiteChat' | 'cityQuests' | 'lumeiraWellness' |
          'butlerSystem' | 'nuanaData' | 'auroraMedia' | 'propertySales';
    path: string;
}
</script>

<style>
/* Глобальные стили в начале */
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: #191919; /* Добавляем светло-серый фон */
}

.app-container {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 60px;
    display: flex;
    gap: 30px;
    overflow-x: hidden;
    flex-direction: column;
    background-color: #f5f5f5; /* Добавляем тот же цвет для контейнера */
}

.navigation {
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, 
        rgba(66, 185, 131, 0.7) 0%, 
        rgba(44, 62, 80, 0.7) 100%
    );
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0; /* Располагаем навигацию в самом верху */
    left: 0; /* Растягиваем на всю ширину */
    right: 0;
    transform: translateY(0); /* Убираем смещение по X */
    transition: all 0.3s ease;
    z-index: 1000;
    border-radius: 0; /* Убираем скругление углов */
    margin: 0; /* Убираем отступы */
    backdrop-filter: blur(5px); /* Добавляем размытие фона */
    -webkit-backdrop-filter: blur(5px); /* Для Safari */
}

/* Стили для скрытой навигации */
.nav-hidden {
    transform: translateY(-100%); /* Меняем направление трансформации */
    opacity: 0;
}

/* Стили для видимой навигации */
.nav-visible {
    transform: translateY(0);
    opacity: 1;
}

.nav-inner {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-left: 0;
}

.nav-item {
    text-decoration: none;
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 16px;
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
    z-index: 2;
}

.dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 4px;
    /* transition: color 0.3s ease, background-color 0.3s ease; */
    white-space: nowrap;
}

.dropdown-content {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(135deg, 
        rgba(66, 185, 131, 0.7) 0%, 
        rgba(44, 62, 80, 0.7) 100%
    );
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    min-width: 200px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    border-radius: 4px;
    padding: 8px 0;
    z-index: 1000;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-item {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
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

/* Медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
    .app-container {
        padding-top: 140px;
    }

    .navigation {
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    .nav-inner {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .nav-links {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 10px;
    }

    .language-selector {
        margin: 0;
    }
}

@media (max-width: 480px) {
    .app-container {
        padding-top: 160px;
    }

    .nav-links {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
    }

    .nav-item {
        width: auto;
        text-align: center;
    }

    .dropdown {
        width: auto;
    }

    .dropdown-toggle {
        width: auto;
    }

    .dropdown-content {
        position: absolute;
        width: 160px;
        left: 50%;
        transform: translateX(-50%);
    }
}

/* Добавляем стили для очень маленьких экранов */
@media (max-width: 320px) {
    .app-container {
        padding-top: 240px; /* Максимальный отступ для самых маленьких экранов */
    }
}

/* Обновляем стили для карточек, чтобы они лучше выделялись на сером фоне */
.feature-card {
    background: white; /* Делаем карточки белыми для контраста */
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Усиливаем тень */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Усиливаем тень при наведении */
}

.portfolio-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    margin-right: 0;
}

.portfolio-link svg {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
}

.portfolio-link:hover svg {
    transform: scale(1.1);
}

.kanji-stroke {
    stroke: #efe8e6;
    stroke-width: 17;
    fill: none;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
}

.kanji-stroke-1 {
    animation: drawStroke 12s linear infinite;  /* Increased to 12s total (2s animation + 10s pause) */
}

.kanji-stroke-2 {
    animation: drawStroke 12s linear infinite 0.3s;
}

.kanji-stroke-3 {
    animation: drawStroke 12s linear infinite 0.6s;
}

.kanji-stroke-4 {
    animation: drawStroke 12s linear infinite 0.9s;
}

@keyframes drawStroke {
    0%, 100% { 
        stroke-dashoffset: 100; 
    }
    8% { 
        stroke-dashoffset: 0; 
    }
    8%, 85% {  /* Extended pause period */
        stroke-dashoffset: 0;  /* Keep the stroke visible during pause */
    }
    92% { 
        stroke-dashoffset: -100; 
    }
}

.top-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
}
</style> 