import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
    @Get()
    check() {
        console.log('Health check called at:', new Date().toISOString());
        return {
            status: 'ok',
            timestamp: new Date().toISOString()
        };
    }
} 