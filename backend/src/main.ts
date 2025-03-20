import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // Set global prefix for production
    app.setGlobalPrefix('api');

    // Global validation pipe
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }));

    // Configure CORS
    app.enableCors({
        origin: [
            // Development origins
            'http://localhost:5173',
            'http://localhost:3000',
            // Docker origin
            'http://portfolio-frontend',
            // Production origins
            'https://portfolio-production-abb1.up.railway.app',
            'https://portfolio-production-abb1.up.railway.app/',
            // Dynamic origins from environment
            process.env.CORS_ORIGIN
        ].filter(Boolean),
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Accept'],
        credentials: false
    });

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Feedback API')
        .setDescription('The feedback API description')
        .setVersion('1.0')
        .addTag('feedback')
        .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Health check endpoint: http://localhost:${port}/health`);
}
bootstrap(); 