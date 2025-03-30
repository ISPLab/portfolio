export const config = {
    apiUrl: import.meta.env.DOCKER_ENV === 'true'
        ? 'https://portfolio-backend-production-c653.up.railway.app/api'
        : import.meta.env.PROD
            ? 'https://portfolio-backend-production-c653.up.railway.app/api'
            : 'https://portfolio-backend-production-c653.up.railway.app/api'
}; 