import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        currentLanguage: 'en'
    }),
    actions: {
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'ru' ? 'en' : 'ru';
        }
    }
}); 