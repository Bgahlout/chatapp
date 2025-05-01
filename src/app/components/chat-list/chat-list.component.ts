import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  chats: Chat[] = [];
  newChatName: string = '';

  constructor(private chatService: ChatService) {
    this.loadChats();
  }

  loadChats() {
    this.chats = this.chatService.getChats();
  }

  addChat() {
    if (this.newChatName.trim()) {
      this.chatService.addChat({ name: this.newChatName });
      this.newChatName = '';
      this.loadChats();
    }
  }

  renameChat(chat: Chat, newName: string) {
    if (newName.trim()) {
      this.chatService.renameChat(chat.id, newName);
      this.loadChats();
    }
  }

  deleteChat(chat: Chat) {
    this.chatService.deleteChat(chat.id);
    this.loadChats();
  }
}