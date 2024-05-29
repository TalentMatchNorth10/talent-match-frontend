import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.scss'
})
export default class CourseDetailPageComponent implements OnInit {
  public course_id: string = '';

  constructor(protected readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log(params);
      this.course_id = params['id'];
    });
  }
}
