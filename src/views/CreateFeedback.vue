<template>
    <div class="create-feedback-container">
        <h1>{{ t.title }}</h1>
        <form @submit.prevent="submitFeedback" class="feedback-form">
            <div class="form-group">
                <label for="clientName">{{ t.clientName }}</label>
                <input 
                    type="text" 
                    id="clientName" 
                    v-model="formData.clientName" 
                    :placeholder="t.clientNamePlaceholder"
                    required
                />
            </div>

            <div class="form-group">
                <label for="projectName">{{ t.projectName }}</label>
                <input 
                    type="text" 
                    id="projectName" 
                    v-model="formData.projectName" 
                    :placeholder="t.projectNamePlaceholder"
                    required
                />
            </div>

            <div class="form-group">
                <label for="content">{{ t.feedback }}</label>
                <textarea 
                    id="content" 
                    v-model="formData.content" 
                    :placeholder="t.feedbackPlaceholder"
                    rows="4"
                    required
                ></textarea>
            </div>

            <div class="form-group">
                <label>{{ t.rating }}</label>
                <div class="rating-input">
                    <span 
                        v-for="star in 5" 
                        :key="star"
                        class="star"
                        :class="{ 'filled': star <= formData.rating }"
                        @click="formData.rating = star"
                    >★</span>
                </div>
            </div>

            <button type="submit" class="submit-button">{{ t.submit }}</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { FeedbackService } from '@/services/feedback.service';

const router = useRouter();
const languageStore = useLanguageStore();
const { currentLanguage } = storeToRefs(languageStore);

interface Translations {
    [key: string]: {
        title: string;
        clientName: string;
        clientNamePlaceholder: string;
        projectName: string;
        projectNamePlaceholder: string;
        feedback: string;
        feedbackPlaceholder: string;
        rating: string;
        submit: string;
        successMessage: string;
    }
}

const translations: Translations = {
    en: {
        title: 'Leave Feedback',
        clientName: 'Your Name',
        clientNamePlaceholder: 'Enter your name',
        projectName: 'Project Name',
        projectNamePlaceholder: 'Enter project name',
        feedback: 'Your Feedback',
        feedbackPlaceholder: 'Share your experience with the project...',
        rating: 'Rating',
        submit: 'Submit Feedback',
        successMessage: 'Thank you for your feedback!'
    },
    ru: {
        title: 'Оставить отзыв',
        clientName: 'Ваше имя',
        clientNamePlaceholder: 'Введите ваше имя',
        projectName: 'Название проекта',
        projectNamePlaceholder: 'Введите название проекта',
        feedback: 'Ваш отзыв',
        feedbackPlaceholder: 'Поделитесь вашим опытом работы с проектом...',
        rating: 'Оценка',
        submit: 'Отправить отзыв',
        successMessage: 'Спасибо за ваш отзыв!'
    }
};

const t = computed(() => translations[currentLanguage.value]);

const formData = ref({
    clientName: '',
    projectName: '',
    content: '',
    rating: 0,
    date: new Date().toISOString().split('T')[0]
});

const submitFeedback = async () => {
    try {
        const currentDate = new Date().toISOString().split('T')[0];
        const feedbackData = {
            ...formData.value,
            date: currentDate
        };
        
        await FeedbackService.createFeedback(feedbackData);
        alert(t.value.successMessage);
        router.push('/feedback');
    } catch (error: unknown) {
        console.error('Error submitting feedback:', error);
        const err = error as { response?: { data?: { error?: { message?: string } } } };
        const errorMessage = err.response?.data?.error?.message 
            || 'Error submitting feedback. Please try again.';
        alert(errorMessage);
    }
};
</script>

<style scoped>
.create-feedback-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.feedback-form {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

textarea {
    resize: vertical;
}

.rating-input {
    display: flex;
    gap: 10px;
}

.star {
    font-size: 24px;
    cursor: pointer;
    color: #ddd;
    transition: color 0.2s ease;
}

.star:hover,
.star.filled {
    color: #ffd700;
}

.submit-button {
    background: #42b983;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background: #3aa876;
}

@media (max-width: 768px) {
    .create-feedback-container {
        padding: 10px;
    }
    
    .feedback-form {
        padding: 20px;
    }
}
</style> 