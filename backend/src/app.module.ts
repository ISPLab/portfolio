import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { HealthController } from './health/health.controller';

@Module({
    imports: [FeedbackModule],
    controllers: [HealthController]
})
export class AppModule {} 