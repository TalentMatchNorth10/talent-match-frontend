import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

enum ActiveTab {
  System = 'system',
  Course = 'course'
}

interface Announcement {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    avatar: string;
  };
}

@Component({
  selector: 'app-bulletin-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bulletin-page.component.html',
  styleUrl: './bulletin-page.component.scss'
})
export default class BulletinPageComponent {
  activeTab = signal(ActiveTab.System);
  selectedAnnouncement = signal<Announcement | null>(null);

  get Tab() {
    return ActiveTab;
  }

  // apiAnnouncementSystemListGet
  systemAnnouncements: any[] = [
    {
      id: 'announcement-1',
      title: '即日起開放全新才藝課程報名！',
      text: '<p>我們很高興宣布，平台現已開放一系列全新才藝課程的報名！</p><p>不論你是想學習吉他、烹飪、或是現代舞蹈，這裡都有適合你的課程。我們邀請了頂尖的老師，來帶領大家開啟學習的旅程。</p>',
      createdAt: '2024-04-10'
    },
    {
      id: 'announcement-2',
      title: '平台系統升級通知',
      text: '<p>我們將於近期進行系統升級，屆時將會有更好的使用體驗。</p><p>升級後，你將能夠體驗到更流暢的使用界面和更多的功能選擇。</p>',
      createdAt: '2024-04-08'
    }
  ];

  // apiAnnouncementUserListGet
  courseAnnouncements: any[] = [
    {
      id: 'course-announcement-1',
      user: {
        id: 'user-1',
        name: '教師一號',
        avatar: 'https://example.com/user1-avatar.png'
      },
      title: '新課程開放：探索數學的奧秘',
      text: '<p>我們很高興宣布，平台現已開放一系列新的數學課程！</p><p>這些課程將會帶領你探索數學的奧秘，幫助你更好地理解數學概念。</p>',
      createdAt: '2024-04-15'
    },
    {
      id: 'course-announcement-2',
      user: {
        id: 'user-2',
        name: '教師二號',
        avatar: 'https://example.com/user2-avatar.png'
      },
      title: '課程更新：英文會話技巧',
      text: '<p>我們的英文會話技巧課程已經更新！</p><p>這次更新中，我們增加了更多的互動練習，幫助你更好地應對英文會話。</p>',
      createdAt: '2024-04-12'
    },
    {
      id: 'course-announcement-3',
      user: {
        id: 'user-3',
        name: '教師三號',
        avatar: 'https://example.com/user3-avatar.png'
      },
      title: '新課程開放：探索科學的奧秘',
      text: '<p>我們很高興宣布，平台現已開放一系列新的科學課程！</p><p>這些課程將會帶領你探索科學的奧秘，幫助你更好地理解科學概念。</p>',
      createdAt: '2024-04-20'
    },
    {
      id: 'course-announcement-4',
      user: {
        id: 'user-4',
        name: '教師四號',
        avatar: 'https://example.com/user4-avatar.png'
      },
      title: '課程更新：歷史探索',
      text: '<p>我們的歷史探索課程已經更新！</p><p>這次更新中，我們增加了更多的互動練習，幫助你更好地理解歷史。</p>',
      createdAt: '2024-04-25'
    },
    {
      id: 'course-announcement-5',
      user: {
        id: 'user-5',
        name: '教師五號',
        avatar: 'https://example.com/user5-avatar.png'
      },
      title: '新課程開放：探索藝術的奧秘',
      text: '<p>我們很高興宣布，平台現已開放一系列新的藝術課程！</p><p>這些課程將會帶領你探索藝術的奧秘，幫助你更好地理解藝術概念。</p>',
      createdAt: '2024-04-30'
    }
  ];

  switchTab(tab: ActiveTab) {
    this.activeTab.set(tab);
    this.selectedAnnouncement.set(null);
  }

  getActiveAnnouncements() {
    return this.activeTab() === this.Tab.System
      ? this.systemAnnouncements
      : this.courseAnnouncements;
  }

  selectAnnouncement(announcement: Announcement) {
    this.selectedAnnouncement.set(announcement);
  }
}
