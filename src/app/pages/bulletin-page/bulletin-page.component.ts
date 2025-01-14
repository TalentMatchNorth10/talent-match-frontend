import { AnnouncementService } from 'libs/openapi/src';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { WebSocketService } from '@tmf/shared';
import { AnnouncementListen } from '../message/components/announcement/announcement.event';
import {
  ActiveTab,
  Announcement,
  CourseAnnouncement,
  SystemAnnouncement
} from './bulletin.model';
import { BulletinItemComponent } from './bulletin-item/bulletin-item.component';

@Component({
  selector: 'app-bulletin-page',
  standalone: true,
  imports: [CommonModule, BulletinItemComponent],
  templateUrl: './bulletin-page.component.html',
  styleUrl: './bulletin-page.component.scss'
})
export default class BulletinPageComponent {
  private announcementService = inject(AnnouncementService);
  private webSocketService = inject(WebSocketService);
  activeTab = signal(ActiveTab.System);
  selectedAnnouncement = signal<Announcement | null>(null);

  constructor() {}

  get Tab() {
    return ActiveTab;
  }

  // 修改系統公告的資料轉換
  systemAnnouncements = toSignal(
    this.announcementService.apiAnnouncementSystemListGet().pipe(
      map((announcements) => {
        return announcements.data.map(
          (announcement): SystemAnnouncement => ({
            ...announcement,
            type: 'system'
          })
        );
      })
    )
  );

  private refsh$ = new BehaviorSubject<void>(undefined);
  courseAnnouncements$ = this.refsh$.pipe(
    switchMap(() =>
      this.announcementService.apiAnnouncementUserListGet().pipe(
        map((announcements) => {
          return announcements.data.map(
            (announcement): CourseAnnouncement => ({
              ...announcement,
              type: 'course'
            })
          );
        })
      )
    )
  );

  // 修改課程公告的資料轉換
  courseAnnouncements = toSignal(this.courseAnnouncements$);

  // 計算當前顯示的公告列表
  activeAnnouncements = computed(() =>
    this.activeTab() === ActiveTab.System
      ? this.systemAnnouncements()
      : this.courseAnnouncements()
  );

  selectedAnnouncementAvatar = computed(() => {
    const announcement = this.selectedAnnouncement();
    if (!announcement) return '/assets/images/og_image.png';

    return announcement.type === 'course'
      ? announcement.user.avatar
      : '/assets/images/og_image.png';
  });

  selectedAnnouncementAlt = computed(() => {
    const announcement = this.selectedAnnouncement();
    if (!announcement) return '系統圖示';

    return announcement.type === 'course' ? '使用者頭像' : '系統圖示';
  });

  ngOnInit(): void {
    this.webSocketService.onEvent(AnnouncementListen.CREATED).subscribe(() => {
      this.refsh$.next();
    });
    this.initJoinBULLETIN();
  }

  switchTab(tab: ActiveTab) {
    this.activeTab.set(tab);
    this.selectedAnnouncement.set(null);
  }

  onSelectAnnouncement(announcement: Announcement) {
    this.selectedAnnouncement.set(announcement);
  }

  initJoinBULLETIN() {
    this.webSocketService.emit(AnnouncementListen.JOIN_BULLETIN, '');
  }
}
