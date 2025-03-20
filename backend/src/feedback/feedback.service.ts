import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
    private feedbacks: Feedback[] = [
        {
            id: 1,
            clientName: 'John Doe',
            projectName: 'E-commerce Website',
            content: 'Excellent work on our e-commerce platform. The team delivered everything on time and the quality exceeded our expectations.',
            rating: 5,
            date: '2024-01-15'
        },
        {
            id: 2,
            clientName: 'Jane Smith',
            projectName: 'Mobile App Development',
            content: 'Great communication throughout the project. The app works perfectly and our users love it.',
            rating: 5,
            date: '2024-02-01'
        }
    ];

    findAll(): Feedback[] {
        return this.feedbacks;
    }

    create(createFeedbackDto: CreateFeedbackDto): Feedback {
        const newFeedback = {
            id: this.feedbacks.length + 1,
            ...createFeedbackDto
        };
        this.feedbacks.push(newFeedback);
        return newFeedback;
    }
} 