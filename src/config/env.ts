export const config = {
    apiUrl: import.meta.env.DOCKER_ENV === 'true'
        ? 'http://backend:3001/api'
        : import.meta.env.PROD
            ? 'http://localhost:3001/api'
            : 'http://localhost:3000/api'
}; 