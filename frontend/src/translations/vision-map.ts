export interface VisionMapTranslations {
    [key: string]: {
        title: string;
        description: string;
        features: {
            mapping: {
                title: string;
                description: string;
            };
            integration: {
                title: string;
                description: string;
            };
            analytics: {
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

export const translations: VisionMapTranslations = {
    en: {
        title: 'VisionMap Integrator',
        description: 'An intelligent system that combines video analytics and technical systems with the ability to visualize detected objects on terrain maps and inside buildings. This solution enhances situational awareness, automates object monitoring, and enables rapid response to changes in controlled areas - perfect for security, infrastructure management, and smart cities.',
        features: {
            mapping: {
                title: 'Smart Mapping',
                description: 'Real-time object visualization on interactive maps with precise geo-referencing'
            },
            integration: {
                title: 'System Integration',
                description: 'Seamless integration with video analytics, surveillance cameras, sensors, and control devices'
            },
            analytics: {
                title: 'Intelligent Analytics',
                description: 'Advanced object recognition, classification, and behavior analysis in controlled zones'
            }
        },
        technical: {
            title: 'Technical Features',
            items: [
                'Real-time video analytics integration',
                'Multi-platform interface support',
                'Indoor and outdoor mapping',
                'Object recognition and tracking',
                'Geo-referencing system',
                'Event monitoring system',
                'Multi-device accessibility',
                'Automated alert system'
            ]
        },
        capabilities: {
            title: 'Key Capabilities',
            items: [
                'Video analytics integration',
                'Object recognition and classification',
                'Real-time geo-positioning',
                'Event monitoring and analysis',
                'Multi-platform interface',
                'Technical systems integration',
                'Controlled zone management',
                'Situational awareness tools'
            ]
        }
    },
    ru: {
        title: 'Интегратор VisionMap',
        description: 'Интеллектуальная система, объединяющая видеоаналитику и технические системы с возможностью визуализации распознанных объектов на карте местности и внутри зданий. Это решение повышает уровень ситуационной осведомленности, автоматизирует контроль за объектами и позволяет оперативно реагировать на изменения в контролируемых зонах - идеально для безопасности, управления инфраструктурой и умных городов.',
        features: {
            mapping: {
                title: 'Умное Картографирование',
                description: 'Визуализация объектов на интерактивных картах в реальном времени с точной геопривязкой'
            },
            integration: {
                title: 'Системная Интеграция',
                description: 'Безшовная интеграция с видеоаналитикой, камерами наблюдения, датчиками и контрольными устройствами'
            },
            analytics: {
                title: 'Интеллектуальная Аналитика',
                description: 'Продвинутое распознавание объектов, их классификация и анализ поведения в контролируемых зонах'
            }
        },
        technical: {
            title: 'Технические Характеристики',
            items: [
                'Интеграция видеоаналитики в реальном времени',
                'Поддержка многоплатформенного интерфейса',
                'Картографирование внутри и снаружи помещений',
                'Распознавание и отслеживание объектов',
                'Система геопривязки',
                'Система мониторинга событий',
                'Мультиустройственный доступ',
                'Автоматизированная система оповещений'
            ]
        },
        capabilities: {
            title: 'Ключевые Возможности',
            items: [
                'Интеграция видеоаналитики',
                'Распознавание и классификация объектов',
                'Геопозиционирование в реальном времени',
                'Мониторинг и анализ событий',
                'Многоплатформенный интерфейс',
                'Интеграция технических систем',
                'Управление контролируемыми зонами',
                'Инструменты ситуационной осведомленности'
            ]
        }
    }
}; 