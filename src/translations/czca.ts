export interface CZCATranslations {
    [key: string]: {
        title: string;
        description: string;
        features: {
            analysis: {
                title: string;
                description: string;
            };
            tech: {
                title: string;
                description: string;
            };
            security: {
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

export const translations: CZCATranslations = {
    en: {
        title: 'Controlled Zone Crowd Analysis',
        description: 'An advanced computer vision system designed to analyze and monitor crowd dynamics in controlled zones. This project combines real-time video processing with machine learning to ensure safety and optimize space utilization in public areas.',
        features: {
            analysis: {
                title: 'Real-time Analysis',
                description: 'Advanced computer vision algorithms for instant crowd density and movement pattern detection'
            },
            tech: {
                title: 'AI Integration',
                description: 'Machine learning models for behavior prediction and anomaly detection'
            },
            security: {
                title: 'Security Features',
                description: 'Automated alert system and incident prevention through early warning mechanisms'
            }
        },
        technical: {
            title: 'Technical Implementation',
            items: [
                'TensorFlow and OpenCV for video processing',
                'Real-time data processing and analysis',
                'Scalable microservices architecture',
                'Cloud-based deployment with failover',
                'REST API for system integration',
                'Automated testing and monitoring',
                'Data encryption and secure storage',
                'Performance optimization for high loads'
            ]
        },
        capabilities: {
            title: 'System Capabilities',
            items: [
                'Crowd density estimation in real-time',
                'Movement pattern recognition',
                'Anomaly detection and alerts',
                'Occupancy tracking and statistics',
                'Heat map generation for space usage',
                'Automated reporting system',
                'Integration with existing security systems',
                'Historical data analysis and trends'
            ]
        }
    },
    ru: {
        title: 'Анализ Скопления Людей в Контролируемых Зонах',
        description: 'Продвинутая система компьютерного зрения, разработанная для анализа и мониторинга динамики толпы в контролируемых зонах. Этот проект объединяет обработку видео в реальном времени с машинным обучением для обеспечения безопасности и оптимизации использования пространства в общественных местах.',
        features: {
            analysis: {
                title: 'Анализ в Реальном Времени',
                description: 'Продвинутые алгоритмы компьютерного зрения для мгновенного определения плотности толпы и паттернов движения'
            },
            tech: {
                title: 'Интеграция с ИИ',
                description: 'Модели машинного обучения для предсказания поведения и обнаружения аномалий'
            },
            security: {
                title: 'Функции Безопасности',
                description: 'Автоматизированная система оповещения и предотвращение инцидентов через механизмы раннего предупреждения'
            }
        },
        technical: {
            title: 'Техническая Реализация',
            items: [
                'TensorFlow и OpenCV для обработки видео',
                'Обработка и анализ данных в реальном времени',
                'Масштабируемая микросервисная архитектура',
                'Облачное развертывание с отказоустойчивостью',
                'REST API для системной интеграции',
                'Автоматизированное тестирование и мониторинг',
                'Шифрование данных и безопасное хранение',
                'Оптимизация производительности для высоких нагрузок'
            ]
        },
        capabilities: {
            title: 'Возможности Системы',
            items: [
                'Оценка плотности толпы в реальном времени',
                'Распознавание паттернов движения',
                'Обнаружение аномалий и оповещения',
                'Отслеживание заполненности и статистика',
                'Генерация тепловых карт использования пространства',
                'Автоматизированная система отчетности',
                'Интеграция с существующими системами безопасности',
                'Анализ исторических данных и тенденций'
            ]
        }
    }
}; 