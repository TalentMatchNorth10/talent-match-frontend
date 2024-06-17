import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { CheckboxComponent } from '@tmf/libs-shared/components';
import { CommonService, TagsResponseModelDataInner } from 'libs/openapi/src';

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

  tags: TagsResponseModelDataInner[] = [];
  tagsFormArray = this.fb.array<
    FormGroup<{
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
            main_category: this.fb.control(false),
            sub_category: this.fb.control<string[]>([])
          })
        );
      });
      this.cancelEditMode();
    });
  }

  openEditMode() {
    this.isEditMode.set(true);
    this.tagsFormArray.enable();
  }

  cancelEditMode() {
    this.isEditMode.set(false);
    this.tagsFormArray.disable();
  }

  updatePreference() {
    // TODO: update preference
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
