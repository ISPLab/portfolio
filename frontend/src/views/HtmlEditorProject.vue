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

      <!-- Add the project screenshot section -->
      <div class="project-screenshot">
        <img
            src="@/assets/projects/htmlEditorProject/image.png"
            alt="HTML Editor Project Screenshot"
            loading="lazy"
        />
      </div>

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
      -->

      <!-- Add sections for images, links, tech stack etc. -->
      <section class="project-links">
        <h2>Links</h2>
        <a href="https://html-editor.up.railway.app/" target="_blank" rel="noopener noreferrer" class="view-project-btn">
          Live Demo
          <span class="arrow">→</span>
        </a>
        <a href="https://github.com/ISPLab/textedit" target="_blank" rel="noopener noreferrer" class="view-project-btn github">
          <svg class="github-icon" viewBox="0 0 24 24" width="20" height="20"> {/* Adjusted size slightly */}
              <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
          </svg>
          View on GitHub
        </a>
      </section>
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

.project-links {
  margin-top: 2rem; /* Add some space above the links section */
  display: flex; /* Use flexbox for alignment */
  justify-content: center;
  gap: 20px; /* Match gap from CocktailPage */
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
}

/* Remove or comment out the old styles */
/*
.project-links a { ... }
.project-links a:hover { ... }
.project-link-button { ... }
.project-link-button:hover { ... }
*/

/* === Start: Styles copied directly from CocktailPage.vue === */
.view-project-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px; /* Match gap from CocktailPage */
    padding: 15px 30px; /* Match padding from CocktailPage */
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 8px; /* Match border-radius from CocktailPage */
    font-size: 1.1em; /* Match font-size from CocktailPage */
    font-weight: 500; /* Match font-weight from CocktailPage */
    transition: all 0.3s ease;
    border: none;
    cursor: pointer; /* Ensure cursor is pointer */
}

.view-project-btn.github {
    background: #24292e;
}

.view-project-btn:hover {
    background: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.view-project-btn.github:hover {
    background: #2f363d;
}

.github-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle; /* Keep vertical alignment */
}

.arrow {
    transition: transform 0.3s ease;
    font-weight: bold; /* Keep arrow bold */
}

.view-project-btn:hover .arrow {
    transform: translateX(5px);
}
/* === End: Styles copied directly from CocktailPage.vue === */

/* Add styles for the screenshot section */
.project-screenshot {
    margin: 30px 0; /* Same margin as CocktailPage */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: var(--color-background-mute); /* Use a background color for loading */
}

.project-screenshot img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.project-screenshot:hover img {
    transform: scale(1.02); /* Same hover effect */
}

/* Add more specific styles from CocktailPage or your design system */
</style> 