/// <reference types="jest" />
import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';

describe('FeedbackController', () => {
    let controller: FeedbackController;
    let service: FeedbackService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FeedbackController],
            providers: [FeedbackService],
        }).compile();

        controller = module.get<FeedbackController>(FeedbackController);
        service = module.get<FeedbackService>(FeedbackService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of feedback', () => {
            const result = controller.findAll();
            expect(Array.isArray(result)).toBe(true);
        });

        it('should call service.findAll', () => {
            const findAllSpy = jest.spyOn(service, 'findAll');
            controller.findAll();
            expect(findAllSpy).toHaveBeenCalled();
        });
    });

    describe('create', () => {
        it('should create a new feedback', () => {
            const createFeedbackDto: CreateFeedbackDto = {
                clientName: 'Test Client',
                projectName: 'Test Project',
                content: 'Test feedback content',
                rating: 5,
                date: '2024-02-15'
            };

            const result = controller.create(createFeedbackDto);

            expect(result).toHaveProperty('id');
            expect(result.clientName).toBe(createFeedbackDto.clientName);
            expect(result.projectName).toBe(createFeedbackDto.projectName);
            expect(result.content).toBe(createFeedbackDto.content);
            expect(result.rating).toBe(createFeedbackDto.rating);
            expect(result.date).toBe(createFeedbackDto.date);
        });

        it('should call service.create', () => {
            const createSpy = jest.spyOn(service, 'create');
            const createFeedbackDto: CreateFeedbackDto = {
                clientName: 'Test Client',
                projectName: 'Test Project',
                content: 'Test feedback content',
                rating: 5,
                date: '2024-02-15'
            };

            controller.create(createFeedbackDto);
            expect(createSpy).toHaveBeenCalledWith(createFeedbackDto);
        });
    });
}); 