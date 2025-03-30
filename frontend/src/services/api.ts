// Frontend API service
export interface FeedbackData {
    name: string;
    email: string;
    message: string;
}

export interface FeedbackResponse {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}

const API_URL = (() => {
    // Fallback to current origin in production
     return `${window.location.origin}/api`;
})();

export const feedbackApi = {
    async getAllFeedback(): Promise<FeedbackResponse[]> {
        try {
            const response = await fetch(`${API_URL}/feedback`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching feedback:', error);
            throw error;
        }
    },

    async createFeedback(data: FeedbackData): Promise<FeedbackResponse> {
        try {
            const response = await fetch(`${API_URL}/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        } catch (error) {
            console.error('Error creating feedback:', error);
            throw error;
        }
    }
}; 