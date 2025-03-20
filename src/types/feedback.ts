export interface FeedbackCreateInput {
    name: string;
    email: string;
    message: string;
}

export interface FeedbackResponse {
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
} 