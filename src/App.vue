<template>
    <div class="app-container">
        <nav class="navigation" 
             :class="{ 
                'no-animation': isPortfolioRoute,
                'nav-hidden': isScrollingDown,
                'nav-visible': !isScrollingDown 
             }"
        >
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
</script>

<style>
/* Глобальные стили в начале */
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: #f5f5f5; /* Добавляем светло-серый фон */
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
    flex-direction: row;
    gap: 15px;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    margin-left: 10px;
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
    transition: color 0.3s ease, background-color 0.3s ease;
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
        padding-top: 140px; /* Увеличиваем отступ для мобильных устройств */
    }

    .navigation {
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        gap: 8px;
    }

    .language-selector {
        margin: 5px 0;
    }

    .nav-item {
        font-size: 14px;
        padding: 5px 8px;
    }

    .dropdown-content {
        position: absolute;
        width: 160px;
        left: 50%;
        transform: translateX(-50%);
    }

    .dropdown-item {
        font-size: 14px;
        padding: 6px 12px;
    }
}

/* Для очень маленьких экранов */
@media (max-width: 480px) {
    .app-container {
        padding-top: 200px; /* Еще больше отступ для маленьких экранов */
        padding-left: 10px;
        padding-right: 10px;
    }

    .nav-links {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }

    .nav-item {
        text-align: center;
    }

    .dropdown {
        width: 100%;
        position: static;
    }

    .dropdown-toggle {
        width: 100%;
        text-align: center;
    }

    .dropdown-content {
        position: static;
        width: 100%;
        transform: none;
        -webkit-transform: none;
    }

    .language-selector {
        width: 100%;
        display: flex;
        justify-content: center;
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
</style> 