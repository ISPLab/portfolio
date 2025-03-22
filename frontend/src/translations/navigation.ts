export interface NavigationTranslation {
    portfolio: string;
    projects: {
        title: string;
        items: {
            cocktails: string;
            router: string;
            czca: string;
            visionMap: string;
            smartMerch: string;
            trackfleet: string;
            aiPianist: string;
            socialMedia: string;
            websiteChat: string;
            cityQuests: string;
            lumeiraWellness: string;
            butlerSystem: string;
            nuanaData: string;
            auroraMedia: string;
            propertySales: string;
        };
    };
    cv: string;
    about: string;
    aiPianist: string;
    socialMedia: string;
    websiteChat: string;
    cityQuests: string;
    lumeiraWellness: string;
    butlerSystem: string;
    feedback: string;
}

export interface NavigationTranslations {
    [key: string]: NavigationTranslation;
}

export const translations: NavigationTranslations = {
    en: {
        portfolio: 'Portfolio',
        projects: {
            title: 'Projects',
            items: {
                cocktails: 'Cocktail Menu',
                router: 'Smart Router',
                czca: 'Crowd Analysis',
                visionMap: 'VisionMap Integrator',
                smartMerch: 'SmartMerch',
                trackfleet: 'TrackFleet - Vehicle Monitoring',
                aiPianist: 'AI Pianist',
                socialMedia: 'Social Media',
                websiteChat: 'Website Chat',
                cityQuests: 'City Quests',
                lumeiraWellness: 'Lumeira Wellness',
                butlerSystem: 'Butler System',
                nuanaData: 'Nuana Data Center',
                auroraMedia: 'Aurora Media Park',
                propertySales: 'Property Sales'
            }
        },
        cv: 'CV',
        about: 'About',
        aiPianist: 'AI Pianist',
        socialMedia: 'Social Media',
        websiteChat: 'Website Chat',
        cityQuests: 'City Quests',
        lumeiraWellness: 'Lumeira Wellness',
        butlerSystem: 'Butler System',
        feedback: 'Feedback'
        // ... other projects
    },
    ru: {
        portfolio: 'Портфолио',
        projects: {
            title: 'Проекты',
            items: {
                cocktails: 'Меню Коктейлей',
                router: 'Умный Роутер',
                czca: 'Анализ Толпы',
                visionMap: 'Интегратор VisionMap',
                smartMerch: 'SmartMerch',
                trackfleet: 'ТрэкФлит - Мониторинг Транспорта',
                aiPianist: 'ИИ Пианист',
                socialMedia: 'Социальные сети',
                websiteChat: 'Чат для сайта',
                cityQuests: 'Городские квесты',
                lumeiraWellness: 'Lumeira Wellness',
                butlerSystem: 'Система Батлер',
                nuanaData: 'Дата-центр Nuana',
                auroraMedia: 'Медиапарк Аврора',
                propertySales: 'Продажа недвижимости'
            }
        },
        cv: 'Резюме',
        about: 'Обо мне',
        aiPianist: 'AI Pianist',
        socialMedia: 'Социальные сети',
        websiteChat: 'Чат для сайта',
        cityQuests: 'Городские квесты',
        lumeiraWellness: 'Lumeira Wellness',
        butlerSystem: 'Система Батлер',
        feedback: 'Отзывы'
        // ... other projects
    }
}; 