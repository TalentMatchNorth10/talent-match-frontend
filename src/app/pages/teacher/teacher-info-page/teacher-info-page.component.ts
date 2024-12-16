import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CommonService,
  GetTeacherInfoResponseModelData,
  GetTeacherInfoResponseModelDataCategoriesInner,
  TeacherInfoService
} from 'libs/openapi/src';
import {
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { TagOption } from '../../teacher-apply-page/teacher-apply-page.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';

@Component({
  selector: 'app-teacher-info-page',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    OptionComponent,
    ReactiveFormsModule,
    QuillEditorComponent
  ],
  templateUrl: './teacher-info-page.component.html'
})
export default class TeacherInfoPageComponent {
  private teacherService = inject(TeacherInfoService);
  private commonService = inject(CommonService);
  tagOptions: TagOption[] = [];
  nationOptions: OptionType[] = [];
  teacherInfo!: GetTeacherInfoResponseModelData;

  baseInfo = signal<{
    nationality: string;
    introduction: string;
    categories: GetTeacherInfoResponseModelDataCategoriesInner[];
  }>({
    nationality: '',
    introduction: '',
    categories: []
  });

  expandedSections: { [key: string]: boolean } = {
    basicInfo: true,
    workExperience: true,
    education: true,
    teaching: true,
    video: true
  };

  editMode = signal({
    basicInfo: false,
    workExperience: false,
    education: false,
    teaching: false,
    video: false
  });

  private fb = inject(FormBuilder);

  fg = this.fb.group({
    introduction: this.fb.control(''),
    nationality: this.fb.control(''),
    topicControl: this.fb.control(['665482f25b0ab5aecf1a93b3']),
    categories: this.fb.array([
      this.fb.group({
        category_id: this.fb.control('665482f25b0ab5aecf1a93b2'),
        sub_categories: this.fb.control(['繪畫', '雕塑', '攝影'])
      })
    ])
  });

  ngOnInit(): void {
    this.getOptions();
    this.teacherService.apiTeacherInfoGet().subscribe((teacher) => {
      console.log(teacher);
      this.teacherInfo = teacher.data;

      this.baseInfo.set({
        nationality: this.teacherInfo.nationality,
        introduction: this.teacherInfo.introduction,
        categories: this.teacherInfo.categories
      });
    });
  }

  toggleSection(section: string): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  getOptions() {
    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tagOptions = res.data.map((tag) => ({
        value: tag._id,
        main_category: tag.main_category,
        sub_category: tag.sub_category
      }));
    });

    this.commonService.apiCommonOptionsNationGet().subscribe((res) => {
      this.nationOptions = res.data;
    });
  }

  getCategoryLabel(categoryId: string) {
    const tag = this.tagOptions.find((tag) => tag.value === categoryId);
    return tag?.main_category || '';
  }

  getSubCategoryOptions(categoryId: string) {
    const category = this.tagOptions.find((tag) => tag.value === categoryId);
    return category?.sub_category || [];
  }

  handleCategoryChange(value: string[]) {
    const categories = this.fg.controls.categories;
    const valueSet = new Set(value);

    // 移除不在 value 中的 category
    for (let i = categories.controls.length - 1; i >= 0; i--) {
      const group = categories.controls[i];
      if (!valueSet.has(group.controls.category_id.value!)) {
        categories.removeAt(i);
      }
    }

    // 添加新的 category
    value.forEach((id) => {
      const categoryExists = categories.controls.some(
        (group) => group.controls.category_id.value === id
      );

      if (!categoryExists) {
        categories.push(
          this.fb.group({
            category_id: this.fb.control(id, [Validators.required]),
            sub_categories: this.fb.control<string[] | null>(
              [],
              [Validators.required]
            )
          })
        );
      }
    });
  }

  handleEditMode(
    event: UIEvent,
    section: 'basicInfo' | 'workExperience' | 'education' | 'teaching' | 'video'
  ) {
    event.stopPropagation();
    this.editMode.set({
      ...this.editMode(),
      [section]: !this.editMode()[section]
    });
  }
}
