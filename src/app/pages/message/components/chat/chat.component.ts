import {
  Component,
  inject,
  Input,
  input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ChatListResponseModelDataInner,
  ChatMessagesResponseModelDataInner,
  ChatService,
  ChatUsersResponseModelDataInner,
  UserInfoResponseModelData
} from 'libs/openapi/src';
import { ChatForm } from '../../message.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { WebSocketService } from '@tmf/shared';
import { ChatEvent, ChatListen } from './chat.event';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, SearchInputComponent, QuillEditorComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private chatService = inject(ChatService);
  private websocketService = inject(WebSocketService);

  @Input() userInfo: UserInfoResponseModelData | null = null;

  chatForm = this.fb.group<ChatForm>({
    message: this.fb.control(null),
    search: this.fb.control(null)
  });

  chatUsers: ChatUsersResponseModelDataInner[] = [];
  chatList: ChatListResponseModelDataInner[] = [];

  currentChat: ChatListResponseModelDataInner | null = null;
  currentMessages: ChatMessagesResponseModelDataInner[] = [];

  ngOnInit(): void {
    this.getUserList();
    this.getChatList();
    this.initBindEvent();
  }

  ngOnDestroy(): void {
    if (this.currentChat) {
      this.websocketService.emit(ChatEvent.LEAVE_ROOM, this.currentChat?.id);
    }
  }

  initBindEvent() {
    this.websocketService
      .onEvent<ChatMessagesResponseModelDataInner>(ChatListen.MESSAGE_RECEIVED)
      .subscribe((data) => {
        console.log('MESSAGE_RECEIVED', data);
      });

    this.websocketService
      .onEvent(ChatListen.READ_STATUS_UPDATED)
      .subscribe(() => {
        if (this.currentChat) {
          this.getMessageList(this.currentChat!.id);
        }
      });

    this.websocketService
      .onEvent<ChatListResponseModelDataInner>(ChatListen.CHAT_LIST_UPDATED)
      .subscribe((chatListItem) => {
        console.log('CHAT_LIST_UPDATED', chatListItem);
      });
  }

  sendMessage() {
    if (this.currentChat) {
      this.chatService
        .apiChatMessagePost({
          chatSendMesssageRequestModel: {
            chatId: this.currentChat.id,
            receiverId: this.currentChat.user.id,
            text: this.chatForm.controls.message.value || '',
            type: 'general'
          }
        })
        .subscribe(() => {
          this.chatForm.controls.message.setValue(null);
        });
    }
  }

  getUserList(text?: string) {
    this.chatService
      .apiChatUsersGet({
        name: text || ''
      })
      .subscribe((res) => {
        this.chatUsers = res.data;
      });
  }

  getChatList() {
    this.chatService.apiChatListGet().subscribe((res) => {
      this.chatList = res.data;
    });
  }

  getMessageList(chatId: string) {
    this.chatService
      .apiChatChatIdMessagesGet({
        chatId
      })
      .subscribe((res) => {
        this.currentMessages = res.data;
      });
  }

  selectUser(user: ChatUsersResponseModelDataInner) {
    if (user.joined) {
      const chat = this.chatList.find((chat) => chat.user.id === user.id);
      if (chat) {
        this.selectChat(chat);
      }
    } else {
      this.chatService
        .apiChatCreatePost({
          requestBody: [user.id, this.userInfo!.id]
        })
        .subscribe(() => {
          this.getChatList();
        });
    }
  }

  selectChat(chat: ChatListResponseModelDataInner) {
    this.websocketService.emit(ChatEvent.LEAVE_ROOM, this.currentChat?.id);
    this.currentChat = chat;
    this.websocketService.emit(ChatEvent.JOIN_ROOM, chat.id);
    this.getMessageList(chat.id);
  }

  contentChange(content: string): void {
    this.chatForm.controls.message.setValue(content);
  }
}
