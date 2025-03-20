/// <reference types="jest" />
import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';

describe('FeedbackService', () => {
    let service: FeedbackService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeedbackService],
        }).compile();

        service = module.get<FeedbackService>(FeedbackService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of feedback', () => {
            const result = service.findAll();
            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBeGreaterThan(0);
        });

        it('should contain feedback with required properties', () => {
            const feedbacks = service.findAll();
            const feedback = feedbacks[0];
            
            expect(feedback).toHaveProperty('id');
            expect(feedback).toHaveProperty('clientName');
            expect(feedback).toHaveProperty('projectName');
            expect(feedback).toHaveProperty('content');
            expect(feedback).toHaveProperty('rating');
            expect(feedback).toHaveProperty('date');
        });
    });

    describe('create', () => {
        it('should create a new feedback', () => {
            const beforeCount = service.findAll().length;
            
            const createFeedbackDto: CreateFeedbackDto = {
                clientName: 'Test Client',
                projectName: 'Test Project',
                content: 'Test feedback content',
                rating: 5,
                date: '2024-02-15'
            };

            const result = service.create(createFeedbackDto);

            expect(result).toHaveProperty('id');
            expect(result.clientName).toBe(createFeedbackDto.clientName);
            expect(result.projectName).toBe(createFeedbackDto.projectName);
            expect(result.content).toBe(createFeedbackDto.content);
            expect(result.rating).toBe(createFeedbackDto.rating);
            expect(result.date).toBe(createFeedbackDto.date);

            const afterCount = service.findAll().length;
            expect(afterCount).toBe(beforeCount + 1);
        });

        it('should assign an incremental id to new feedback', () => {
            const createFeedbackDto: CreateFeedbackDto = {
                clientName: 'Test Client',
                projectName: 'Test Project',
                content: 'Test feedback content',
                rating: 5,
                date: '2024-02-15'
            };

            const feedback1 = service.create(createFeedbackDto);
            const feedback2 = service.create(createFeedbackDto);

            expect(feedback2.id).toBe(feedback1.id + 1);
        });
    });
}); 