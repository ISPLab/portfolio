export interface NavigationTranslations {
    [key: string]: {
        projects: {
            title: string;
            items: {
                [key: string]: string;
            };
        };
        // ... other navigation sections
    };
}

export const translations: NavigationTranslations = {
    en: {
        projects: {
            title: 'Projects',
            items: {
                cocktails: 'Cocktail Menu',
                router: 'Smart Router',
                czca: 'Crowd Analysis'
                // ... other projects
            }
        }
        // ... other sections
    },
    ru: {
        projects: {
            title: 'Проекты',
            items: {
                cocktails: 'Меню Коктейлей',
                router: 'Умный Роутер',
                czca: 'Анализ Толпы'
                // ... other projects
            }
        }
        // ... other sections
    }
}; 