<template>
    <div class="project-container cocktails-container">
        <div class="vehicles-grid">
            <div class="vehicle-card">
                <div class="vehicle-content">
                    <div class="image-container">
                        <transition name="fade" mode="out-in">
                            <img 
                                :src="currentImage" 
                                :alt="currentImageCaption"
                                loading="lazy"
                                class="vehicle-image"
                            />
                        </transition>
                        <div class="image-overlay">
                            <div class="image-caption">
                                {{ currentImageCaption }}
                            </div>
                            <div class="image-navigation">
                                <div class="nav-label">{{ t.imageNavLabel }}</div>
                                <button class="nav-button prev" @click.stop="prevImage">←</button>
                                <span class="image-counter">{{ currentImageIndex + 1 }}/{{ images.length }}</span>
                                <button class="nav-button next" @click.stop="nextImage">→</button>
                            </div>
                        </div>
                    </div>
                    
                    <article class="vehicle-info">
                        <h2 class="vehicle-name">{{ t.title }}</h2>
                        <p class="description">{{ t.description }}</p>
                        
                        <div class="vehicle-features">
                            <h3>{{ t.features }}</h3>
                            <div class="features-list">
                                <div v-for="(feature, index) in t.featuresList" 
                                     :key="index" 
                                     class="feature-item"
                                >
                                    <span class="feature-icon">{{ feature.icon }}</span>
                                    <span class="feature-text">{{ feature.text }}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div class="tech-stack-section">
            <h2>{{ t.technologies }}</h2>
            <div class="tech-stack">
                <span class="tech-item">Angular</span>
                <span class="tech-item">TypeScript</span>
                <span class="tech-item">Mapbox GL</span>
                <span class="tech-item">Socket.IO</span>
                <span class="tech-item">NestJS</span>
                <span class="tech-item">PostgreSQL</span>
            </div>
        </div>

        <div class="project-links">
            <a :href="t.demoLink" target="_blank" rel="noopener noreferrer" class="view-project-btn">
                {{ t.viewDemo }}
                <span class="arrow">→</span>
            </a>
            <a :href="t.githubLink" target="_blank" rel="noopener noreferrer" class="view-project-btn github">
                <svg class="github-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                {{ t.viewGithub }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';

const { currentLanguage } = useCurrentLanguage();
const currentImageIndex = ref(0);

const images = [
    {
        src: '@/assets/projects/trackfleet/vehicle-list.png',
        captionEn: 'Vehicle list and real-time tracking',
        captionRu: 'Список транспорта и отслеживание в реальном времени'
    },
    {
        src: '@/assets/projects/trackfleet/vehicle-settings.png',
        captionEn: 'Vehicle settings and data configuration',
        captionRu: 'Настройки и конфигурация данных транспорта'
    },
    {
        src: '@/assets/projects/trackfleet/vehicle-tracking.png',
        captionEn: 'Real-time vehicle tracking on map',
        captionRu: 'Отслеживание транспорта на карте в реальном времени'
    },
    {
        src: '@/assets/projects/trackfleet/vehicle-sensors.png',
        captionEn: 'Vehicle sensors and telemetry data',
        captionRu: 'Датчики транспорта и телеметрические данные'
    }
];

const currentImage = computed(() => images[currentImageIndex.value].src);
const currentImageCaption = computed(() => 
    currentLanguage.value === 'en' 
        ? images[currentImageIndex.value].captionEn 
        : images[currentImageIndex.value].captionRu
);

const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const prevImage = () => {
    currentImageIndex.value = currentImageIndex.value === 0 
        ? images.length - 1 
        : currentImageIndex.value - 1;
};

const translations = {
    en: {
        title: 'TrackFleet',
        description: 'TrackFleet is an intelligent real-time cargo vehicle monitoring system.',
        screenshotCaption: 'Vehicle monitoring interface showing real-time status and location of the fleet',
        features: 'Key Features',
        featuresList: [
            { icon: '📍', text: 'Geolocation and route tracking on map' },
            { icon: '⛽', text: 'Fuel level monitoring' },
            { icon: '🧊', text: 'Refrigerator temperature tracking' },
            { icon: '⚖️', text: 'Current load status' },
            { icon: '📊', text: 'Sensor status monitoring (doors, brakes, battery, etc.)' },
            { icon: '🕒', text: 'Arrival time, downtime and route deviation tracking' }
        ],
        target: 'Target Audience',
        targetDescription: 'Perfect for logistics companies, carriers, warehouse operators and delivery services seeking to improve transparency, efficiency and safety of transport logistics.',
        technologies: 'Technologies Used',
        viewDemo: 'Live Demo',
        viewGithub: 'View on GitHub',
        demoLink: 'https://trackfleet-demo.vercel.app',
        githubLink: 'https://github.com/yourusername/trackfleet',
        imageNavLabel: 'Click arrows to view more screenshots'
    },
    ru: {
        title: 'ТрэкФлит',
        description: 'ТрэкФлит — это интеллектуальная система мониторинга грузового транспорта в реальном времени.',
        screenshotCaption: 'Интерфейс мониторинга транспорта, показывающий статус и местоположение автопарка в реальном времени',
        features: 'Ключевые функции',
        featuresList: [
            { icon: '📍', text: 'Геолокация и маршрут на карте' },
            { icon: '⛽', text: 'Уровень топлива' },
            { icon: '🧊', text: 'Температура в рефрижераторе' },
            { icon: '⚖️', text: 'Текущая загрузка' },
            { icon: '📊', text: 'Состояние датчиков (двери, тормоза, аккумулятор и пр.)' },
            { icon: '🕒', text: 'Время прибытия, простоев и отклонений от маршрута' }
        ],
        target: 'Целевая аудитория',
        targetDescription: 'Система идеально подходит для логистических компаний, перевозчиков, складских операторов и служб доставки, стремящихся к повышению прозрачности, эффективности и безопасности транспортной логистики.',
        technologies: 'Использованные технологии',
        viewDemo: 'Демо версия',
        viewGithub: 'Открыть GitHub',
        demoLink: 'https://trackfleet-demo.vercel.app',
        githubLink: 'https://github.com/yourusername/trackfleet',
        imageNavLabel: 'Нажмите стрелки для просмотра скриншотов'
    }
};

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped lang="scss">
.project-container {
    padding-top: 80px;
}

.vehicles-grid {
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

.vehicle-card {
    padding: 5px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-background-soft);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vehicle-content {
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
    cursor: pointer;
    position: relative;
    
    &:hover .image-overlay {
        opacity: 1;
    }
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: default;
}

.image-caption {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px;
    font-size: 0.9rem;
    text-align: center;
    border-radius: 0 0 8px 8px;
}

.image-navigation {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
}

.nav-label {
    color: white;
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.6);
    padding: 4px 12px;
    border-radius: 4px;
    margin-bottom: 4px;
}

.nav-button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    &.prev {
        padding-right: 20px;
    }

    &.next {
        padding-left: 20px;
    }
}

.image-counter {
    color: white;
    font-size: 0.9rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 8px;
    border-radius: 4px;
}

.vehicle-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
}

.vehicle-info {
    width: 100%;
    display: block;
}

.vehicle-name {
    margin: 0;
    font-size: 24px;
    color: var(--color-heading);
}

.description {
    color: var(--color-text);
    line-height: 1.6;
    margin-bottom: 30px;
}

.vehicle-features {
    margin-top: 30px;
}

.features-list {
    display: grid;
    gap: 8px;
    margin-top: 10px;
}

.feature-item {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 10px;
    align-items: center;
    padding: 10px;
    background-color: var(--color-background-mute);
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
        transform: translateX(10px);
    }
}

.feature-icon {
    font-size: 1.5em;
    text-align: center;
}

.feature-text {
    color: var(--color-text);
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
    .project-container {
        padding-top: 100px;
    }

    .image-container {
        width: 150px;
    }
    
    .vehicle-content {
        flex-direction: column;
    }

    .feature-item {
        grid-template-columns: 30px 1fr;
    }

    .image-navigation {
        bottom: 30px;
    }
    
    .nav-label {
        font-size: 0.8rem;
        padding: 3px 8px;
    }
    
    .nav-button {
        padding: 6px 12px;
    }
}

@media (max-width: 480px) {
    .project-container {
        padding-top: 120px;
    }

    .image-container {
        float: none;
        width: 100%;
        margin: 0 0 20px 0;
    }
}

.tech-stack-section {
    margin: 3rem 0;
    padding: 2rem;
    background-color: var(--color-background-soft);
    border-radius: 12px;

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        color: var(--color-heading);
        font-weight: 500;
    }
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .tech-item {
        background-color: var(--color-background-mute);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.9rem;
        color: var(--color-text);
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.05);
        }
    }
}

.project-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.view-project-btn {
    background-color: var(--color-background-mute);
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    color: var(--color-text);
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
}

.github-icon {
    margin-right: 10px;
}

.arrow {
    margin-left: 10px;
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style> 