export interface RouterDeviceTranslations {
    [key: string]: {
        title: string;
        description: string;
        intro: {
            problem: string;
            solution: string;
            benefits: string;
        };
        hardware: {
            title: string;
            features: string[];
        };
        software: {
            title: string;
            features: string[];
        };
        smart: {
            title: string;
            features: string[];
        };
        energy: {
            title: string;
            subtitle: string;
            features: string[];
        };
        access: {
            title: string;
            subtitle: string;
            features: string[];
        };
        remote: {
            title: string;
            subtitle: string;
            features: string[];
        };
        conclusion: {
            title: string;
            text: string;
        };
    };
}

export const translations: RouterDeviceTranslations = {
    en: {
        title: 'Smart Router Device Project',
        intro: {
            problem: 'Sometimes you want to leave your phone at home, not depend on constant notifications, but still maintain control over your space. It\'s impossible to completely abandon gadgets – the modern world requires accessibility and security.',
            solution: 'But why carry a bunch of keys, access cards, passes, and a smartphone just for navigation, when you can combine everything in one device? It contains only the essentials that the user can choose and configure themselves. Compact and stylish, it takes up no more space than a set of keys, while providing full control over access and security.',
            benefits: 'And if you need to find your way, quickly navigate in space or receive important notifications, the device helps even without a smartphone. The energy-efficient system and advanced autonomy allow you to use it for several weeks without recharging, ensuring reliability in any situation.'
        },
        description: 'An innovative IoT device that combines modern networking capabilities with smart home features. This project showcases hardware and software integration using cutting-edge technologies.',
        hardware: {
            title: 'Hardware Features',
            features: [
                'High-performance networking chip',
                'Integrated IoT capabilities',
                'Energy-efficient design',
                'Compact form factor'
            ]
        },
        software: {
            title: 'Software Stack',
            features: [
                'Custom firmware development',
                'Real-time monitoring system',
                'Web-based management interface',
                'Automated updates'
            ]
        },
        smart: {
            title: 'Smart Features',
            features: [
                'Network traffic analysis',
                'Security threat detection',
                'Device management',
                'Performance optimization'
            ]
        },
        energy: {
            title: 'Energy Efficiency',
            subtitle: 'Smart home with minimal energy consumption',
            features: [
                'Power optimization - device uses power-saving mode, automatically disabling unused modules',
                'Solar power and low-voltage technologies - ability to work from solar panels or economical battery',
                'Automatic sleep mode - minimizes energy consumption during inactivity',
                'Adaptive power consumption - identifies peak loads and reduces consumption in unused zones',
                'Intelligent lighting and appliance control - analyzes human presence and turns off unnecessary devices',
                'USB-C charging and wireless power - convenience and flexibility in installation'
            ]
        },
        access: {
            title: 'Contactless Access',
            subtitle: 'Instead of keys and cards',
            features: [
                'Door unlocking via NFC, Bluetooth, Wi-Fi or biometrics (face, fingerprint)',
                'Virtual key support - access can be shared with family members or guests via app',
                'Integration with electronic locks - compatibility with popular smart home systems (Aqara, Nuki, Yale, August, etc.)',
                'Code access support - ability to enter temporary PIN code for guests or couriers',
                'Geolocation-based door opening - device automatically unlocks entrance when owner approaches home',
                'Entry history and remote control - visit log and access control from anywhere in the world'
            ]
        },
        remote: {
            title: 'Outside Home Use',
            subtitle: 'Remote control and navigation integration',
            features: [
                'Door and window status check - notifications about closing/opening',
                'Geofences - scenario activation when approaching or moving away from home',
                'Car integration - keyless unlocking of car, garage or charging station',
                'Seamless work with smart city services - opening smart barriers, mailboxes and checkpoints'
            ]
        },
        conclusion: {
            title: 'Result: comfort, security and energy efficiency in one device',
            text: 'This IoT gadget allows you to completely abandon keys, cards and remotes, reduces energy consumption, and makes smart home more autonomous and eco-friendly.'
        }
    },
    ru: {
        title: 'Проект Умного Роутера',
        intro: {
            problem: 'Иногда хочется оставить телефон дома, не зависеть от постоянных уведомлений, но при этом не терять контроль над своим пространством. Полностью отказаться от гаджетов невозможно – современный мир требует доступности и безопасности.',
            solution: 'Но зачем таскать с собой связку ключей, карты доступа, пропуски, а смартфон только для навигации, если можно объединить всё в одном устройстве? Оно содержит только самое необходимое, которое пользователь может сам выбрать и настроить. Компактное и стильное, оно занимает не больше места, чем связка ключей, но при этом дает полный контроль над доступом и безопасностью.',
            benefits: 'А если вам нужно найти дорогу, быстро сориентироваться в пространстве или получить важные уведомления, устройство поможет даже без смартфона. Энергоэффективная система и продвинутая автономность позволяют использовать его в течение нескольких недель без подзарядки, обеспечивая надежность в любой ситуации.'
        },
        description: 'Инновационное IoT устройство, объединяющее современные сетевые возможности с функциями умного дома. Этот проект демонстрирует интеграцию аппаратного и программного обеспечения с использованием передовых технологий.',
        hardware: {
            title: 'Аппаратные характеристики',
            features: [
                'Высокопроизводительный сетевой чип',
                'Встроенные IoT возможности',
                'Энергоэффективный дизайн',
                'Компактный форм-фактор'
            ]
        },
        software: {
            title: 'Программный стек',
            features: [
                'Разработка кастомной прошивки',
                'Система мониторинга в реальном времени',
                'Веб-интерфейс управления',
                'Автоматические обновления'
            ]
        },
        smart: {
            title: 'Умные функции',
            features: [
                'Анализ сетевого трафика',
                'Обнаружение угроз безопасности',
                'Управление устройствами',
                'Оптимизация производительности'
            ]
        },
        energy: {
            title: 'Энергоэффективность',
            subtitle: 'Умный дом с минимальным энергопотреблением',
            features: [
                'Оптимизация энергопотребления – устройство использует энергосберегающий режим, автоматически отключая неиспользуемые модули',
                'Солнечное питание и низковольтные технологии – возможность работы от солнечных панелей или экономичного аккумулятора',
                'Автоматический переход в "спящий режим" – минимизирует расход энергии при отсутствии активности',
                'Адаптивное энергопотребление – определяет пиковые нагрузки и снижает потребление в неиспользуемых зонах',
                'Интеллектуальный контроль освещения и электроприборов – устройство анализирует присутствие людей и отключает ненужные приборы',
                'Зарядка и работа от USB-C или беспроводного питания – удобство и гибкость в установке'
            ]
        },
        access: {
            title: 'Бесконтактный доступ',
            subtitle: 'Вместо ключей и карточек',
            features: [
                'Разблокировка дверей через NFC, Bluetooth, Wi-Fi или по биометрии (лицо, отпечаток пальца)',
                'Поддержка виртуальных ключей – доступ можно передавать членам семьи или гостям через приложение',
                'Интеграция с электронными замками – совместимость с популярными системами умного дома (Aqara, Nuki, Yale, August, и др.)',
                'Поддержка кодового доступа – возможность ввода временного PIN-кода для гостей или курьеров',
                'Открытие дверей по геолокации – устройство автоматически разблокирует вход, когда владелец приближается к дому',
                'История входов и удаленное управление – журнал посещений и возможность контроля доступа из любой точки мира'
            ]
        },
        remote: {
            title: 'Использование вне дома',
            subtitle: 'Удаленный контроль и интеграция с навигацией',
            features: [
                'Проверка статуса дверей и окон – уведомления о закрытии/открытии',
                'Геозоны – активация сценариев при приближении или отдалении от дома',
                'Интеграция с автомобилем – разблокировка машины, гаража или зарядной станции без ключа',
                'Бесшовная работа с умными городскими сервисами – открытие умных шлагбаумов, почтовых ящиков и пропускных пунктов'
            ]
        },
        conclusion: {
            title: 'Итог: комфорт, безопасность и энергоэффективность в одном устройстве',
            text: 'Этот IoT-гаджет позволяет полностью отказаться от ключей, карт и пультов, снижает энергопотребление, и делает умный дом более автономным и экологичным.'
        }
    }
}; 