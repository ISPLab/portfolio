import fetch from 'node-fetch';

export default async function handler(request, response) {
    try {
        // Логируем входящий запрос
        console.log('Incoming request query:', request.query);
        
        const { code } = request.query;

        if (!code || typeof code !== 'string') {
            console.log('Missing or invalid code parameter');
            return response.status(400).json({ 
                error: 'Code parameter is required and must be a string'
            });
        }

        console.log('Fetching cocktails for code:', code);
        
        const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(code)}`;
        console.log('Requesting URL:', apiUrl);

        const apiResponse = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!apiResponse.ok) {
            console.error('API responded with error status:', apiResponse.status);
            throw new Error(`Cocktail API responded with status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();
        console.log('Received data from API:', !!data, 'drinks:', !!data.drinks);
        
        if (!data || !data.drinks) {
            console.log('No drinks found in response');
            return response.status(404).json({ 
                error: 'No cocktails found',
                code: code
            });
        }

        // Устанавливаем заголовки CORS
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
        response.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type');
        response.setHeader('Content-Type', 'application/json');
        
        return response.json(data);
    } catch (error) {
        console.error("Failed to fetch cocktails:", error);
        return response.status(500).json({ 
            error: 'Failed to fetch cocktails',
            details: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
} 