<template>
    <nav class="navigation">
        <!-- ... existing navigation code ... -->
        <div class="nav-section">
            <h3>{{ t.projects.title }}</h3>
            <ul>
                <li>
                    <router-link to="/projects/cocktails">
                        {{ t.projects.items.cocktails }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects/router">
                        {{ t.projects.items.router }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects/czca">
                        {{ t.projects.items.czca }}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- ... rest of the navigation ... -->
    </nav>
</template> 