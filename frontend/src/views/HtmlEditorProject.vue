<template>
  <div class="project-page">
    <h1 class="project-title">HTML Editor Project</h1>
    <div class="project-content">
      <section class="project-description">
        <h2>Project Description</h2>
        <p>
          The HTML Editor is a web-based application designed for seamless editing and previewing of HTML content. It offers two primary modes:
        </p>
        <ul>
          <li>
            <strong>Preview Mode:</strong> Renders the HTML visually, allowing users to edit content directly within the rendered page using <code>contentEditable</code>. Changes made are immediately updated in the application's state.
          </li>
          <li>
            <strong>Code Mode:</strong> Displays the raw HTML code in a text area, enabling direct editing of the markup.
          </li>
        </ul>
        <h3>Key Features:</h3>
        <ul>
          <li>
            <strong>File Loading:</strong> Users can upload <code>.html</code> or <code>.htm</code> files, which are then displayed in the editor for modification.
          </li>
          <li>
            <strong>Content Synchronization:</strong> Edits made in either mode are synchronized, ensuring consistency when switching between Preview and Code modes.
          </li>
          <li>
            <strong>Cursor Position Preservation:</strong> The editor attempts to maintain the cursor position during edits, enhancing the user experience.
          </li>
        </ul>
        <p>
          This project demonstrates proficiency in web development technologies, including HTML, JavaScript, and DOM manipulation, showcasing the ability to create interactive and user-friendly web applications.
        </p>
      </section>

      <!-- Optional: Add sections for images, links, tech stack etc. -->
      <!--
      <section class="project-details">
        <h2>Technologies Used</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>DOM Manipulation</li>
        </ul>
      </section>

      <section class="project-links">
        <h2>Links</h2>
        <a href="#" target="_blank" rel="noopener noreferrer">Live Demo (if available)</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repository (if available)</a>
      </section>
      -->
    </div>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for this static page yet
</script>

<style scoped>
/* Add styles similar to CocktailPage or other project pages */
/* These are example styles, adjust as needed */
.project-page {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--color-background-soft); /* Assuming CSS variables are used */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-text);
}

.project-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-heading);
  font-size: 2.5rem;
}

.project-content h2 {
  color: var(--color-heading);
  border-bottom: 2px solid var(--vt-c-indigo); /* Example accent color */
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.project-content h3 {
    color: var(--color-heading);
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
}

.project-description p,
.project-description ul,
.project-details ul {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-description ul,
.project-details ul {
  list-style-position: inside;
  padding-left: 1rem; /* Indent list items */
}

.project-description li,
.project-details li {
  margin-bottom: 0.5rem;
}

code {
  background-color: var(--color-background-mute);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: monospace;
}

.project-links a {
  display: inline-block;
  margin-right: 1rem;
  margin-top: 0.5rem;
  color: var(--vt-c-indigo); /* Example link color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-links a:hover {
  color: var(--vt-c-text-dark-1);
  text-decoration: underline;
}

/* Add more specific styles from CocktailPage or your design system */
</style> 