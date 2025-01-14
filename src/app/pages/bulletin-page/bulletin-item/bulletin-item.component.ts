import { Component, computed, input, output } from '@angular/core';
import { Announcement, CourseAnnouncement } from '../bulletin.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bulletin-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './bulletin-item.component.html',
  styleUrl: './bulletin-item.component.scss'
})
export class BulletinItemComponent {
  announcement = input.required<Announcement>();
  selectId = input<string | undefined>(undefined);
  selectAnnouncementEvent = output<Announcement>();

  announcementAvatar = computed(() => {
    if (!this.announcement()) return '/assets/images/og_image.png';
    return this.announcement().type === 'course'
      ? (this.announcement() as CourseAnnouncement).user.avatar
      : '/assets/images/og_image.png';
  });

  announcementAlt = computed(() => {
    if (!this.announcement()) return '系統圖示';
    return this.announcement().type === 'course' ? '使用者頭像' : '系統圖示';
  });

  selectAnnouncement() {
    this.selectAnnouncementEvent.emit(this.announcement());
  }
}
