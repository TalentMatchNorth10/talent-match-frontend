import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  InputComponent,
  SelectComponent,
  OptionComponent
} from '@tmf/libs-shared/components';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import EditComponent from '../edit/edit.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    VideoCardComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    RouterModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './../edit/edit.component.scss'
})
export default class AddComponent extends EditComponent {
  override ngOnInit(): void {
    this.getTags();
    this.getCourse();
  }
  override save() {
    if (this.formGroup.valid) {
      this.teacherVideoService
        .apiTeacherVideoPost({
          addTeacherVideoRequestModel: Object.assign(this.formGroup.value)
        })
        .subscribe((res) => {
          if (res.status) {
            this.dialogService.openAlertDialog({
              title: '新增成功',
              content: res.data.message
            });
            this.router.navigate(['../'], { relativeTo: this.route });
          }
        });
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
