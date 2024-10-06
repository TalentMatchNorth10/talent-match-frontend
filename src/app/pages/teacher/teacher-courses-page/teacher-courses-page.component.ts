import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { ChangeViewEvent } from './components/course-table/course-table.model';

export enum ViewMode {
  List = 'list',
  View = 'view',
  Edit = 'edit',
  Create = 'create'
}

@Component({
  selector: 'app-teacher-courses-page',
  standalone: true,
  imports: [CommonModule, CourseTableComponent, CourseDetailComponent],
  templateUrl: './teacher-courses-page.component.html',
  styleUrl: './teacher-courses-page.component.scss'
})
export default class TeacherCoursesPageComponent {
  mode = signal(ViewMode.List);
  currentCourseId = signal<string | null>(null);

  readonly ViewMode = ViewMode;

  handleChangeView(event: ChangeViewEvent) {
    this.mode.set(event.mode);
    if (event.courseId) {
      this.currentCourseId.set(event.courseId);
    }
  }
}
