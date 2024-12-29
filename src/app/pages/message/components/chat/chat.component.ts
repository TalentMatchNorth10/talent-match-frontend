import {
  Component,
  inject,
  Input,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, SearchInputComponent, QuillEditorComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnChanges, OnDestroy {
  private fb = inject(FormBuilder);
  private chatService = inject(ChatService);
  private websocketService = inject(WebSocketService);

  @Input() userInfo: UserInfoResponseModelData | null = null;

  @ViewChild(QuillEditorComponent) quillEditor!: QuillEditorComponent;

  chatForm = this.fb.group<ChatForm>({
    message: this.fb.control(null),
    search: this.fb.control(null)
  });

  get message() {
    return this.chatForm.controls.message;
  }

  chatUsers: ChatUsersResponseModelDataInner[] = [];
  chatList: ChatListResponseModelDataInner[] = [];

  currentChat: ChatListResponseModelDataInner | null = null;
  currentMessages: ChatMessagesResponseModelDataInner[] = [];

  private subscribedEvents: Set<Subscription> = new Set();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInfo']) {
      this.initJoinPersonalRoom();
    }
  }

  ngOnInit(): void {
    this.getUserList();
    this.getChatList();
    this.initBindEvent();
  }

  ngOnDestroy(): void {
    this.cleanBindEvent();

    if (this.currentChat) {
      this.websocketService.emit(ChatEvent.LEAVE_ROOM, this.currentChat?.id);
    }

    if (this.userInfo) {
      this.websocketService.emit(ChatEvent.LEAVE_PERSONAL_ROOM, '');
    }
  }

  initJoinPersonalRoom() {
    if (this.userInfo) {
      this.websocketService.emit(ChatEvent.JOIN_PERSONAL_ROOM, '');
    }
  }

  initBindEvent() {
    this.subscribedEvents.add(
      this.websocketService
        .onEvent<ChatMessagesResponseModelDataInner>(
          ChatListen.MESSAGE_RECEIVED
        )
        .subscribe((data) => {
          if (this.currentChat) {
            this.currentMessages.push(data);
            this.markRead();
          }
        })
    );

    this.subscribedEvents.add(
      this.websocketService
        .onEvent<{
          chatId: string;
          userId: string;
        }>(ChatListen.READ_STATUS_UPDATED)
        .subscribe((res) => {
          if (this.currentChat && res.userId !== this.userInfo?.id) {
            this.getMessageList(this.currentChat!.id);
          }
        })
    );

    this.subscribedEvents.add(
      this.websocketService
        .onEvent<ChatListResponseModelDataInner>(ChatListen.CHAT_LIST_UPDATED)
        .subscribe((chatListItem) => {
          const chatItem = this.chatList.find(
            (chat) => chat.id === chatListItem.id
          );
          if (chatItem) {
            chatItem.latestMessage = chatListItem.latestMessage;
            chatItem.unreadCount = chatListItem.unreadCount;
          }
        })
    );
  }

  cleanBindEvent() {
    this.subscribedEvents.forEach((event) => {
      event.unsubscribe();
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
          this.chatForm.controls.message.setValue('');
          this.quillEditor.updateContent('');
        });
    }
  }

  markRead() {
    if (this.currentChat) {
      this.chatService
        .apiChatChatIdMarkAsReadPut({
          chatId: this.currentChat.id,
          chatReadStatusRequestModel: {
            userId: this.userInfo!.id
          }
        })
        .subscribe();
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
    if (this.currentChat) {
      this.websocketService.emit(ChatEvent.LEAVE_ROOM, this.currentChat?.id);
    }
    this.currentChat = chat;
    this.websocketService.emit(ChatEvent.JOIN_ROOM, chat.id);
    this.getMessageList(chat.id);
    this.chatService
      .apiChatChatIdMarkAsReadPut({
        chatId: chat.id,
        chatReadStatusRequestModel: {
          userId: this.userInfo!.id
        }
      })
      .subscribe();
  }

  contentChange(content: string): void {
    this.chatForm.controls.message.setValue(content);
  }
}
