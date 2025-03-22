export interface SmartMerchTranslations {
    [key: string]: {
        title: string;
        description: string;
        features: {
            recommendations: {
                title: string;
                description: string;
            };
            visualization: {
                title: string;
                description: string;
            };
            automation: {
                title: string;
                description: string;
            };
        };
        technical: {
            title: string;
            items: string[];
        };
        capabilities: {
            title: string;
            items: string[];
        };
    };
}

export const translations: SmartMerchTranslations = {
    en: {
        title: 'SmartMerch',
        description: 'An innovative solution for merchandisers that helps optimally place and select products for a specific store, taking into account its characteristics, assortment, and brand requirements. SmartMerch enables merchandisers to quickly and efficiently organize product displays, improving brand representation and increasing sales.',
        features: {
            recommendations: {
                title: 'Smart Recommendations',
                description: 'Personalized product selection and layout schemes adapted for each specific store'
            },
            visualization: {
                title: 'Interactive Visualization',
                description: 'Interactive shelf and retail zone schemes for convenient planning'
            },
            automation: {
                title: 'Process Automation',
                description: 'Reduced decision-making time and improved work efficiency'
            }
        },
        technical: {
            title: 'Technical Features',
            items: [
                'Real-time data synchronization',
                'Mobile-first architecture',
                'Interactive layout designer',
                'Advanced analytics system',
                'Multi-store support',
                'Inventory tracking integration',
                'Sales data analysis',
                'Custom reporting tools'
            ]
        },
        capabilities: {
            title: 'Key Capabilities',
            items: [
                'Personalized recommendations',
                'Interactive visualization',
                'Process automation',
                'Database synchronization',
                'Mobile device support',
                'Sales trend analysis',
                'Brand guidelines integration',
                'Performance monitoring'
            ]
        }
    },
    ru: {
        title: 'SmartMerch',
        description: 'Инновационное решение для мерчендайзеров, которое помогает оптимально размещать и подбирать товар для конкретного магазина с учетом его особенностей, ассортимента и требований бренда. SmartMerch позволяет мерчендайзерам быстро и эффективно организовать выкладку товаров, улучшая представленность бренда и повышая продажи.',
        features: {
            recommendations: {
                title: 'Умные Рекомендации',
                description: 'Персонализированные рекомендации по подбору товаров и схемам раскладки'
            },
            visualization: {
                title: 'Интерактивная Визуализация',
                description: 'Интерактивные схемы полок и торговых зон для удобного планирования'
            },
            automation: {
                title: 'Автоматизация Процессов',
                description: 'Сокращение времени на принятие решений и повышение эффективности работы'
            }
        },
        technical: {
            title: 'Технические Характеристики',
            items: [
                'Синхронизация данных в реальном времени',
                'Mobile-first архитектура',
                'Интерактивный конструктор выкладки',
                'Продвинутая система аналитики',
                'Поддержка множества магазинов',
                'Интеграция с учетом товаров',
                'Анализ данных о продажах',
                'Настраиваемые отчеты'
            ]
        },
        capabilities: {
            title: 'Ключевые Возможности',
            items: [
                'Персонализированные рекомендации',
                'Интерактивная визуализация',
                'Автоматизация процессов',
                'Синхронизация с базами данных',
                'Поддержка мобильных устройств',
                'Анализ трендов продаж',
                'Интеграция требований бренда',
                'Мониторинг эффективности'
            ]
        }
    }
}; 