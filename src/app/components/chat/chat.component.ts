import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chats: Chat[] = [];
  selectedChat: Chat | null = null;
  message: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.loadChats();
  }

  loadChats(): void {
    this.chats = this.chatService.getChats();
  }

  selectChat(chat: Chat): void {
    this.selectedChat = chat;
  }

  sendMessage(): void {
    if (this.selectedChat && this.message.trim()) {
      this.chatService.sendMessage(this.selectedChat.id, this.message);
      this.message = '';
    }
  }

  deleteChat(chatId: number): void {
    this.chatService.deleteChat(chatId);
    this.loadChats();
  }

  renameChat(chatId: number, newName: string): void {
    this.chatService.renameChat(chatId, newName);
    this.loadChats();
  }
}