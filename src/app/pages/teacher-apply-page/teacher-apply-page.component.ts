import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-apply-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-apply-page.component.html',
  styleUrl: './teacher-apply-page.component.scss'
})
export default class TeacherApplyPageComponent {
  steps = [
    { name: '填寫基本資料', completed: false },
    { name: '填寫履歷', completed: false },
    { name: '填寫學歷背景', completed: false },
    { name: '填寫教學證照', completed: false }
  ];

  currentStepIndex = 0;

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  completeStep(index: number) {
    this.steps[index].completed = true;
  }
}
