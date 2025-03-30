export const config = {
    apiUrl: import.meta.env.DOCKER_ENV === 'true'
        ? 'http://portfolio-backend-production-c653.up.railway.app:3000/api'
        : import.meta.env.PROD
            ? 'http://portfolio-backend-production-c653.up.railway.app:3000/api'
            : 'http://portfolio-backend-production-c653.up.railway.app/api'
}; 