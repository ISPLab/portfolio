import axios from 'axios';

const API_URL = 'http://localhost:3000/feedback';

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
        const response = await axios.get(API_URL);
        return response.data;
    },

    async createFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {
        const response = await axios.post(API_URL, feedback);
        return response.data;
    }
}; 