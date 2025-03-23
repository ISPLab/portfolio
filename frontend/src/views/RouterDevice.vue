<template>
    <div class="router-container">
        <section class="project-info">
            <h1>{{ t.title }}</h1>
            <div class="project-screenshot">
                <img 
                    src="@/assets/projects/route-device.jpeg"
                    alt="Router Device"
                    loading="lazy"
                />
            </div>
            <div class="intro-section">
                <p class="intro-text problem">
                    {{ t.intro.problem }}
                </p>
                <p class="intro-text solution">
                    {{ t.intro.solution }}
                </p>
                <p class="intro-text benefits">
                    {{ t.intro.benefits }}
                </p>
            </div>

            <p class="description">
                {{ t.description }}
            </p>

      

            <div class="tech-features">
                <div class="feature">
                    <h3>{{ t.hardware.title }}</h3>
                    <ul>
                        <li v-for="feature in t.hardware.features" :key="feature">
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div class="feature">
                    <h3>{{ t.software.title }}</h3>
                    <ul>
                        <li v-for="feature in t.software.features" :key="feature">
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div class="feature">
                    <h3>{{ t.smart.title }}</h3>
                    <ul>
                        <li v-for="feature in t.smart.features" :key="feature">
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="feature-section energy">
            <h2>{{ t.energy.title }}</h2>
            <p class="subtitle">{{ t.energy.subtitle }}</p>
            <ul class="feature-list">
                <li v-for="feature in t.energy.features" :key="feature">
                    {{ feature }}
                </li>
            </ul>
        </section>

        <section class="feature-section access">
            <h2>{{ t.access.title }}</h2>
            <p class="subtitle">{{ t.access.subtitle }}</p>
            <ul class="feature-list">
                <li v-for="feature in t.access.features" :key="feature">
                    {{ feature }}
                </li>
            </ul>
        </section>

        <section class="feature-section remote">
            <h2>{{ t.remote.title }}</h2>
            <p class="subtitle">{{ t.remote.subtitle }}</p>
            <ul class="feature-list">
                <li v-for="feature in t.remote.features" :key="feature">
                    {{ feature }}
                </li>
            </ul>
        </section>

        <section class="conclusion">
            <h2>{{ t.conclusion.title }}</h2>
            <p>{{ t.conclusion.text }}</p>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { translations } from '@/translations/router-device';

const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);

const t = computed(() => translations[currentLanguage.value]);
</script>

<style scoped>
.router-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.project-info {
    max-width: 800px;
    margin: 0 auto 40px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-info h1 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 2em;
}

.description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
}

.project-screenshot {
    margin: 30px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #f8f9fa;
}

.project-screenshot img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.project-screenshot:hover img {
    transform: scale(1.02);
}

.tech-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.feature {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 3px solid #42b983;
}

.feature h3 {
    color: #42b983;
    margin: 0 0 15px 0;
    font-size: 1.2em;
}

.feature ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature li {
    color: #666;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.feature li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

.project-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.view-project-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 500;
    transition: all 0.3s ease;
}

.view-project-btn.github {
    background: #24292e;
}

.view-project-btn:hover {
    transform: translateY(-2px);
}

.view-project-btn.github:hover {
    background: #2f363d;
}

.github-icon {
    width: 20px;
    height: 20px;
}

.feature-section {
    margin: 40px 0;
    padding: 30px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-section h2 {
    color: #42b983;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 1.1em;
    margin-bottom: 20px;
}

.feature-list {
    list-style: none;
    padding: 0;
}

.feature-list li {
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    line-height: 1.5;
}

.feature-list li::before {
    content: "✅";
    position: absolute;
    left: 0;
}

.conclusion {
    margin: 40px 0;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
}

.conclusion h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.conclusion p {
    color: #666;
    line-height: 1.6;
}

.intro-section {
    margin: 30px 0;
    padding: 25px;
    background: linear-gradient(135deg, #42b98311 0%, #2c3e5011 100%);
    border-radius: 8px;
    border-left: 4px solid #42b983;
}

.intro-text {
    color: #2c3e50;
    line-height: 1.7;
    margin-bottom: 20px;
    font-size: 1.1em;
}

.intro-text:last-child {
    margin-bottom: 0;
}

.intro-text.problem {
    font-style: italic;
    color: #666;
}

.intro-text.solution {
    font-weight: 500;
}

.intro-text.benefits {
    color: #42b983;
    font-weight: 500;
}

@media (max-width: 768px) {
    .project-info {
        padding: 15px;
    }

    .project-info h1 {
        font-size: 1.8em;
    }

    .tech-features {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .project-screenshot {
        margin: 20px 0;
    }

    .project-links {
        flex-direction: column;
        align-items: center;
    }

    .view-project-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
        padding: 12px 25px;
        font-size: 1em;
    }

    .feature-section {
        padding: 20px;
        margin: 20px 0;
    }

    .feature-section h2 {
        font-size: 1.5em;
    }

    .subtitle {
        font-size: 1em;
    }

    .conclusion {
        padding: 20px;
        margin: 20px 0;
    }

    .intro-section {
        padding: 20px;
        margin: 20px 0;
    }

    .intro-text {
        font-size: 1em;
        line-height: 1.6;
        margin-bottom: 15px;
    }
}
</style> 