<template>
    <div class="cv-container">
        <div class="language-switch">
            <button @click="toggleLanguage">{{ translations[currentLanguage].switchButton }}</button>
        </div>

        <section class="cv-header">
            <h1>{{ translations[currentLanguage].fullName }}</h1>
            <p class="position">{{ translations[currentLanguage].position }}</p>
        </section>

        <section class="cv-section">
            <h2>{{ translations[currentLanguage].sections.contacts.title }}</h2>
            <div class="contact-info">
                <p><i class="fas fa-phone"></i> +7 (958) 827-00-64</p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:for_orlov@mail.ru">for_orlov@mail.ru</a></p>
                <p><i class="fas fa-globe"></i> <a href="https://andreyorlov.vercel.app/" target="_blank">andreyorlov.vercel.app</a></p>
            </div>
        </section>

        <section class="cv-section">
            <h2>{{ translations[currentLanguage].sections.skills.title }}</h2>
            <div class="skills-grid">
                <div v-for="(skillGroup, index) in translations[currentLanguage].sections.skills.items" 
                     :key="index" 
                     class="skill-category">
                    <p>{{ skillGroup }}</p>
                </div>
            </div>
        </section>

        <section class="cv-section experience">
            <h2>{{ translations[currentLanguage].sections.experience.title }}</h2>
            <div class="job" v-for="(job, index) in translations[currentLanguage].sections.experience.jobs" :key="index">
                <h3>{{ job.title }}</h3>
                <p class="location">{{ job.location }}</p>
                <ul>
                    <li v-for="(responsibility, idx) in job.responsibilities" 
                        :key="idx">{{ responsibility }}</li>
                </ul>
                <div class="tech-stack" v-if="job.technologies">
                    <p><strong>{{ translations[currentLanguage].sections.experience.techStack }}:</strong></p>
                    <p class="technologies">{{ job.technologies.join(', ') }}</p>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2>{{ translations[currentLanguage].sections.education.title }}</h2>
            <div class="education-list">
                <div v-for="(edu, index) in translations[currentLanguage].sections.education.items" 
                     :key="index" 
                     class="education-item">
                    <p>{{ edu }}</p>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2>{{ translations[currentLanguage].sections.additional.title }}</h2>
            <div class="additional-info">
                <p v-for="(info, index) in translations[currentLanguage].sections.additional.items"
                   :key="index">{{ info }}</p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { translations } from '@/translations/cv';

export default {
    name: "CV",
    data() {
        return {
            currentLanguage: 'ru',
            translations
        }
    },
    methods: {
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'ru' ? 'en' : 'ru';
        }
    }
};
</script>

<style scoped>
.cv-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-switch {
    text-align: right;
    margin-bottom: 20px;
}

.language-switch button {
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.language-switch button:hover {
    background-color: #3aa876;
}

.cv-header {
    text-align: center;
    margin-bottom: 40px;
}

.cv-header h1 {
    color: #2c3e50;
    font-size: 2.5em;
    margin: 0;
}

.position {
    color: #666;
    font-size: 1.2em;
    margin-top: 10px;
}

.cv-section {
    margin-bottom: 40px;
}

.cv-section h2 {
    color: #42b983;
    border-bottom: 2px solid #42b983;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-info a {
    color: #42b983;
    text-decoration: none;
}

.contact-info a:hover {
    text-decoration: underline;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.skill-category p {
    color: #666;
    margin: 5px 0;
}

.job {
    margin-bottom: 30px;
    padding: 20px;
    border-left: 3px solid #42b983;
    background-color: #f8f9fa;
}

.job h3 {
    color: #2c3e50;
    margin: 0 0 10px 0;
}

.location {
    color: #666;
    font-style: italic;
    margin-bottom: 15px;
}

.job ul {
    margin: 15px 0;
    padding-left: 20px;
}

.job li {
    color: #4a4a4a;
    margin-bottom: 8px;
    line-height: 1.4;
}

.tech-stack {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #ddd;
}

.technologies {
    color: #666;
    line-height: 1.4;
}

.education-item {
    margin-bottom: 15px;
}

.additional-info p {
    color: #4a4a4a;
    margin-bottom: 10px;
    line-height: 1.4;
}

@media (max-width: 768px) {
    .cv-container {
        padding: 15px;
    }

    .cv-header h1 {
        font-size: 2em;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .job {
        padding: 15px;
    }
}
</style> 