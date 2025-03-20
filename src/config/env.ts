export const config = {
    apiUrl: import.meta.env.PROD 
        ? '/api'
        : 'http://localhost:3000'
}; 