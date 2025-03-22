export interface CocktailPageTranslations {
    [key: string]: {
        title: string;
        description: string;
        features: {
            responsive: {
                title: string;
                description: string;
            };
            tech: {
                title: string;
                description: string;
            };
            api: {
                title: string;
                description: string;
            };
        };
        technical: {
            title: string;
            items: string[];
        };
    };
}

export const translations: CocktailPageTranslations = {
    en: {
        title: 'Cocktail Menu Project',
        description: 'This project demonstrates modern web development practices and responsive design. It showcases the ability to use a single web application as a UI for both mobile and desktop platforms, seamlessly adapting from 360 pixels wide screens to larger desktop displays. As part of the portfolio at maxbitsol.vercel.app, it highlights efficient and flexible front-end development, ensuring a smooth user experience across different devices.',
        features: {
            responsive: {
                title: 'Responsive Design',
                description: 'Fully adaptive layout that works perfectly on all devices from mobile to desktop'
            },
            tech: {
                title: 'Modern Technologies',
                description: 'Built with Vue 3, TypeScript, and Pinia for robust state management'
            },
            api: {
                title: 'API Integration',
                description: 'Real-time data fetching with efficient error handling and loading states'
            }
        },
        technical: {
            title: 'Technical Features',
            items: [
                'State manager for data caching',
                'Error handling during loading',
                'Dynamic menu based on cocktail_code',
                'Active menu item highlighting',
                'Redirect from "/" to first menu item',
                '404 error handling',
                'Fluid layout (1024px - 360px)',
                'Image lazy-loading'
            ]
        }
    },
    ru: {
        title: 'Проект Меню Коктейлей',
        description: 'Этот проект демонстрирует современные практики веб-разработки и адаптивный дизайн. Он показывает возможность использования одного веб-приложения в качестве интерфейса как для мобильных, так и для десктопных платформ, плавно адаптируясь от экранов шириной 360 пикселей до больших десктопных дисплеев. Как часть портфолио на maxbitsol.vercel.app, он подчеркивает эффективную и гибкую фронтенд-разработку, обеспечивая плавный пользовательский опыт на различных устройствах.',
        features: {
            responsive: {
                title: 'Адаптивный дизайн',
                description: 'Полностью адаптивная верстка, отлично работающая на всех устройствах от мобильных до десктопных'
            },
            tech: {
                title: 'Современные технологии',
                description: 'Создано с использованием Vue 3, TypeScript и Pinia для надежного управления состоянием'
            },
            api: {
                title: 'Интеграция с API',
                description: 'Получение данных в реальном времени с эффективной обработкой ошибок и состояний загрузки'
            }
        },
        technical: {
            title: 'Технические характеристики',
            items: [
                'Менеджер состояния для кэширования данных',
                'Обработка ошибок при загрузке',
                'Динамическое меню на основе cocktail_code',
                'Выделение активного пункта меню',
                'Редирект с "/" на первый пункт меню',
                'Обработка 404 ошибки',
                'Резиновая верстка (1024px - 360px)',
                'Lazy-loading изображений'
            ]
        }
    }
}; 