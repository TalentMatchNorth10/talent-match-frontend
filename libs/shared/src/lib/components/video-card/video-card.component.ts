import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { VideoDialogComponent } from '../dialogs/video-dialog/video-dialog.component';
import { VideoCardData } from '../short-video-card/video-card.interface';

@Component({
  selector: 'tmf-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input('data')
  data!: VideoCardData;
  @ViewChild('videoPlayer', { static: true })
  videoPlayer!: ElementRef<HTMLVideoElement>;
  private dialogService = inject(DialogService);
  isPlaying: WritableSignal<boolean> = signal(false);
  progress: number = 0;

  togglePlay(play: boolean) {
    const video = this.videoPlayer.nativeElement;
    if (play) {
      this.isPlaying.set(true);
      video.play().catch(() => this.isPlaying.set(false));
      video.muted = true;
    } else {
      this.isPlaying.set(false);
      video.pause();
      this.progress = 0;
      video.currentTime = 0;
    }
  }

  initializeVideo() {
    this.progress = 0;
  }

  updateProgress() {
    const video = this.videoPlayer.nativeElement;
    this.progress = (video.currentTime / video.duration) * 100;
  }

  setProgress(event: MouseEvent) {
    const progressContainer = event.currentTarget as HTMLElement;
    const newTime =
      (event.offsetX / progressContainer.offsetWidth) *
      this.videoPlayer.nativeElement.duration;
    this.videoPlayer.nativeElement.currentTime = newTime;
  }

  openVideoDialog() {
    this.dialogService.openVideoDialog(VideoDialogComponent, this.data);
    this.videoPlayer.nativeElement.pause();
    this.isPlaying.set(false);
  }
}
