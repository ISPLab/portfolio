import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
    @ApiProperty({
        description: 'The name of the client',
        example: 'John Doe'
    })
    @IsString()
    @IsNotEmpty()
    clientName: string;

    @ApiProperty({
        description: 'The name of the project',
        example: 'E-commerce Website'
    })
    @IsString()
    @IsNotEmpty()
    projectName: string;

    @ApiProperty({
        description: 'The feedback content',
        example: 'Great work on the project!'
    })
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty({
        description: 'Rating from 1 to 5',
        minimum: 1,
        maximum: 5
    })
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;

    @ApiProperty({
        description: 'The date when feedback was created'
    })
    @IsDateString()
    date: string;
} 