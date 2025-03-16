<template>
    <div class="portfolio-container">
        <section class="hero">
            <h1>Welcome to My Portfolio</h1>
            <p class="subtitle">Full Stack Developer & Software Engineer</p>
        </section>

        <section class="features">
            <h2>Featured Projects</h2>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>Cocktail Database</h3>
                    <ul>
                        <li>Interactive cocktail recipes</li>
                        <li>Real-time search and filtering</li>
                        <li>Responsive image gallery</li>
                        <li>API integration</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3>Development Skills</h3>
                    <ul>
                        <li>Frontend: Vue.js, React, TypeScript</li>
                        <li>Backend: Node.js, Python, SQL</li>
                        <li>DevOps: Docker, CI/CD, AWS</li>
                        <li>Testing & Documentation</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h3>Current Projects</h3>
                    <ul>
                        <li>AI-powered applications</li>
                        <li>Real estate platforms</li>
                        <li>Social media integration</li>
                        <li>Data visualization tools</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="contact">
            <h2>Let's Connect</h2>
            <div class="contact-info">
                <p>Looking for a developer who can bring your ideas to life? Let's talk!</p>
                <div class="social-links">
                    <a href="https://github.com/yourusername" target="_blank" class="social-link">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">LinkedIn</a>
                    <a href="mailto:your.email@example.com" class="social-link">Email</a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.portfolio-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.hero {
    text-align: center;
    margin-bottom: 60px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
    border-radius: 8px;
    color: white;
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.2em;
    opacity: 0.9;
    margin: 0;
}

.features {
    margin-bottom: 60px;
}

.features h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 40px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

.feature-card {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #42b983;
    margin-top: 0;
    margin-bottom: 15px;
}

.feature-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-card li {
    color: #666;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.feature-card li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

.contact {
    text-align: center;
    padding: 40px;
    background: #f8f9fa;
    border-radius: 8px;
}

.contact h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.contact-info p {
    color: #666;
    margin-bottom: 20px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-link {
    display: inline-block;
    padding: 10px 20px;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.social-link:hover {
    background: #3aa876;
}

@media (max-width: 768px) {
    .hero {
        padding: 30px 15px;
    }

    .hero h1 {
        font-size: 2em;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .social-links {
        flex-direction: column;
        align-items: center;
    }

    .social-link {
        width: 200px;
    }
}
</style> 