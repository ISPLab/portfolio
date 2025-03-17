<template>
    <div class="router-container">
        <section class="project-info">
            <h1>Smart Router Device Project</h1>
            <p class="description">
                An innovative IoT device that combines modern networking capabilities with smart home features. 
                This project showcases hardware and software integration using cutting-edge technologies.
            </p>

            <div class="project-screenshot">
                <img 
                    src="@/assets/images/projects/route-device.jpeg"
                    alt="Router Device"
                    loading="lazy"
                />
            </div>

            <div class="tech-features">
                <div class="feature">
                    <h3>Hardware Features</h3>
                    <ul>
                        <li>High-performance networking chip</li>
                        <li>Integrated IoT capabilities</li>
                        <li>Energy-efficient design</li>
                        <li>Compact form factor</li>
                    </ul>
                </div>

                <div class="feature">
                    <h3>Software Stack</h3>
                    <ul>
                        <li>Custom firmware development</li>
                        <li>Real-time monitoring system</li>
                        <li>Web-based management interface</li>
                        <li>Automated updates</li>
                    </ul>
                </div>

                <div class="feature">
                    <h3>Smart Features</h3>
                    <ul>
                        <li>Network traffic analysis</li>
                        <li>Security threat detection</li>
                        <li>Device management</li>
                        <li>Performance optimization</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.router-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.project-info {
    max-width: 800px;
    margin: 0 auto 40px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-info h1 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 2em;
}

.description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
}

.project-screenshot {
    margin: 30px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #f8f9fa;
}

.project-screenshot img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.project-screenshot:hover img {
    transform: scale(1.02);
}

.tech-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.feature {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 3px solid #42b983;
}

.feature h3 {
    color: #42b983;
    margin: 0 0 15px 0;
    font-size: 1.2em;
}

.feature ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature li {
    color: #666;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.feature li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #42b983;
}

.project-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.view-project-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 500;
    transition: all 0.3s ease;
}

.view-project-btn.github {
    background: #24292e;
}

.view-project-btn:hover {
    transform: translateY(-2px);
}

.view-project-btn.github:hover {
    background: #2f363d;
}

.github-icon {
    width: 20px;
    height: 20px;
}

@media (max-width: 768px) {
    .project-info {
        padding: 15px;
    }

    .project-info h1 {
        font-size: 1.8em;
    }

    .tech-features {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .project-screenshot {
        margin: 20px 0;
    }

    .project-links {
        flex-direction: column;
        align-items: center;
    }

    .view-project-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
        padding: 12px 25px;
        font-size: 1em;
    }
}
</style> 