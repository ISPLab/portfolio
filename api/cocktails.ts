import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const { code } = request.query;

    try {
        const apiResponse = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );

        const data = await apiResponse.json();
        
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET');
        response.setHeader('Content-Type', 'application/json');
        
        return response.json(data);
    } catch (error) {
        console.error("Failed to fetch cocktails:", error);
        return response.status(500).json({ error: 'Failed to fetch cocktails' });
    }
} 