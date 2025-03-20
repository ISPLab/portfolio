import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './feedback.dto';
import { Feedback } from './feedback.entity';

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Get()
    @ApiOperation({ summary: 'Get all feedback' })
    @ApiResponse({ 
        status: 200, 
        description: 'Returns all feedback entries',
        type: [Feedback]
    })
    findAll(): Feedback[] {
        return this.feedbackService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create new feedback' })
    @ApiResponse({ 
        status: 201, 
        description: 'The feedback has been successfully created.',
        type: Feedback
    })
    @ApiResponse({ status: 400, description: 'Bad Request.' })
    create(@Body() createFeedbackDto: CreateFeedbackDto): Feedback {
        return this.feedbackService.create(createFeedbackDto);
    }
} 