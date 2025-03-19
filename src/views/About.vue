<template>
    <div class="about-container">
        <section class="hero">
            <h1>{{ t.title }}</h1>
            <p class="subtitle">{{ t.subtitle }}</p>
        </section>

        <section class="tech-section">
            <h2>{{ t.coreTech }}</h2>
            <div class="tech-grid">
                <div class="tech-card">
                    <h3>{{ t.frontendArch.title }}</h3>
                    <ul>
                        <li>{{ t.frontendArch.component.title }}
                            <p>{{ t.frontendArch.component.desc }}</p>
                        </li>
                        <li>{{ t.frontendArch.state.title }}
                            <p>{{ t.frontendArch.state.desc }}</p>
                        </li>
                        <li>{{ t.frontendArch.routing.title }}
                            <p>{{ t.frontendArch.routing.desc }}</p>
                        </li>
                    </ul>
                </div>

                <div class="tech-card">
                    <h3>{{ t.apiIntegration.title }}</h3>
                    <ul>
                        <li>{{ t.apiIntegration.rest.title }}
                            <p>{{ t.apiIntegration.rest.desc }}</p>
                        </li>
                        <li>{{ t.apiIntegration.data.title }}
                            <p>{{ t.apiIntegration.data.desc }}</p>
                        </li>
                        <li>{{ t.apiIntegration.error.title }}
                            <p>{{ t.apiIntegration.error.desc }}</p>
                        </li>
                    </ul>
                </div>

                <div class="tech-card">
                    <h3>{{ t.bestPractices.title }}</h3>
                    <ul>
                        <li>{{ t.bestPractices.typescript.title }}
                            <p>{{ t.bestPractices.typescript.desc }}</p>
                        </li>
                        <li>{{ t.bestPractices.responsive.title }}
                            <p>{{ t.bestPractices.responsive.desc }}</p>
                        </li>
                        <li>{{ t.bestPractices.performance.title }}
                            <p>{{ t.bestPractices.performance.desc }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="implementation">
            <h2>{{ t.implementation.title }}</h2>
            <p>{{ t.implementation.description }}</p>
            <ul class="framework-list">
                <li v-for="framework in t.implementation.frameworks" :key="framework.name">
                    <strong>{{ framework.name }}:</strong> {{ framework.desc }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { translations } from '@/translations/about';

const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
.about-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
    border-radius: 8px;
    color: white;
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.2em;
    opacity: 0.9;
    margin: 0;
}

.tech-section {
    margin-bottom: 60px;
}

.tech-section h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.tech-card {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.tech-card:hover {
    transform: translateY(-5px);
}

.tech-card h3 {
    color: #42b983;
    margin-top: 0;
    margin-bottom: 20px;
}

.tech-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.tech-card li {
    margin-bottom: 20px;
    color: #2c3e50;
    font-weight: 500;
}

.tech-card li p {
    margin: 5px 0 0;
    color: #666;
    font-weight: normal;
    font-size: 0.9em;
}

.implementation {
    background: #f8f9fa;
    padding: 40px;
    border-radius: 8px;
    margin-top: 60px;
}

.implementation h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 20px;
}

.framework-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
}

.framework-list li {
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;
    color: #666;
}

.framework-list li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

@media (max-width: 768px) {
    .hero {
        padding: 30px 15px;
    }

    .hero h1 {
        font-size: 2em;
    }

    .tech-grid {
        grid-template-columns: 1fr;
    }

    .implementation {
        padding: 20px;
    }
}
</style> 