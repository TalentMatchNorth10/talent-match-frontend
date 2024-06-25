import {
  ApiCommonSearchResultAllGetRequestParams,
  CommonService
} from './../../../../libs/openapi/src/api/common.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import ResultKeywordPageComponent from '../result-keyword-page/result-keyword-page.component';
import { ResultCourseListComponent } from '../result-keyword-page/component/result-course-list/result-course-list.component';
import { TagsResponseModelDataInner } from 'libs/openapi/src';
import { ReplaySubject, map, tap } from 'rxjs';

@Component({
  selector: 'app-result-tag-page',
  standalone: true,
  imports: [CommonModule, ResultCourseListComponent],
  templateUrl: './result-tag-page.component.html',
  styleUrl: './result-tag-page.component.scss'
})
export default class ResultTagPageComponent extends ResultKeywordPageComponent {
  tags!: TagsResponseModelDataInner[];
  tags$ = new ReplaySubject<TagsResponseModelDataInner[]>();
  currentTag?: TagsResponseModelDataInner;
  override readonly queryKey: Array<
    keyof ApiCommonSearchResultAllGetRequestParams
  > = ['cityId', 'mainCategory', 'subCategory', 'page', 'size', 'sort'];

  override ngOnInit(): void {
    this.route.queryParams.subscribe((qp) => {
      this.query$.next(this.getQuery(qp));
      if (this.query.mainCategory) {
        this.tags$.subscribe((tags) => {
          this.currentTag = this.tags.find(
            (tag) => tag.main_category === this.query.mainCategory
          );
        });
      }
    });
    this.subscribeFetchData();

    this.commonService
      .apiCommonTagGet()
      .pipe(
        map((d) => d.data),
        tap((d) => (this.tags = d))
      )
      .subscribe(this.tags$);
  }

  mainCategory(tag: TagsResponseModelDataInner) {
    this.currentTag = tag;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        mainCategory: tag.main_category,
        subCategory: null,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }

  subCategory(subTag: string | null) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { subCategory: subTag, page: 1 },
      queryParamsHandling: 'merge'
    });
  }

  cityId(cityId: string | null) {
    cityId = cityId === 'all' ? null : cityId;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { cityId, page: 1 },
      queryParamsHandling: 'merge'
    });
  }

  clearMainCategory() {
    delete this.currentTag;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        mainCategory: null,
        subCategory: null,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }
}
