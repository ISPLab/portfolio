<template>
    <div class="portfolio-container">
        <section class="hero">
            <div class="matrix-rain" ref="matrixContainer"></div>
            <div class="hero-content">
                <div class="profile-photo animate-in">
                    <div class="photo-border"></div>
                    <div class="photo-glow"></div>
                    <img src="@/assets/images/portfolio/photo.jpeg" alt="Profile Photo" class="pulse-image">
                </div>
                <h1>{{ t.title }}</h1>
                <div class="subtitle-container">
                    <p class="subtitle typewriter">{{ t.subtitle }}</p>
                </div>
            </div>
        </section>

        <section class="features">
            <h2>{{ t.featuredProjects }}</h2>

            <div class="feature-grid">
                <div class="feature-card">
                    <h3>{{ t.works }}</h3>
                    <ul>
                        <li v-for="item in t.worksList" :key="item">{{ item }}</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3>{{ t.devSkills }}</h3>
                    <ul>
                        <li v-for="item in t.skillsList" :key="item">{{ item }}</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3>{{ t.currentProjects }}</h3>
                    <ul>
                        <li v-for="item in t.projectsList" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="contact">
            <h2>{{ t.connect }}</h2>
            <div class="contact-info">
                <p>{{ t.connectText }}</p>
                <div class="social-links">
                    <a href="https://hh.ru/resume/5f7a7e21ff07e863f30039ed1f4d4830754c58" target="_blank"
                        class="social-link">
                        <img src="data:image/png;base64,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"
                            alt="HeadHunter" class="social-icon">
                        HeadHunter
                    </a>
                    <a href="https://github.com/isplab" target="_blank" class="social-link">
                        <img src="data:image/png;base64,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"
                            alt="GitHub" class="social-icon">
                        GitHub
                    </a>
                    <a href="https://t.me/for_orlov" target="_blank" class="social-link">
                        <img src="data:image/jpeg;base64,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"
                            alt="Telegram" class="social-icon">
                        Telegram</a>
                    <a href="mailto:for_orlov@mail.ru" class="social-link">
                        <img src="@/assets/images/portfolio/mail.png" alt="Mail"
                            class="social-icon">
                        Email</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onUnmounted } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import type { Translations } from '@/types/translations';

const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);
const matrixContainer = ref<HTMLDivElement | null>(null);
let animationInterval: number;

// Обновим массив с более длинными фрагментами кода
const codeSnippets = [
    "function () { }",
    "const data = { }",
    "export default",
    "import { ref }",
    "async/await",
    "try { } catch",
    "useState()",
    "useEffect()",
    "computed(() =>",
    "mounted() {",
    "methods: {",
    "props: {",
    "return new",
    "class App",
    "extends Vue",
    "interface",
    "type Props",
    "Promise<T>",
    ".filter()",
    ".map(item =>",
    "forEach((x)",
    "reduce((acc,",
    "npm install",
    "git commit",
    "docker run"
];

const createSymbol = () => {
    if (!matrixContainer.value) return;

    const symbol = document.createElement('span');
    symbol.classList.add('matrix-symbol');
    
    symbol.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    
    // Начальная позиция всегда сверху
    const x = Math.random() * 100;
    symbol.style.left = x + "%";
    symbol.style.top = "0%";
    
    symbol.style.fontSize = (Math.random() * 6 + 10) + "px";
    symbol.style.opacity = (Math.random() * 0.4 + 0.3).toString();
    
    matrixContainer.value.appendChild(symbol);

    let position = 0;
    const speed = 0.5 + Math.random() * 1; // Разная скорость для разных символов

    const animate = () => {
        position += speed;
        symbol.style.transform = `translateY(${position}px)`;

        // Если символ достиг низа, перемещаем его обратно наверх
        if (position > matrixContainer.value!.offsetHeight) {
            position = 0;
            symbol.style.left = Math.random() * 100 + "%"; // Новая случайная позиция по X
        }

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
};

onMounted(() => {
    // Создаем начальное количество символов
    for(let i = 0; i < 50; i++) {
        createSymbol();
    }
    // Добавляем новые символы периодически
    animationInterval = window.setInterval(() => {
        if (matrixContainer.value && matrixContainer.value.children.length < 200) { // Ограничиваем максимальное количество символов
            createSymbol();
        }
    }, 200);
});

onUnmounted(() => {
    if (animationInterval) {
        clearInterval(animationInterval);
    }
});

const translations: Translations = {
    en: {
        title: 'Portfolio',     
        subtitle: 'Hello! I\'m Andrey Orlov, a fullstack developer and hardwear engineer.',
        contact: 'Contact Me',
        email: 'Email',
        featuredProjects: 'Featured Projects',
        works: 'Works',
        worksList: [
            'Adaptive UI design for seamless experience across devices',
            'Real-time search and filtering for efficient data handling',
            'Optimized image gallery for fast load times',
            'API integration with high-performance scalability'
        ],
        devSkills: 'Development Skills',
        skillsList: [
            'Frontend: Vue.js, Angular, React',
            'Backend: Nest.js, .Net, Node.js',
            'Data Bases: PostgreSQL, MsSQL, MySQL, MongoDB',
            'DevOps: Docker, CI/CD, Kubernetes',
            'Testing & Documentation'
        ],
        currentProjects: 'Current Projects',
        projectsList: [
            'AI-powered applications',
            'Real estate platforms',
            'Social media integration',
            'Data visualization tools'
        ],
        connect: 'Contact',
        connectText: 'Looking for a developer who can bring your ideas to life? Let\'s talk!'
    },
    ru: {
        title: 'Портфолио',
        subtitle: 'Андрей Орлов, fullstack разработчик и инженер вычислительной техники.',      
        contact: 'Связаться со мной',
        email: 'Почта',
        featuredProjects: 'Избранные проекты',
        works: 'Работы',
        worksList: [
            'Адаптивный UI дизайн для всех устройств',
            'Поиск и фильтрация данных в реальном времени',
            'Оптимизированная галерея изображений',
            'API интеграция с высокой масштабируемостью'
        ],
        devSkills: 'Навыки разработки',
        skillsList: [
            'Фронтенд: Vue.js, Angular, React',
            'Бэкенд: Nest.js, .Net, Node.js',
            'Базы данных: PostgreSQL, MsSQL, MySQL, MongoDB',
            'DevOps: Docker, CI/CD, Kubernetes',
            'Тестирование и документация'
        ],
        currentProjects: 'Текущие проекты',
        projectsList: [
            'Приложения с использованием ИИ',
            'Платформы недвижимости',
            'Интеграция соцсетей',
            'Инструменты визуализации данных'
        ],
        connect: 'Связаться',
        connectText: 'Ищете разработчика, который воплотит ваши идеи в жизнь? Давайте обсудим!'
    }
};

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
.portfolio-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.hero {
    position: relative;
    text-align: center;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #030b07 0%, #2c3e50 100%);
    background-size: 400% 400%;
    /* animation: gradientAnimation 15s ease infinite; */
    color: white;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
}

.matrix-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 1;
    mask-image: linear-gradient(
        to bottom,
        black 50%,
        transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to bottom,
        black 50%,
        transparent 100%
    );
}

.matrix-symbol {
    position: absolute;
    color: #00ff00;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    user-select: none;
    white-space: nowrap;
    will-change: transform;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.profile-photo {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: visible;
}

.profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    filter: brightness(1.05) contrast(1.05);
}

.photo-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
    animation: glow 3s infinite;
    pointer-events: none;
}

.pulse-image {
    animation: pulseImage 6s infinite;
}

.photo-border {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: pulse 3s infinite;
}

.profile-photo:hover img {
    transform: scale(1.05);
    filter: brightness(1.1) contrast(1.1) saturate(1.1);
}

.animate-in {
    animation: fadeIn 0.8s ease-out;
}

@keyframes pulseImage {
    0% {
        transform: scale(1);
        filter: brightness(1.05) contrast(1.05);
    }

    50% {
        transform: scale(1.02);
        filter: brightness(1.08) contrast(1.08) saturate(1.05);
    }

    100% {
        transform: scale(1);
        filter: brightness(1.05) contrast(1.05);
    }
}

@keyframes glow {
    0% {
        opacity: 0.5;
        transform: scale(1);
    }

    50% {
        opacity: 0.7;
        transform: scale(1.15);
    }

    100% {
        opacity: 0.5;
        transform: scale(1);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    50% {
        transform: scale(1.05);
        opacity: 0.3;
    }

    100% {
        transform: scale(1);
        opacity: 0.6;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
    margin-bottom: 10px;
}

.subtitle-container {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    border-right: 2px solid transparent;
    direction: rtl;
}

.typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    direction: ltr;
    text-align: left;
    width: 0;
    animation: 
        typing 4s steps(40, end) forwards,
        blink-caret .75s step-end 4s infinite;
}

@keyframes typing {
    from { 
        width: 0;
    }
    to { 
        width: 100%;
    }
}

@keyframes blink-caret {
    from, to { border-right: 2px solid transparent }
    50% { border-right: 2px solid #fff }
}

.subtitle {
    font-size: 1.2em;
    opacity: 0.9;
    margin: 0;
    display: inline-block;
}

.features {
    margin-bottom: 60px;
}

.features h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

.feature-card {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #42b983;
    margin-top: 0;
    margin-bottom: 15px;
}

.feature-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-card li {
    color: #666;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.feature-card li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

.contact {
    text-align: center;
    padding: 40px;
    background: #f8f9fa;
    border-radius: 8px;
}

.contact h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.contact-info p {
    color: #666;
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.social-link:hover {
    background: #3aa876;
}

.social-icon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background: white;
    padding: 2px;
}

@media (max-width: 768px) {
    .hero {
        padding: 30px 15px;
    }

    .hero h1 {
        font-size: 2em;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .social-links {
        flex-direction: column;
        align-items: center;
    }

    .social-link {
        width: 200px;
    }

    .profile-photo {
        width: 150px;
        height: 150px;
    }

    .subtitle {
        font-size: 1em;
    }
}

@media (max-width: 480px) {
    .subtitle {
        font-size: 0.9em;
    }
}
</style>