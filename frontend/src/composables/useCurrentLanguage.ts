import { ref } from 'vue';

type Language = 'en' | 'ru';

export function useCurrentLanguage() {
    const currentLanguage = ref<Language>('en');

    const setLanguage = (lang: Language) => {
        currentLanguage.value = lang;
    };

    return {
        currentLanguage,
        setLanguage
    };
} 