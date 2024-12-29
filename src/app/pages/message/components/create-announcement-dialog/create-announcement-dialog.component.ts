import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AnnouncementService } from 'libs/openapi/src';
import { AnnouncementForm } from '../../message.model';
import {
  InputComponent,
  InputType,
  OptionComponent,
  SelectComponent
} from '@tmf/libs-shared/components';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DialogService } from '@tmf/shared';

@Component({
  selector: 'app-create-announcement-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    OptionComponent,
    QuillEditorComponent
  ],
  templateUrl: './create-announcement-dialog.component.html',
  styleUrl: './create-announcement-dialog.component.scss'
})
export class CreateAnnouncementDialogComponent {
  private fb = inject(FormBuilder);
  private announcementService = inject(AnnouncementService);
  private dialogService = inject(DialogService);
  private dialogRef = inject(DialogRef);
  private dialogData = inject(DIALOG_DATA);

  announcementForm = this.fb.group<AnnouncementForm>({
    title: this.fb.control(null, [Validators.required]),
    text: this.fb.control(null, [Validators.required]),
    courseIds: this.fb.control([], [Validators.required]),
    target: this.fb.control(null, [Validators.required])
  });

  readonly InputType = InputType;

  get targetOptions() {
    return this.dialogData.targetOptions || [];
  }

  get courseOptions() {
    return this.dialogData.courseOptions || [];
  }

  contentChange(content: string): void {
    this.announcementForm.controls.text.setValue(content);
  }

  submit() {
    if (this.announcementForm.valid) {
      const { title, text, courseIds, target } =
        this.announcementForm.getRawValue();
      this.announcementService
        .apiAnnouncementPost({
          sendAnnouncementRequestModel: {
            title: title || '',
            text: text || '',
            courseIds: courseIds || [],
            target: (target || 'all') as any
          }
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
    } else {
      this.dialogService
        .openAlertDialog({
          title: '錯誤',
          content: '請填寫完整資訊'
        })
        .closed.subscribe();
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
