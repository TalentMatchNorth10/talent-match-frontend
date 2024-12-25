import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from './message.model';
import { UserInfoResponseModelData } from 'libs/openapi/src';
import { UserInfoService } from '@tmf/shared';
import { ChatComponent } from './components/chat/chat.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, ChatComponent, AnnouncementComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export default class MessageComponent implements OnInit {
  private userInfoService = inject(UserInfoService);

  userInfo: UserInfoResponseModelData | null = null;
  tab: Tab = Tab.CHAT;

  readonly Tab = Tab;

  ngOnInit(): void {
    this.userInfoService.userInfo$.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }

  changeTab(tab: Tab) {
    this.tab = tab;
  }
}
