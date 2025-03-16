<template>
    <div class="cv-container">
        <section class="cv-header">
            <h1>Curriculum Vitae</h1>
        </section>

        <section class="cv-section">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>Vue.js</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>HTML5/CSS3</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="cv-section">
            <h2>Experience</h2>
            <div class="experience-item">
                <h3>Senior Software Engineer</h3>
                <p class="company">Tech Company</p>
                <p class="period">2020 - Present</p>
                <ul>
                    <li>Led development of multiple web applications</li>
                    <li>Implemented CI/CD pipelines</li>
                    <li>Mentored junior developers</li>
                </ul>
            </div>
        </section>

        <section class="cv-section">
            <h2>Education</h2>
            <div class="education-item">
                <h3>Master's in Computer Science</h3>
                <p class="university">University Name</p>
                <p class="period">2015 - 2017</p>
            </div>
        </section>
    </div>
</template>

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
    text-align: center;
    margin-bottom: 40px;
}

.cv-header h1 {
    color: #2c3e50;
    font-size: 2.5em;
    margin: 0;
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

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.skill-category h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.skill-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.skill-category li {
    padding: 5px 0;
    color: #666;
}

.experience-item, .education-item {
    margin-bottom: 30px;
}

.experience-item h3, .education-item h3 {
    color: #2c3e50;
    margin: 0 0 5px 0;
}

.company, .university {
    color: #42b983;
    font-weight: 500;
    margin: 0 0 5px 0;
}

.period {
    color: #666;
    font-style: italic;
    margin: 0 0 10px 0;
}

.experience-item ul {
    margin: 10px 0;
    padding-left: 20px;
}

.experience-item li {
    color: #666;
    margin-bottom: 5px;
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
}
</style> 