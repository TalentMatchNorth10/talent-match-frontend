import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { VideoCardData } from '../../short-video-card/video-card.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmf-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoDialogComponent {
  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: DialogRef<VideoDialogComponent>,
    @Inject(DIALOG_DATA) public data: VideoCardData
  ) {}

  close() {
    this.dialogRef.close();
  }

  public get videoUrl() {
    if (this.data.video_type === 'storage') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.getYoutubeVideoId(this.data.url) as string}`
      );
    }
  }

  private getYoutubeVideoId(url: string) {
    // 匹配 YouTube 短片和長影片的 URL 格式
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    // 如果匹配成功，返回影片 ID；否則返回 null
    return match ? match[1] : null;
  }
}
