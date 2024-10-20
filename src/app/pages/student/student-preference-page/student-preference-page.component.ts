import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CheckboxComponent } from '@tmf/libs-shared/components';
import {
  CommonService,
  StudentPreferenceService,
  TagsResponseModelDataInner
} from 'libs/openapi/src';

@Component({
  selector: 'app-student-preference-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxComponent],
  templateUrl: './student-preference-page.component.html',
  styleUrl: './student-preference-page.component.scss'
})
export default class StudentPreferencePageComponent implements OnInit {
  private commonService = inject(CommonService);
  private fb = inject(FormBuilder);
  private studentPreferenceService = inject(StudentPreferenceService);

  tags: TagsResponseModelDataInner[] = [];
  tagsFormArray = this.fb.array<
    FormGroup<{
      id: FormControl<string | null>;
      main_category: FormControl<boolean | null>;
      sub_category: FormControl<string[] | null>;
    }>
  >([]);
  isEditMode = signal(false);

  ngOnInit(): void {
    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tags = res.data;
      this.tags.forEach((tag) => {
        this.tagsFormArray.push(
          this.fb.group({
            id: this.fb.control(tag._id),
            main_category: this.fb.control(false),
            sub_category: this.fb.control<string[]>([])
          })
        );
      });
      this.cancelEditMode();
      this.getPreferences();
    });

    this.getPreferences();
  }

  openEditMode() {
    this.isEditMode.set(true);
    this.tagsFormArray.enable();
  }

  cancelEditMode() {
    this.isEditMode.set(false);
    this.tagsFormArray.disable();
  }

  getPreferences() {
    this.studentPreferenceService.apiStudentPreferenceGet().subscribe((res) => {
      const preferences = res.data;
      this.tagsFormArray.controls.forEach((control, index) => {
        const preference = preferences?.find(
          (preference) => preference.preference_id === control.get('id')?.value
        );

        if (preference) {
          control.patchValue({
            main_category:
              preference.preference_tags?.length ===
              this.tags[index].sub_category?.length,
            sub_category: preference.preference_tags
          });
        }
      });
    });
  }

  updatePreferences() {
    const preferences = this.tagsFormArray.value
      .filter((item) => item.sub_category && item.sub_category.length)
      .map((tag) => {
        return {
          preference_id: tag.id!,
          preference_tags: tag.sub_category!
        };
      });

    this.studentPreferenceService
      .apiStudentPreferencePost({
        updateStudentPreferencesRequestModelInner: preferences
      })
      .subscribe((res) => {
        this.cancelEditMode();
        this.getPreferences();
      });
  }

  getSubTagOptions(sub_category: string[]) {
    return sub_category.map((tag) => {
      return {
        label: tag,
        value: tag
      };
    });
  }

  handleMainCategoryChange(event: boolean, index: number) {
    const subCategoryControl =
      this.tagsFormArray.controls[index].get('sub_category');
    if (event) {
      subCategoryControl?.setValue(
        this.tags[index].sub_category!.map((subTag) => subTag)
      );
    } else {
      subCategoryControl?.setValue([]);
    }
  }

  handleSubCategoryChange(event: string[], index: number) {
    const mainCategoryControl =
      this.tagsFormArray.controls[index].get('main_category');
    if (event.length === this.tags[index].sub_category?.length) {
      mainCategoryControl?.setValue(true);
    } else {
      mainCategoryControl?.setValue(false);
    }
  }
}
