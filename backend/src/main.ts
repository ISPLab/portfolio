import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Feedback API')
        .setDescription('The feedback API description')
        .setVersion('1.0')
        .addTag('feedback')
        .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(3000);
}
bootstrap(); 