import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { VideoSelectComponent } from '../video-select/video-select.component';
import { TeacherVideoService } from 'libs/openapi/src';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoCardComponent],
  template: `
    <div class="mb-1 flex flex-col">
      <p>
        <span *ngIf="label" class="select-label">{{ label }}</span>
        <span *ngIf="isRequired" class="text-red-500">*</span>
      </p>
      <p *ngIf="info" class="mb-2 ml-2 text-sm text-gray-500">{{ info }}</p>
    </div>
    <button
      (click)="!disabled ? selectVideo() : null"
      [ngClass]="{
        'mb-5': selectVideos.length > 0,
        'cursor-not-allowed !bg-tmf-gray-3': disabled
      }"
      class="rounded-md bg-tmf-orange-1 px-2 py-1 text-white"
    >
      管理短影片
    </button>
    <div class="flex max-w-full gap-3 overflow-auto">
      @for (video of selectVideos; track video; let idx = $index) {
        <tmf-video-card [data]="video"></tmf-video-card>
      }
    </div>
  `,
  styleUrl: './video-list.component.css'
})
export class VideoListComponent implements OnChanges {
  private teacherVideoService = inject(TeacherVideoService);
  private dialog = inject(Dialog);

  @Input() label = '';
  @Input() info = '';
  @Input() isRequired: boolean = false;
  @Input() videoIds: string[] = [];
  @Input() disabled: boolean = false;
  @Input() courseId: string = '';
  @Input() teacherId: string = '';
  @Output() selectVideoChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  videos: VideoCardData[] = [];
  selectedVideos: VideoCardData[] = [];

  get selectVideos() {
    if (this.selectedVideos.length > 0) {
      return this.selectedVideos;
    }

    return this.videos.filter((video) =>
      this.videoIds.includes(video.video_id)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['videoIds'] &&
      changes['videoIds'].currentValue &&
      this.videoIds.length
    ) {
      this.getAllVideos();
    }
  }

  getAllVideos() {
    this.teacherVideoService.apiTeacherVideoGet().subscribe((videos) => {
      this.videos = videos.data.map((video) => ({
        video_id: video._id,
        name: video.name,
        category: video.category,
        intro: video.intro,
        video_type: video.video_type,
        url: video.url,
        teacher_id: video.teacher_id,
        ...(video.course_id ? { course_id: video.course_id } : {})
      }));
    });
  }

  selectVideo() {
    const dialogRef = this.dialog.open(VideoSelectComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '80vh',
      maxWidth: '80vw',
      data: {
        videoIds: this.selectedVideos.length
          ? this.selectedVideos.map((item) => item.video_id)
          : this.videoIds,
        courseId: this.courseId,
        teacherId: this.teacherId
      }
    });
    dialogRef.closed.subscribe((result) => {
      if (result) {
        this.selectedVideos = result as VideoCardData[];
        this.selectVideoChange.emit(
          this.selectedVideos.map((item) => item.video_id)
        );
      }
    });
  }
}
