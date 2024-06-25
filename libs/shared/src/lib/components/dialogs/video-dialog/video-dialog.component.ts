import {
  Component,
  ElementRef,
  ViewChild,
  WritableSignal,
  signal,
  Inject
} from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { VideoCardData } from '../../short-video-card/video-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'tmf-video-dialog',
  standalone: true,
  imports: [],
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.css'
})
export class VideoDialogComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying: WritableSignal<boolean> = signal(false);
  progress: number = 0;

  // videoUrl =
  //   'https://storage.googleapis.com/talent-match-fd353.appspot.com/images/users/2f8dda8c-fcc9-4a19-bb2a-000bf1833c78.mp4?GoogleAccessId=firebase-adminsdk-vnucd%40talent-match-fd353.iam.gserviceaccount.com&Expires=16756646400&Signature=i83ZRQbK8PoBms7MLXx1TOcmNJaxl86lMpuxSkDiajDnu%2FRDY6V8U2eqOZXSVF6QlSYC0cpxzWWP0emSNa477pMLW5KZNfB6BfX2vf2o%2F7%2B%2FKhYIieT6MGzc%2F3C6uQKRhePtq9RJQEpePCJTkpA3WbVs9lrn08qj6PDB15qmZMpP37ryLODAZrkQTnOhbq1aNdyC3P4WrxIAPdX3oe698yzpwfqG%2Bh49NAO54u%2BaHaUuY5U24DF2bD6ZQ6Yg%2B53EfB6vPgPWI9pjPvqFQc7SFfYon9%2BQFzG3C6sSbMWZOWLKrkzXyzrxPlyoPkjKn3ITl3MVwAaaTG8oZT6cqBGcrg%3D%3D';

  constructor(
    public dialogRef: DialogRef<boolean, VideoDialogComponent>,
    protected readonly router: Router,
    @Inject(DIALOG_DATA) public data: VideoCardData
  ) {}

  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.play();
    this.isPlaying.set(true);
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

  close() {
    this.dialogRef.close();
  }

  public navigateToCoursePage(data: VideoCardData): void {
    this.router.navigate([`course-detail/${data.course_id}`]);
    this.close();
  }
}
