import { NextApiRequest, NextApiResponse } from 'next';
import { getAllFeedback, createFeedback } from '../../src/services/feedback.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch (req.method) {
            case 'GET':
                const feedbackList = await getAllFeedback();
                return res.status(200).json(feedbackList);

            case 'POST':
                const newFeedback = await createFeedback(req.body);
                return res.status(201).json(newFeedback);

            default:
                return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Feedback API error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
} 