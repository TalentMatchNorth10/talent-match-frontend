import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoCardData } from './video-card.interface';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { VideoDialogComponent } from '../dialogs/video/video.component';

@Component({
  selector: 'app-short-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-video-card.component.html',
  styleUrl: './short-video-card.component.scss'
})
export class ShortVideoCardComponent implements OnInit {
  @Input() public data!: VideoCardData;

  constructor(
    private sanitizer: DomSanitizer,
    private dialogService: DialogService
  ) {}

  public get videoUrl() {
    if (this.data.video_type === 'storage') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.getYoutubeVideoId(this.data.url) as string}`
      );
    }
  }

  ngOnInit(): void {}

  private getYoutubeVideoId(url: string) {
    // 匹配 YouTube 短片和長影片的 URL 格式
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    // 如果匹配成功，返回影片 ID；否則返回 null
    return match ? match[1] : null;
  }

  public openVideoDialog(): void {
    this.dialogService.open(VideoDialogComponent, this.data);
  }
}
