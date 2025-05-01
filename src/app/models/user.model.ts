export interface User {
    id: number;
    username: string;
    password: string;
    language: 'en' | 'ar';
    chats: number[]; // Array of chat IDs associated with the user
}