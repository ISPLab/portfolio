<template>
    <div class="project-page">
        <h1>{{ t.title }}</h1>
        
        <div class="project-description">
            <p>{{ t.description }}</p>
            
            <h2>{{ t.features }}</h2>
            <ul class="features-list">
                <li v-for="(feature, index) in t.featuresList" :key="index">
                    {{ feature.icon }} {{ feature.text }}
                </li>
            </ul>

            <h2>{{ t.target }}</h2>
            <p>{{ t.targetDescription }}</p>
        </div>

        <div class="project-tech">
            <h2>{{ t.technologies }}</h2>
            <div class="tech-stack">
                <span class="tech-item">Vue.js 3</span>
                <span class="tech-item">TypeScript</span>
                <span class="tech-item">Mapbox GL</span>
                <span class="tech-item">Socket.IO</span>
                <span class="tech-item">NestJS</span>
                <span class="tech-item">PostgreSQL</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';

const { currentLanguage } = useCurrentLanguage();

const translations = {
    en: {
        title: 'TrackFleet',
        description: 'TrackFleet is an intelligent real-time cargo vehicle monitoring system.',
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
        technologies: 'Technologies Used'
    },
    ru: {
        title: 'ТрэкФлит',
        description: 'ТрэкФлит — это интеллектуальная система мониторинга грузового транспорта в реальном времени.',
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
        technologies: 'Использованные технологии'
    }
};

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped lang="scss">
.project-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: var(--color-heading);
    }

    h2 {
        font-size: 1.8rem;
        margin: 2rem 0 1rem;
        color: var(--color-heading);
    }

    .project-description {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .features-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0;

        li {
            margin: 1rem 0;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;

        .tech-item {
            background-color: var(--color-background-soft);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.9rem;
            color: var(--color-text);
        }
    }
}
</style> 