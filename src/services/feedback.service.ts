import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
    ? '/api/feedback'  // Vercel production path
    : 'http://localhost:3000/feedback';  // Local development path

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export interface Feedback {
    id: number;
    clientName: string;
    projectName: string;
    content: string;
    rating: number;
    date: string;
    clientLogo?: string;
}

export interface CreateFeedbackDto {
    clientName: string;
    projectName: string;
    content: string;
    rating: number;
    date: string;
}

export const FeedbackService = {
    async getAllFeedback(): Promise<Feedback[]> {
        try {
            const response = await axiosInstance.get('');
            return response.data;
        } catch (error) {
            console.error('Error fetching feedback:', error);
            throw error;
        }
    },

    async createFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {
        try {
            const response = await axiosInstance.post('', feedback);
            return response.data;
        } catch (error) {
            console.error('Error creating feedback:', error);
            throw error;
        }
    }
}; 