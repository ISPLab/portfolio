export interface AboutTranslations {
    [key: string]: {
        title: string;
        subtitle: string;
        coreTech: string;
        frontendArch: {
            title: string;
            component: { title: string; desc: string; };
            state: { title: string; desc: string; };
            routing: { title: string; desc: string; };
        };
        apiIntegration: {
            title: string;
            rest: { title: string; desc: string; };
            data: { title: string; desc: string; };
            error: { title: string; desc: string; };
        };
        bestPractices: {
            title: string;
            typescript: { title: string; desc: string; };
            responsive: { title: string; desc: string; };
            performance: { title: string; desc: string; };
        };
        implementation: {
            title: string;
            description: string;
            frameworks: Array<{ name: string; desc: string; }>;
        };
    };
}

export const translations: AboutTranslations = {
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