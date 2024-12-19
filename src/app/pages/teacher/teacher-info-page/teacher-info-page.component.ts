import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GetTeacherInfoResponseModelData,
  GetTeacherInfoResponseModelDataCategoriesInner
} from 'libs/openapi/src';
import {
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { TagOption } from '../../teacher-apply-page/teacher-apply-page.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray
} from '@angular/forms';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';
import {
  FormattedTeacherData,
  TeacherInfoPageServiceService
} from './teacher-info-page-service.service';
import { forkJoin } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TmfCategoryPipe } from '@tmf/shared';

@Component({
  selector: 'app-teacher-info-page',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    OptionComponent,
    ReactiveFormsModule,
    QuillEditorComponent,
    TmfCategoryPipe
  ],
  templateUrl: './teacher-info-page.component.html'
})
export default class TeacherInfoPageComponent {
  // ---------- Properties ----------
  private teacherInfoPageService = inject(TeacherInfoPageServiceService);
  private fb = inject(FormBuilder);
  tagOptions: TagOption[] = [];
  nationOptions: OptionType[] = [];
  teacherInfo!: GetTeacherInfoResponseModelData;
  expandedSections: { [key: string]: boolean } = {
    basicInfo: true,
    workExperience: true,
    education: true,
    teaching: true,
    video: true
  };

  // ---------- Signals ----------
  baseInfo = signal<{
    nationality: string;
    introduction: string;
    categories: GetTeacherInfoResponseModelDataCategoriesInner[];
  }>({
    nationality: '',
    introduction: '',
    categories: []
  });

  editMode = signal({
    basicInfo: false,
    workExperience: false,
    education: false,
    teaching: false,
    video: false
  });

  // ---------- Form ----------
  fg = this.fb.group({
    introduction: [''],
    nationality: [''],
    topicControl: [[] as string[]],
    categories: this.fb.array<
      FormGroup<{
        category_id: FormControl<string | null>;
        sub_categories: FormControl<string[] | null>;
      }>
    >([])
  });

  // ---------- Lifecycle ----------
  ngOnInit(): void {
    forkJoin({
      options: forkJoin({
        tags: this.teacherInfoPageService.getTagOptions(),
        nations: this.teacherInfoPageService.getNationOptions()
      }),
      teacherInfo: this.teacherInfoPageService.getTeacherInfo()
    }).subscribe(({ options, teacherInfo }) => {
      this.tagOptions = options.tags.map((tag) => ({
        value: tag._id,
        main_category: tag.main_category,
        sub_category: tag.sub_category
      }));
      this.nationOptions = options.nations;

      this.teacherInfo = teacherInfo;
      this.baseInfo.set({
        nationality: this.teacherInfo.nationality,
        introduction: this.teacherInfo.introduction,
        categories: this.teacherInfo.categories
      });

      this.initForm();
    });
  }

  // ---------- Form Methods ----------
  initForm() {
    const formData = this.prepareFormData();
    this.updateFormValues(formData);
  }

  private prepareFormData(): FormattedTeacherData {
    return this.teacherInfoPageService.formatTeacherData(
      this.teacherInfo,
      this.tagOptions,
      this.nationOptions
    );
  }

  private updateFormValues(formData: FormattedTeacherData) {
    this.fg.patchValue({
      introduction: formData.introduction,
      nationality: formData.nationality,
      topicControl: formData.topicControl
    });

    this.handleCategoryChange(formData.topicControl);
    this.updateSubCategories(formData.categories);
  }

  private updateSubCategories(
    categories: GetTeacherInfoResponseModelDataCategoriesInner[]
  ) {
    categories.forEach((category) => {
      const categoryId = this.transTopicNameToId(category.category_id!);
      const categoryControl = this.fg.controls.categories.controls.find(
        (control) => control.get('category_id')?.value === categoryId
      );

      if (categoryControl) {
        categoryControl.patchValue({
          sub_categories: category.sub_categories
        });
      }
    });
  }

  // ---------- Category Methods ----------
  handleCategoryChange(value: string[]) {
    const categories = this.fg.controls.categories;
    const valueSet = new Set(value);

    // 移除不在 value 中的 category
    this.removeUnusedCategories(categories, valueSet);

    // 添加新的 category
    this.addNewCategories(value, categories);
  }

  private removeUnusedCategories(categories: FormArray, valueSet: Set<string>) {
    for (let i = categories.controls.length - 1; i >= 0; i--) {
      const group = categories.controls[i] as FormGroup;
      if (!valueSet.has(group.get('category_id')?.value)) {
        categories.removeAt(i);
      }
    }
  }

  private addNewCategories(value: string[], categories: FormArray) {
    value.forEach((id) => {
      const categoryExists = categories.controls.some(
        (group) => (group as FormGroup).get('category_id')?.value === id
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

  getCategoryLabel(categoryId: string) {
    const tag = this.tagOptions.find((tag) => tag.value === categoryId);
    return tag?.main_category || '';
  }

  getSubCategoryOptions(categoryId: string) {
    const category = this.tagOptions.find((tag) => tag.value === categoryId);
    return category?.sub_category || [];
  }

  private transTopicNameToId(name: string): string {
    const topic = this.tagOptions.find((topic) => topic.value === name);
    return topic?.value || '';
  }

  // ---------- UI Event Handlers ----------
  toggleSection(section: string): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  handleSave(event: UIEvent, section: 'basicInfo') {
    event.stopPropagation();
    switch (section) {
      case 'basicInfo':
        this.teacherInfoPageService
          .saveBaseInfo(this.fg.value, this.nationOptions)
          .pipe(
            // 儲存成功後切換到獲取教師資訊的流
            switchMap(() => this.teacherInfoPageService.getTeacherInfo()),
            // 更新本地狀態
            tap((teacherInfo) => {
              this.teacherInfo = teacherInfo;
              this.baseInfo.set({
                nationality: this.teacherInfo.nationality,
                introduction: this.teacherInfo.introduction,
                categories: this.teacherInfo.categories
              });
              this.handleCancel(event, 'basicInfo');
            })
          )
          .subscribe();
        break;
    }
  }

  handleCancel(event: UIEvent, section: 'basicInfo') {
    event.stopPropagation();
    this.editMode.set({
      ...this.editMode(),
      [section]: false
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
