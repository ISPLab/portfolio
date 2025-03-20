<template>
    <div class="feedback-container">
        <div class="feedback-header">
            <h1>{{ t.title }}</h1>
            <router-link to="/feedback/create" class="create-feedback-button">
                {{ t.createFeedback }}
            </router-link>
        </div>
        <div class="feedback-grid">
            <div v-for="feedback in feedbacks" :key="feedback.id" class="feedback-card">
                <div class="feedback-header">
                    <img :src="feedback.clientLogo" :alt="feedback.clientName" class="client-logo" v-if="feedback.clientLogo">
                    <h3>{{ feedback.clientName }}</h3>
                    <div class="project-date">{{ feedback.date }}</div>
                </div>
                <div class="project-name">{{ feedback.projectName }}</div>
                <div class="feedback-content">{{ feedback.content }}</div>
                <div class="rating">
                    <span v-for="i in 5" :key="i" class="star" 
                          :class="{ filled: i <= feedback.rating }">★</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);

interface Feedback {
    id: number;
    clientName: string;
    clientLogo?: string;
    projectName: string;
    content: string;
    rating: number;
    date: string;
}

const translations = {
    en: {
        title: 'Client Feedback',
        createFeedback: 'Leave Feedback'
    },
    ru: {
        title: 'Отзывы клиентов',
        createFeedback: 'Оставить отзыв'
    }
};

const t = computed(() => translations[currentLanguage.value]);

const feedbacks = computed(() => {
    if (currentLanguage.value === 'en') {
        return [
            {
                id: 1,
                clientName: 'Example Client',
                projectName: 'Website Development',
                content: 'Great work on our website project. The team was professional and delivered on time.',
                rating: 5,
                date: 'December 2023'
            },
            // Add more feedback items
        ];
    } else {
        return [
            {
                id: 1,
                clientName: 'Пример Клиента',
                projectName: 'Разработка веб-сайта',
                content: 'Отличная работа над нашим веб-сайтом. Команда работала профессионально и уложилась в сроки.',
                rating: 5,
                date: 'Декабрь 2023'
            },
            // Add more feedback items
        ];
    }
});
</script>

<style scoped>
.feedback-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.feedback-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.feedback-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.feedback-card:hover {
    transform: translateY(-5px);
}

.feedback-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.client-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.project-name {
    font-weight: 600;
    color: #42b983;
    margin-bottom: 10px;
}

.feedback-content {
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
}

.rating {
    display: flex;
    gap: 5px;
}

.star {
    color: #ddd;
    font-size: 20px;
}

.star.filled {
    color: #ffd700;
}

.project-date {
    color: #999;
    font-size: 0.9em;
}

.create-feedback-button {
    background: #42b983;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.create-feedback-button:hover {
    background: #3aa876;
}

@media (max-width: 768px) {
    .feedback-grid {
        grid-template-columns: 1fr;
    }
}
</style> 