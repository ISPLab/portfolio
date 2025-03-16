<template>
    <div class="about-container">
        <section class="hero">
            <h1>{{ t.title }}</h1>
            <p class="subtitle">{{ t.subtitle }}</p>
        </section>

        <section class="tech-section">
            <h2>{{ t.coreTech }}</h2>
            <div class="tech-grid">
                <div class="tech-card">
                    <h3>{{ t.frontendArch.title }}</h3>
                    <ul>
                        <li>{{ t.frontendArch.component.title }}
                            <p>{{ t.frontendArch.component.desc }}</p>
                        </li>
                        <li>{{ t.frontendArch.state.title }}
                            <p>{{ t.frontendArch.state.desc }}</p>
                        </li>
                        <li>{{ t.frontendArch.routing.title }}
                            <p>{{ t.frontendArch.routing.desc }}</p>
                        </li>
                    </ul>
                </div>

                <div class="tech-card">
                    <h3>{{ t.apiIntegration.title }}</h3>
                    <ul>
                        <li>{{ t.apiIntegration.rest.title }}
                            <p>{{ t.apiIntegration.rest.desc }}</p>
                        </li>
                        <li>{{ t.apiIntegration.data.title }}
                            <p>{{ t.apiIntegration.data.desc }}</p>
                        </li>
                        <li>{{ t.apiIntegration.error.title }}
                            <p>{{ t.apiIntegration.error.desc }}</p>
                        </li>
                    </ul>
                </div>

                <div class="tech-card">
                    <h3>{{ t.bestPractices.title }}</h3>
                    <ul>
                        <li>{{ t.bestPractices.typescript.title }}
                            <p>{{ t.bestPractices.typescript.desc }}</p>
                        </li>
                        <li>{{ t.bestPractices.responsive.title }}
                            <p>{{ t.bestPractices.responsive.desc }}</p>
                        </li>
                        <li>{{ t.bestPractices.performance.title }}
                            <p>{{ t.bestPractices.performance.desc }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="implementation">
            <h2>{{ t.implementation.title }}</h2>
            <p>{{ t.implementation.description }}</p>
            <ul class="framework-list">
                <li v-for="framework in t.implementation.frameworks" :key="framework.name">
                    <strong>{{ framework.name }}:</strong> {{ framework.desc }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';

const { currentLanguage } = useCurrentLanguage();

const translations = {
    en: {
        title: 'Universal Web Architecture',
        subtitle: 'Framework-Agnostic Development Approach',
        coreTech: 'Core Technologies',
        frontendArch: {
            title: 'Frontend Architecture',
            component: {
                title: 'Component-Based Structure',
                desc: 'Modular design pattern applicable to React, Vue, Angular, or any modern framework'
            },
            state: {
                title: 'State Management',
                desc: 'Universal patterns working with any state manager (Vuex/Pinia, Redux, MobX, etc.)'
            },
            routing: {
                title: 'Routing System',
                desc: 'Framework-agnostic routing principles for single-page applications'
            }
        },
        apiIntegration: {
            title: 'API Integration',
            rest: {
                title: 'RESTful Architecture',
                desc: 'Standard HTTP methods and endpoints compatible with any backend'
            },
            data: {
                title: 'Data Fetching',
                desc: 'Universal async patterns working with any HTTP client'
            },
            error: {
                title: 'Error Handling',
                desc: 'Consistent error management applicable across frameworks'
            }
        },
        bestPractices: {
            title: 'Best Practices',
            typescript: {
                title: 'TypeScript Integration',
                desc: 'Type safety and enhanced development experience for any JS framework'
            },
            responsive: {
                title: 'Responsive Design',
                desc: 'Framework-independent CSS architecture and mobile-first approach'
            },
            performance: {
                title: 'Performance Optimization',
                desc: 'Universal techniques for caching, lazy loading, and code splitting'
            }
        },
        implementation: {
            title: 'Current Implementation',
            description: 'While this site is built with Vue.js, the architecture can be easily adapted to other frameworks:',
            frameworks: [
                { name: 'React', desc: 'Using hooks and context instead of Vue composition API' },
                { name: 'Angular', desc: 'Using services and dependency injection' },
                { name: 'Svelte', desc: 'Using stores and reactive statements' }
            ]
        }
    },
    ru: {
        title: 'Универсальная Веб-Архитектура',
        subtitle: 'Независимый от фреймворков подход к разработке',
        coreTech: 'Основные технологии',
        frontendArch: {
            title: 'Фронтенд архитектура',
            component: {
                title: 'Компонентная структура',
                desc: 'Модульный паттерн проектирования, применимый к React, Vue, Angular или любому современному фреймворку'
            },
            state: {
                title: 'Управление состоянием',
                desc: 'Универсальные паттерны, работающие с любым менеджером состояний (Vuex/Pinia, Redux, MobX и др.)'
            },
            routing: {
                title: 'Система маршрутизации',
                desc: 'Независимые от фреймворка принципы маршрутизации для одностраничных приложений'
            }
        },
        apiIntegration: {
            title: 'API Интеграция',
            rest: {
                title: 'RESTful Архитектура',
                desc: 'Стандартные HTTP методы и эндпоинты, совместимые с любым бэкендом'
            },
            data: {
                title: 'Получение данных',
                desc: 'Универсальные асинхронные паттерны, работающие с любым HTTP клиентом'
            },
            error: {
                title: 'Обработка ошибок',
                desc: 'Согласованное управление ошибками, применимое во всех фреймворках'
            }
        },
        bestPractices: {
            title: 'Лучшие практики',
            typescript: {
                title: 'Интеграция TypeScript',
                desc: 'Типобезопасность и улучшенный опыт разработки для любого JS фреймворка'
            },
            responsive: {
                title: 'Адаптивный дизайн',
                desc: 'Независимая от фреймворка CSS архитектура и подход mobile-first'
            },
            performance: {
                title: 'Оптимизация производительности',
                desc: 'Универсальные техники кэширования, ленивой загрузки и разделения кода'
            }
        },
        implementation: {
            title: 'Текущая реализация',
            description: 'Хотя этот сайт построен на Vue.js, архитектура может быть легко адаптирована к другим фреймворкам:',
            frameworks: [
                { name: 'React', desc: 'Использование хуков и контекста вместо Vue composition API' },
                { name: 'Angular', desc: 'Использование сервисов и внедрения зависимостей' },
                { name: 'Svelte', desc: 'Использование хранилищ и реактивных выражений' }
            ]
        }
    }
};

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
.about-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
    border-radius: 8px;
    color: white;
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.2em;
    opacity: 0.9;
    margin: 0;
}

.tech-section {
    margin-bottom: 60px;
}

.tech-section h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.tech-card {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.tech-card:hover {
    transform: translateY(-5px);
}

.tech-card h3 {
    color: #42b983;
    margin-top: 0;
    margin-bottom: 20px;
}

.tech-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tech-card li {
    margin-bottom: 20px;
    color: #2c3e50;
    font-weight: 500;
}

.tech-card li p {
    margin: 5px 0 0;
    color: #666;
    font-weight: normal;
    font-size: 0.9em;
}

.implementation {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 8px;
    margin-top: 60px;
}

.implementation h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 20px;
}

.framework-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
}

.framework-list li {
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;
    color: #666;
}

.framework-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

@media (max-width: 768px) {
    .hero {
        padding: 30px 15px;
    }

    .hero h1 {
        font-size: 2em;
    }

    .tech-grid {
        grid-template-columns: 1fr;
    }

    .implementation {
        padding: 20px;
    }
}
</style> 