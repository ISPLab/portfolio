import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // Global validation pipe
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }));

    // Enable CORS for all origins
    app.enableCors();

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Feedback API')
        .setDescription('The feedback API description')
        .setVersion('1.0')
        .addTag('feedback')
        .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap(); 