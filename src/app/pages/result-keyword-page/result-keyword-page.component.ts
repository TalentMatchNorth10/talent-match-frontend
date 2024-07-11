import {
  ApiCommonSearchResultAllGetRequestParams,
  CommonService
} from './../../../../libs/openapi/src/api/common.service';
import { NgClass } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs';
import { SortType } from './result-keyword-page.model';
import { ResultCourseListComponent } from './component/result-course-list/result-course-list.component';

import { SearchResponseModelData } from 'libs/openapi/src';

@Component({
  selector: 'app-result-keyword-page',
  standalone: true,
  imports: [
    NgClass,
    RouterModule,
    ResultCourseListComponent,
    StarRatingComponent
  ],
  templateUrl: './result-keyword-page.component.html',
  styleUrl: './result-keyword-page.component.scss'
})
export default class ResultKeywordPageComponent implements OnInit {
  protected commonService = inject(CommonService);
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);

  data?: SearchResponseModelData;
  readonly queryKey: Array<keyof ApiCommonSearchResultAllGetRequestParams> = [
    'keyword',
    'page',
    'size',
    'sort'
  ];

  query$ = new BehaviorSubject<ApiCommonSearchResultAllGetRequestParams>({});
  get query() {
    return this.query$.value;
  }

  size = 12;

  ngOnInit(): void {
    this.route.queryParams.subscribe((qp) => {
      this.query$.next(this.getQuery(qp));
    });
    this.subscribeFetchData();
  }

  subscribeFetchData() {
    this.query$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        ),
        tap(() => delete this.data),
        switchMap((q) =>
          this.commonService.apiCommonSearchResultAllGet({
            ...q,
            size: this.size
          })
        )
      )
      .subscribe((data) => (this.data = data.data));
  }

  getQuery(qp: Params): ApiCommonSearchResultAllGetRequestParams {
    const query: ApiCommonSearchResultAllGetRequestParams = {};
    this.queryKey.forEach((key) => {
      if (qp[key]) query[key] = qp[key];
    });
    return query;
  }

  sort(sortType: SortType) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sort: sortType, page: 1 },
      queryParamsHandling: 'merge'
    });
  }

  page(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }
}
