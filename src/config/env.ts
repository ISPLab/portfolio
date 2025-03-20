export const config = {
    apiUrl: import.meta.env.PROD 
        ? 'https://portfolio-production-abb1.up.railway.app'
        : 'http://localhost:3000'
}; 