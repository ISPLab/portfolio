import axios from 'axios';

const API_URL = '/api/feedback';

const axiosInstance = axios.create({
    baseURL: API_URL
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
        const response = await axiosInstance.get('');
        return response.data;
    },

    async createFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {
        const response = await axiosInstance.post('', feedback);
        return response.data;
    }
}; 