import { ApiProperty } from '@nestjs/swagger';

export class Feedback {
    @ApiProperty({
        description: 'The unique identifier of the feedback',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'The name of the client',
        example: 'John Doe'
    })
    clientName: string;

    @ApiProperty({
        description: 'The name of the project',
        example: 'E-commerce Website'
    })
    projectName: string;

    @ApiProperty({
        description: 'The feedback content',
        example: 'Great work on the project! Everything works perfectly.'
    })
    content: string;

    @ApiProperty({
        description: 'Rating from 1 to 5',
        minimum: 1,
        maximum: 5,
        example: 5
    })
    rating: number;

    @ApiProperty({
        description: 'The date when feedback was created',
        example: '2024-03-20'
    })
    date: string;

    @ApiProperty({
        description: 'URL to client logo image',
        required: false,
        example: 'https://example.com/logo.png'
    })
    clientLogo?: string;
} 