export const config = {
    apiUrl: import.meta.env.DOCKER_ENV === 'true'
        ? 'http://portfolio-backend:3000/api'
        : import.meta.env.PROD
            ? 'http://localhost:3000/api'
            : 'http://localhost:3000/api'
}; 