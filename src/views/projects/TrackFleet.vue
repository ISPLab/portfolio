<template>
    <div class="project-container cocktails-container">
        <section class="project-info">
            <div class="project-title">
                <h1>{{ t.title }}</h1>
            </div>
            <p class="description">{{ t.description }}</p>
            
            <div class="project-screenshot">
                <img 
                    src="@/assets/projects/trackfleet/vehicle-list.png" 
                    alt="TrackFleet vehicle list interface"
                    loading="lazy"
                />
            </div>
            
            <div class="tech-features">
                <div v-for="(feature, index) in t.featuresList" :key="index" class="feature">
                    <h3>{{ feature.icon }}</h3>
                    <p>{{ feature.text }}</p>
                </div>
            </div>
        </section>

        <div class="tech-stack-section">
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
import { computed } from 'vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';

const { currentLanguage } = useCurrentLanguage();

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
        githubLink: 'https://github.com/yourusername/trackfleet'
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
        githubLink: 'https://github.com/yourusername/trackfleet'
    }
};

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped lang="scss">
.cocktails-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.project-info {
    max-width: 800px;
    margin: 0 auto 40px;
    padding: 20px;
    background: var(--color-background-soft);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-info h1 {
    color: var(--color-heading);
    margin: 0 0 15px 0;
    font-size: 2em;
}

.description {
    color: var(--color-text);
    line-height: 1.6;
    margin-bottom: 30px;
}

.project-screenshot {
    margin: 2rem 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: var(--color-background-soft);

    .screenshot {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 12px 12px 0 0;
    }

    .screenshot-caption {
        padding: 1rem;
        text-align: center;
        font-size: 0.9rem;
        color: var(--color-text-light);
        background-color: var(--color-background-mute);
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

@media (max-width: 768px) {
    .project-screenshot {
        margin: 1.5rem -1rem;
        border-radius: 0;

        .screenshot {
            border-radius: 0;
        }
    }
}
</style> 