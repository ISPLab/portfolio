const { execSync } = require('child_process');

try {
    // Get changed files
    const changedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' })
        .split('\n')
        .filter(Boolean);

    // Check if any backend files were changed
    const hasBackendChanges = changedFiles.some(file => file.startsWith('backend/'));
    // Check if any frontend files were changed
    const hasFrontendChanges = changedFiles.some(file => file.startsWith('src/'));

    // Run relevant tests
    if (hasBackendChanges) {
        console.log('Running backend tests...');
        execSync('cd backend && npm test', { stdio: 'inherit' });
    }

    if (hasFrontendChanges) {
        console.log('Running frontend tests...');
        execSync('npm test', { stdio: 'inherit' });
    }

    if (!hasBackendChanges && !hasFrontendChanges) {
        console.log('No relevant test files to run.');
    }
} catch (error) {
    console.error('Error running tests:', error.message);
    process.exit(1);
} 