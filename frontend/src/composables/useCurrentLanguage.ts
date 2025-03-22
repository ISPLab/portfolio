import { ref } from 'vue';

const currentLanguage = ref('en');

export function useCurrentLanguage() {
    return {
        currentLanguage
    };
} 