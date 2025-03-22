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
  const url = import.meta.env.VITE_API_URL;
  if (!url && process.env.NODE_ENV === 'production') {
    // In production, if VITE_API_URL is not set, use the current origin
    return `${window.location.origin}/api`;
  }
  return url || 'http://localhost:3000/api';
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