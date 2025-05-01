import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chats: Chat[] = [];
  private chatsSubject = new BehaviorSubject<Chat[]>(this.chats);

  constructor() {}

  getChats() {
    return this.chatsSubject.asObservable();
  }

  addChat(chat: Chat) {
    this.chats.push(chat);
    this.chatsSubject.next(this.chats);
  }

  renameChat(oldName: string, newName: string) {
    const chat = this.chats.find(c => c.name === oldName);
    if (chat) {
      chat.name = newName;
      this.chatsSubject.next(this.chats);
    }
  }

  deleteChat(chatName: string) {
    this.chats = this.chats.filter(c => c.name !== chatName);
    this.chatsSubject.next(this.chats);
  }
}