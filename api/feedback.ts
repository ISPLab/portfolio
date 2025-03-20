import type { VercelRequest, VercelResponse } from '@vercel/node';
import { FeedbackService } from '../backend/src/feedback/feedback.service';

const feedbackService = new FeedbackService();
const feedbacks = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        if (req.method === 'GET') {
            return res.status(200).json(feedbacks);
        }

        if (req.method === 'POST') {
            const feedback = req.body;
            const newFeedback = {
                id: feedbacks.length + 1,
                ...feedback,
                date: feedback.date || new Date().toISOString().split('T')[0]
            };
            feedbacks.push(newFeedback);
            return res.status(201).json(newFeedback);
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ 
            error: {
                code: '500',
                message: error.message || 'Internal Server Error'
            }
        });
    }
} 