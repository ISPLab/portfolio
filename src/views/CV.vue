<template>
    <div class="cv-container">
        <div class="save-button-container">
            <button class="save-pdf-button" @click="savePDF" :disabled="isLoading">
                <div class="button-content">
                    <img 
                        v-if="!isLoading" 
                        src="@/assets/images/portfolio/download.svg" 
                        alt="download"
                        class="button-icon"
                    />
                    <i v-else class="fas fa-spinner fa-spin"></i>
                    <span>{{ translations[currentLanguage].sections.buttons.savePDF }}</span>
                </div>
            </button>
        </div>

        <div id="cv-content">
            <section class="cv-header">
                <div class="profile-section">
                    <div class="profile-photo">
                        <img 
                            :src="'/src/assets/images/portfolio/I_am.png'" 
                            alt="Andrey Orlov"
                            class="profile-image"
                        />
                    </div>
                    <div class="profile-info">
                        <h1>{{ translations[currentLanguage].fullName }}</h1>
                        <p class="position">{{ translations[currentLanguage].position }}</p>
                    </div>
                </div>
            </section>

            <section class="cv-section">
                <h2>{{ translations[currentLanguage].sections.contacts.title }}</h2>
                <div class="contact-info">
                    <div class="contact-details">
                        <p><i class="fas fa-phone"></i> +7 (958) 827-00-64</p>
                        <p><i class="fas fa-envelope"></i> <a href="mailto:for_orlov@mail.ru">for_orlov@mail.ru</a></p>
                        <p><i class="fas fa-globe"></i> <a href="https://andreyorlov.vercel.app/" target="_blank">andreyorlov.vercel.app</a></p>
                    </div>
                    <div class="qr-code">
                        <img 
                            :src="'/src/assets/images/portfolio/portfolio_qr_code.png'" 
                            alt="Portfolio QR Code"
                            class="qr-image"
                        />
                        <p class="qr-caption">{{ translations[currentLanguage].sections.contacts.scanQR }}</p>
                    </div>
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
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { translations } from '@/translations/cv';
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';

declare module 'html2pdf.js' {
    const html2pdf: any;
    export default html2pdf;
}
import html2pdf from 'html2pdf.js';

export default {
    name: "CV",
    setup() {
        const languageStore = useLanguageStore();
        const { currentLanguage } = storeToRefs(languageStore);
        const isLoading = ref(false);

        const savePDF = async () => {
            if (isLoading.value) return;
            
            try {
                isLoading.value = true;
                const element = document.getElementById('cv-content');
                if (!element) {
                    console.error('CV content element not found');
                    return;
                }

                const opt = {
                    margin: [10, 10],
                    filename: `CV_Andrey_Orlov_${new Date().toISOString().split('T')[0]}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { 
                        scale: 2,
                        useCORS: true,
                        logging: true
                    },
                    jsPDF: { 
                        unit: 'mm', 
                        format: 'a4', 
                        orientation: 'portrait'
                    }
                };

                await html2pdf()
                    .from(element)
                    .set(opt)
                    .save();

            } catch (error) {
                console.error('Error generating PDF:', error);
            } finally {
                isLoading.value = false;
            }
        };

        return {
            currentLanguage,
            translations,
            savePDF,
            isLoading
        };
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

.cv-header {
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
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.contact-details {
    flex: 1;
}

.qr-code {
    flex: 0 0 auto;
    text-align: center;
    padding: 10px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.qr-image {
    width: 120px;
    height: 120px;
    object-fit: contain;
}

.qr-caption {
    margin-top: 8px;
    font-size: 0.9em;
    color: #666;
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

.save-button-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}

.save-pdf-button {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.button-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.button-icon {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
}

.fa-spinner {
    font-size: 32px;
}

.save-pdf-button:disabled {
    background-color: #8bc7aa;
    cursor: not-allowed;
    opacity: 0.7;
}

.save-pdf-button:not(:disabled):hover {
    background-color: #3aa876;
    transform: translateY(-1px);
}

.profile-section {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
}

.profile-photo {
    flex: 0 0 auto;
    width: 150px;
    height: 150px;

    overflow: hidden;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-info {
    flex: 1;
    text-align: left;
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

    .contact-info {
        flex-direction: column;
        align-items: center;
    }

    .contact-details {
        width: 100%;
    }

    .qr-code {
        width: 100%;
        max-width: 200px;
    }

    .profile-section {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .profile-info {
        text-align: center;
    }

    .profile-photo {
        width: 120px;
        height: 120px;
    }
}

#cv-content {
    background: white;
    padding: 20px;
    width: 100%;
    max-width: 210mm;
    margin: 0 auto;
}

@media print {
    #cv-content {
        width: 210mm;
        height: 297mm;
        padding: 20mm;
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.fa-spin {
    animation: spin 1s linear infinite;
}
</style> 