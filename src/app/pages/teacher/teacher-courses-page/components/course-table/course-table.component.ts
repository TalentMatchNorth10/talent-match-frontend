import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  output,
  signal
} from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from '@tmf/libs-shared/components';
import {
  GetTeacherCoursesResponseModelDataInner,
  TeacherCourseService
} from 'libs/openapi/src';
import {
  Action,
  ActionType,
  ChangeViewEvent,
  CourseStatus,
  PublishedChange,
  PublishedChangeType,
  SortColumn
} from './course-table.model';
import { ViewMode } from '../../teacher-courses-page.component';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SwitchComponent],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.scss'
})
export class CourseTableComponent implements OnInit {
  private dialogService = inject(DialogService);
  private teacherCourseService = inject(TeacherCourseService);

  changeView = output<ChangeViewEvent>();

  dataSource: Array<GetTeacherCoursesResponseModelDataInner> = [];
  sort = signal<string | null>(null);
  publishedArray = new FormArray<FormControl<boolean | null>>([]);

  readonly SortColumn = SortColumn;
  readonly ViewMode = ViewMode;
  readonly ActionType = ActionType;
  readonly CourseStatus = CourseStatus;

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.teacherCourseService.apiTeacherCourseCoursesGet().subscribe((res) => {
      this.dataSource = res.data;
      this.resetPublishedArray();
    });
  }

  resetPublishedArray() {
    this.publishedArray.clear();
    if (this.dataSource.length) {
      this.dataSource.forEach((course) => {
        const control = new FormControl(
          course.status === CourseStatus.PUBLISHED
        );
        this.publishedArray.push(control);
        if (course.status === CourseStatus.DRAFT) {
          control.disable();
        }
      });
    }
  }

  changeSort(column: SortColumn, direction: 'asc' | 'desc') {
    this.sort.set(`${column}-${direction}`);
    if (column === SortColumn.Name) {
      const sortDataSource = [...this.dataSource];
      sortDataSource.sort((a, b) => {
        return direction === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      this.dataSource = sortDataSource;
    } else if (column === SortColumn.Published) {
      const sortDataSource = [...this.dataSource];
      sortDataSource.sort((a, b) => {
        const order = direction === 'asc' ? 1 : -1;
        return (a.status - b.status) * order;
      });
      this.dataSource = sortDataSource;
    }

    this.resetPublishedArray();
  }
  togglePublished(index: number) {
    const control = this.publishedArray.at(index);
    this.handlePublishedChange(control, {
      type: control.value
        ? PublishedChangeType.Published
        : PublishedChangeType.Unpublished,
      courseId: this.dataSource[index].id
    });
  }

  handleAction(action: Action) {
    switch (action.type) {
      case 'view':
        this.changeView.emit({
          mode: ViewMode.View,
          courseId: action.data.id
        });
        break;
      case 'edit':
        this.changeView.emit({
          mode: ViewMode.Edit,
          courseId: action.data.id
        });
        break;
      case 'delete':
        this.dialogService
          .openConfirmDialog({
            title: '確定要刪除嗎?',
            content: '刪除後將無法恢復，你確定要刪除嗎？',
            confirmBtnText: '確定刪除',
            btnType: 'danger'
          })
          .subscribe((isConfirmed) => {
            if (isConfirmed) {
              this.teacherCourseService
                .apiTeacherCourseCoursesCourseIdDelete({
                  courseId: action.data.id
                })
                .subscribe((res) => this.getAllCourses());
            }
          });
        break;
    }
  }

  handlePublishedChange(control: FormControl, publishChange: PublishedChange) {
    if (publishChange.type === PublishedChangeType.Published) {
      this.teacherCourseService
        .apiTeacherCourseCoursesCourseIdUnpublishPost({
          courseId: publishChange.courseId
        })
        .subscribe({
          next: (res) => {
            this.getAllCourses();
            control.setValue(!control.value);
          },
          error: (res) => {
            this.dialogService
              .openAlertDialog({
                title: '發生錯誤',
                content: res.error.message
              })
              .closed.subscribe(() => this.getAllCourses());
          }
        });
    } else {
      this.teacherCourseService
        .apiTeacherCourseCoursesCourseIdPublishPost({
          courseId: publishChange.courseId
        })
        .subscribe({
          next: (res) => {
            this.getAllCourses();
            control.setValue(!control.value);
          },
          error: (res) => {
            this.dialogService
              .openAlertDialog({
                title: '發生錯誤',
                content: res.error.message
              })
              .closed.subscribe(() => this.getAllCourses());
          }
        });
    }
  }
}
