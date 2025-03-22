<script setup lang="ts">
import { ref } from 'vue';
import { feedbackApi } from '../services/api';

const name = ref('');
const email = ref('');
const message = ref('');
const error = ref('');
const success = ref(false);

const handleSubmit = async () => {
    try {
        success.value = false;
        error.value = '';
        
        await feedbackApi.createFeedback({
            name: name.value,
            email: email.value,
            message: message.value
        });
        
        // Clear form
        name.value = '';
        email.value = '';
        message.value = '';
        success.value = true;
    } catch (err) {
        error.value = 'Failed to submit feedback';
        console.error(err);
    }
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="success" class="success">Feedback submitted successfully!</div>
        
        <input v-model="name" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <textarea v-model="message" placeholder="Message" required></textarea>
        
        <button type="submit">Submit Feedback</button>
    </form>
</template> 