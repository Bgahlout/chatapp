export interface Chat {
    id: string;
    name: string;
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Message {
    senderId: string;
    content: string;
    timestamp: Date;
}