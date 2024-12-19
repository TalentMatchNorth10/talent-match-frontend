import { inject, Injectable } from '@angular/core';
import {
  ApiTeacherInfoBasicPatchRequestParams,
  CityResponseModelDataInner,
  CommonService,
  GetTeacherInfoResponseModelData,
  GetTeacherInfoResponseModelDataCategoriesInner,
  TagsResponseModelDataInner,
  TeacherInfoService
} from 'libs/openapi/src';
import { Observable, map } from 'rxjs';
import { TagOption } from '../../teacher-apply-page/teacher-apply-page.model';
import { OptionType } from '@tmf/libs-shared/components';

export interface FormattedTeacherData {
  introduction: string;
  nationality: string;
  topicControl: string[];
  categories: GetTeacherInfoResponseModelDataCategoriesInner[];
}

@Injectable({
  providedIn: 'root'
})
export class TeacherInfoPageServiceService {
  private teacherService = inject(TeacherInfoService);
  private commonService = inject(CommonService);

  // 取得教師資料
  getTeacherInfo(): Observable<GetTeacherInfoResponseModelData> {
    return this.teacherService
      .apiTeacherInfoGet()
      .pipe(map((teacher) => teacher.data));
  }

  // 取得國家資訊
  getNationOptions(): Observable<CityResponseModelDataInner[]> {
    return this.commonService
      .apiCommonOptionsNationGet()
      .pipe(map((res) => res.data));
  }

  // 取得標籤資訊
  getTagOptions(): Observable<TagsResponseModelDataInner[]> {
    return this.commonService.apiCommonTagGet().pipe(map((res) => res.data));
  }

  formatTeacherData(
    teacherInfo: GetTeacherInfoResponseModelData,
    tagOptions: TagOption[],
    nationOptions: OptionType[]
  ): FormattedTeacherData {
    const categoryIds = teacherInfo.categories.map((category) =>
      this.transTopicNameToId(category.category_id!, tagOptions)
    );

    return {
      introduction: teacherInfo.introduction,
      nationality: this.transNationNameToId(
        teacherInfo.nationality,
        nationOptions
      ),
      topicControl: categoryIds,
      categories: teacherInfo.categories
    };
  }

  private transNationNameToId(
    name: string,
    nationOptions: OptionType[]
  ): string {
    const nation = nationOptions.find((nation) => nation.label === name);
    return nation?.value || '';
  }

  private transNationIdToName(id: string, nationOptions: OptionType[]): string {
    const nation = nationOptions.find((nation) => nation.value === id);
    return nation?.label || '';
  }

  private transTopicNameToId(name: string, tagOptions: TagOption[]): string {
    const topic = tagOptions.find((topic) => topic.value === name);
    return topic?.value || '';
  }

  saveBaseInfo(formgValue: any, nationOptions: OptionType[]): Observable<any> {
    const req: ApiTeacherInfoBasicPatchRequestParams = {
      patchTeacherInfoBasicRequestModel: {
        nationality:
          this.transNationIdToName(formgValue.nationality, nationOptions) ?? '',
        introduction: formgValue.introduction ?? '',
        categories: formgValue.categories
      }
    };

    return this.teacherService.apiTeacherInfoBasicPatch(req);
  }
}
