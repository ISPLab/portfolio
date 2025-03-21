<template>
    <div class="smart-merch-container">
        <section class="project-info">
            <h1>{{ t.title }}</h1>
            <p class="description">
                {{ t.description }}
            </p>

            <div class="project-screenshot-wrapper">
                <div class="project-screenshot" @click="toggleVideo">
                    <img 
                        v-if="!isPlaying"
                        src="@/assets/projects/smart-merch-preview.png" 
                        alt="SmartMerch Preview"
                        loading="lazy"
                    />
                    <div v-if="!isPlaying" class="play-hint">
                        <span class="play-icon">▶</span>
                        {{ currentLanguage === 'en' ? 'Click to play video' : 'Нажмите для просмотра видео' }}
                    </div>
                    <video 
                        v-else
                        ref="videoPlayer"
                        src="@/assets/projects/smart-merch.mov"
                        controls
                        autoplay
                        @ended="isPlaying = false"
                    ></video>
                </div>
            </div>

            <div class="tech-features">
                <div class="feature">
                    <h3>{{ t.features.recommendations.title }}</h3>
                    <p>{{ t.features.recommendations.description }}</p>
                </div>
                <div class="feature">
                    <h3>{{ t.features.visualization.title }}</h3>
                    <p>{{ t.features.visualization.description }}</p>
                </div>
                <div class="feature">
                    <h3>{{ t.features.automation.title }}</h3>
                    <p>{{ t.features.automation.description }}</p>
                </div>
            </div>

            <div class="technical-features">
                <h2>{{ t.technical.title }}</h2>
                <ul class="feature-list">
                    <li v-for="item in t.technical.items" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="capabilities-section">
                <h2>{{ t.capabilities.title }}</h2>
                <ul class="feature-list">
                    <li v-for="item in t.capabilities.items" :key="item">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </section>

        <div class="project-links">
            <a href="https://github.com/yourusername/smart-merch" target="_blank" rel="noopener noreferrer" class="view-project-btn github">
                <svg class="github-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                View on GitHub
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { translations } from '@/translations/smart-merch';

const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);

const t = computed(() => translations[currentLanguage.value]);

const isPlaying = ref(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);

const toggleVideo = () => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value && videoPlayer.value) {
        videoPlayer.value.play();
    }
};
</script>

<style scoped>
.smart-merch-container {
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

.tech-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.feature {
    padding: 15px;
    background: #f8f9fa;
    border-radius: 6px;
    border-left: 3px solid #42b983;
}

.feature h3 {
    color: #42b983;
    margin: 0 0 10px 0;
    font-size: 1.2em;
}

.feature p {
    color: #666;
    margin: 0;
    font-size: 0.95em;
    line-height: 1.5;
}

.technical-features, .capabilities-section {
    margin-top: 40px;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 8px;
}

.technical-features h2, .capabilities-section h2 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 1.5em;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
}

.feature-list li {
    padding-left: 25px;
    position: relative;
    line-height: 1.5;
    color: #666;
}

.feature-list li::before {
    content: "✅";
    position: absolute;
    left: 0;
}

.project-screenshot-wrapper {
    position: relative;
    margin: 30px 0;
}

.project-screenshot {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #f8f9fa;
    cursor: pointer;
}

.play-hint {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 1;
    transition: transform 0.3s ease;
}

.play-icon {
    font-size: 1.2em;
}

.project-screenshot:hover .play-hint {
    transform: translate(-50%, -50%) scale(1.1);
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

.project-screenshot video {
    width: 100%;
    height: auto;
    display: block;
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
    background: #24292e;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 500;
    transition: all 0.3s ease;
}

.view-project-btn:hover {
    background: #2f363d;
    transform: translateY(-2px);
}

.github-icon {
    width: 20px;
    height: 20px;
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

    .technical-features, .capabilities-section {
        padding: 20px;
        margin-top: 30px;
    }

    .feature-list {
        grid-template-columns: 1fr;
        gap: 12px;
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
}
</style> 