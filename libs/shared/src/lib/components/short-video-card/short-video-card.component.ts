import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-short-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-video-card.component.html',
  styleUrl: './short-video-card.component.scss'
})
export class ShortVideoCardComponent implements OnInit {
  @Input() public videoId: string = '';
  @Input() public tag: string = '';
  @Input() public description: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  public get videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?modestbranding=1`
    );
  }

  ngOnInit(): void {}
}
