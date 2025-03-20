import { Controller, Get, Post, Body } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';
import { Feedback } from './feedback.entity';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get()
    findAll(): Feedback[] {
        return this.feedbackService.findAll();
    }

    @Post()
    create(@Body() createFeedbackDto: CreateFeedbackDto): Feedback {
        return this.feedbackService.create(createFeedbackDto);
    }
} 