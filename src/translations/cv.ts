export interface Job {
  title: string;
  location: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Translations {
  [key: string]: {
    switchButton: string;
    fullName: string;
    position: string;
    sections: {
      contacts: {
        title: string;
        phone: string;
        portfolio: string;
        scanQR: string;
      };
      experience: {
        title: string;
        techStack: string;
        jobs: Job[];
      };
      skills: {
        title: string;
        items: string[];
      };
      education: {
        title: string;
        items: string[];
      };
      additional: {
        title: string;
        items: string[];
      };
      buttons: {
        savePDF: string;
      };
    };
  };
}

export const translations: Translations = {
  ru: {
    switchButton: 'English',
    fullName: 'Орлов Андрей Анатольевич',
    position: 'Tech Lead, Full Stack Developer',
    sections: {
      contacts: {
        title: 'Контакты',
        phone: 'Телефон',
        portfolio: 'Портфолио',
        scanQR: 'Отсканируйте для перехода на сайт'
      },
      experience: {
        title: 'Опыт работы',
        techStack: 'Технологии',
        jobs: [
          {
            title: 'Tech Lead, Itelma SP (Июнь 2023 - Настоящее время)',
            location: 'Москва, itelma.ru',
            responsibilities: [
              'Руководство и разработка программного обеспечения для реализации проектов и бизнес-целей.',
              'Взаимодействие с клиентами, анализ их потребностей и внедрение оптимальных решений.',
              'Разработка и внедрение систем автоматизации производственных процессов, мониторинга и анализа данных.',
              'Разработка алгоритмов и машинное обучение для автопилотов.',
              'Тестирование и отладка алгоритмов, обеспечение стабильной работы.',
              'Оптимизация backend (Next.js, NestJS, .NET Core) для работы с большими объемами данных.'
            ],
            technologies: [
              'Angular', 'Vue.js', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', '.NET Core', 
              'C#', 'MongoDB', 'PostgreSQL', 'MSSQL', 'Docker', 'Kubernetes', 'Cesium', 'AI'
            ]
          },
          {
            title: 'Fullstack Developer, Urent (Май 2022 - Март 2024)',
            location: 'Москва, urent.ru',
            responsibilities: [
              'Разработка фронтенда (Angular 15) и интерфейсов для управления самокатами.',
              'Создание интерактивных компонентов и элементов управления.',
              'Интеграция с бэкендом (.NET Core, C#), работа с REST API и WebSocket.',
              'Разработка системы архивации данных (MongoDB, PostgreSQL), дедупликация и восстановление данных.',
              'Оптимизация серверной части: анализ нагрузки, индексирование, кэширование.'
            ],
            technologies: [
              'Angular 15', 'TypeScript', '.NET Core', 'C#', 'C++', 'MongoDB', 'PostgreSQL', 
              'Индексирование', 'кэширование', 'балансировка нагрузки'
            ]
          },
          {
            title: 'Ведущий инженер-программист, The NASDAQ Trimble Rus (Июль 2020 - Май 2022)',
            location: 'Москва, www.trimble.com',
            responsibilities: [
              'Разработка WEB-приложений (Angular, Vue), взаимодействие с серверной частью.',
              'Разработка RESTful API и GraphQL API на Node.js.',
              'Разработка унифицированных протоколов обмена, интеграция с устройствами на Linux.',
              'Разработка драйверов для геодезических роботизированных систем, камер и датчиков.',
              'Разработка облачных решений, масштабирование (Kubernetes, Docker).'
            ],
            technologies: [
              'Angular', 'Vue', 'Node.js', 'REST API', 'GraphQL', 'Kubernetes', 'Docker', 
              'C/C++', 'Yocto', 'RabbitMQ', 'gRPC', 'Mosquitto', 'ioFOG'
            ]
          },
          {
            title: 'Ведущий инженер, НАВИС, КБ (Январь 2017 - Июнь 2020)',
            location: 'Москва, www.navis.ru',
            responsibilities: [
              'Разработка кроссплатформенных приложений (Android, iOS, Mac, Windows).',
              'Использование C#/C++/Java, Xamarin, MAUI.',
              'Интеграция с оборудованием (тахографы, SmartCardRider).',
              'Разработка UI/UX и интерактивных интерфейсов.',
              'Разработка систем лицензирования и сертификации, алгоритмов анализа данных.'
            ],
            technologies: ['C#', 'C++', 'Java', 'Xamarin', 'MAUI', 'Android', 'iOS']
          },
          {
            title: 'Начальник научно-технического отдела, РНТ, ЗАО (Январь 2013 - Январь 2017)',
            location: 'Москва, www.rnt.ru',
            responsibilities: [
              'Разработка защищенных клиент/серверных систем.',
              'Интеграция с системами видеонаблюдения и оборудованием безопасности.',
              'Разработка драйверов для систем безопасности и датчиков.',
              'Реализация протоколов обмена данными (робототехника, магнитометры, температурные датчики).',
              'Оптимизация и защита обмена данными, интеграция с существующими системами.'
            ]
          }
        ]
      },
      skills: {
        title: 'Навыки',
        items: [
          'Frontend: Vue.js, Angular, React',
          'Backend: Node.js, .NET Core, NestJS',
          'Базы данных: MongoDB, PostgreSQL, MSSQL',
          'DevOps: Docker, Kubernetes',
          'IoT, машинное обучение, AI'
        ]
      },
      education: {
        title: 'Образование',
        items: [
          'Авиационный институт (2005) -  эргономика технических систем и инженерная психология',
          'МГТУ "Станкин" (2012) - Инженер-программист',
          'Томский Государсвенным институт Систем управления и радиоэлектроники (2008) - Радиотехника',        
        ]
      },
      additional: {
        title: 'Дополнительная информация',
        items: [
          'Водительские права: категории A, B',
          'Знание языков: Русский (родной), Английский (B2), Японский (A1)'
        ]
      },
      buttons: {
        savePDF: 'PDF'
      }
    }
  },
  en: {
    switchButton: 'Русский',
    fullName: 'Andrey Orlov',
    position: 'Tech Lead, Full Stack Developer',
    sections: {
      contacts: {
        title: 'Contacts',
        phone: 'Phone',
        portfolio: 'Portfolio',
        scanQR: 'Scan to visit website'
      },
      experience: {
        title: 'Work Experience',
        techStack: 'Technologies',
        jobs: [
          {
            title: 'Tech Lead, Itelma SP (June 2023 - Present)',
            location: 'Moscow, itelma.ru',
            responsibilities: [
              'Leading and developing software for project implementation and business goals.',
              'Client interaction, needs analysis and implementation of optimal solutions.',
              'Development and implementation of industrial process automation, monitoring and data analysis systems.',
              'Development of algorithms and machine learning for autopilots.',
              'Testing and debugging algorithms, ensuring stable operation.',
              'Backend optimization (Next.js, NestJS, .NET Core) for handling large data volumes.'
            ],
            technologies: [
              'Angular', 'Vue.js', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', '.NET Core', 
              'C#', 'MongoDB', 'PostgreSQL', 'MSSQL', 'Docker', 'Kubernetes', 'Cesium', 'AI'
            ]
          },
          {
            title: 'Fullstack Developer, Urent (May 2022 - March 2024)',
            location: 'Moscow, urent.ru',
            responsibilities: [
              'Frontend development (Angular 15) and interfaces for managing scooters.',
              'Creating interactive components and controls.',
              'Integration with backend (.NET Core, C#), working with REST API and WebSocket.',
              'Development of data archiving system (MongoDB, PostgreSQL), deduplication and data recovery.',
              'Backend optimization: load analysis, indexing, caching.'
            ],
            technologies: [
              'Angular 15', 'TypeScript', '.NET Core', 'C#', 'C++', 'MongoDB', 'PostgreSQL', 
              'Indexing', 'Caching', 'Load Balancing'
            ]
          },
          {
            title: 'Senior Software Engineer, The NASDAQ Trimble Rus (July 2020 - May 2022)',
            location: 'Moscow, www.trimble.com',
            responsibilities: [
              'Development of WEB applications (Angular, Vue), interaction with backend.',
              'Development of RESTful API and GraphQL API on Node.js.',
              'Development of unified communication protocols, integration with devices on Linux.',
              'Development of drivers for geodetic robotic systems, cameras and sensors.',
              'Development of cloud solutions, scaling (Kubernetes, Docker).'
            ],
            technologies: [
              'Angular', 'Vue', 'Node.js', 'REST API', 'GraphQL', 'Kubernetes', 'Docker', 
              'C/C++', 'Yocto', 'RabbitMQ', 'gRPC', 'Mosquitto', 'ioFOG'
            ]
          },
          {
            title: 'Senior Engineer, NAVIS, KB (January 2017 - June 2020)',
            location: 'Moscow, www.navis.ru',
            responsibilities: [
              'Development of cross-platform applications (Android, iOS, Mac, Windows).',
              'Using C#/C++/Java, Xamarin, MAUI.',
              'Integration with equipment (tachographs, SmartCardRider).',
              'Development of UI/UX and interactive interfaces.',
              'Development of licensing and certification systems, data analysis algorithms.'
            ],
            technologies: ['C#', 'C++', 'Java', 'Xamarin', 'MAUI', 'Android', 'iOS']
          },
          {
            title: 'Head of the Scientific and Technical Department, RNT, JSC (January 2013 - January 2017)',
            location: 'Moscow, www.rnt.ru',
            responsibilities: [
              'Development of secure client/server systems.',
              'Integration with video surveillance and security systems.',
              'Development of drivers for security systems and sensors.',
              'Implementation of communication protocols (robotics, magnetometers, temperature sensors).',
              'Optimization and protection of data exchange, integration with existing systems.'
            ]
          }
        ]
      },
      skills: {
        title: 'Skills',
        items: [
          'Frontend: Vue.js, Angular, React',
          'Backend: Node.js, .NET Core, NestJS',
          'Databases: MongoDB, PostgreSQL, MSSQL',
          'DevOps: Docker, Kubernetes',
          'IoT, Machine Learning, AI'
        ]
      },
      education: {
        title: 'Education',
        items: [
          'Aviation Institute (2005) - Ergonomics of Technical Systems and Engineering Psychology',
          'MSTU "Stankin" (2012) - Software Engineer',
          'TUSUR - Tomsk State University of Control Systems and Radioelectronics (2008) - Radio Engineering',       
        ]
      },
      additional: {
        title: 'Additional Information',
        items: [
          'Driver\'s License: Categories A, B',
          'Languages: Russian (Native), English (B2), Japanese (A1)'
        ]
      },
      buttons: {
        savePDF: 'PDF'
      }
    }
  }
}; 