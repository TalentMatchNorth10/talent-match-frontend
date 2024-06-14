import { Injectable, WritableSignal, signal } from '@angular/core';
import { PurchasedCourses } from './student-courses-page.component';

@Injectable({
  providedIn: 'root'
})
export class StudetnCourseService {
  private purchasedCourses: WritableSignal<PurchasedCourses[]> = signal([]);
  purchasedCoursesSig = this.purchasedCourses.asReadonly();

  updatePurchasedCourses(courses: PurchasedCourses[]) {
    this.purchasedCourses.set(courses);
  }
}
