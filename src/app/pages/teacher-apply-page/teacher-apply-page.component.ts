import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';

@Component({
  selector: 'app-teacher-apply-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent
  ],
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

  control = new FormControl();

  items: OptionType[] = [
    { label: 'A', value: 1 },
    { label: 'B', value: 2 }
  ];

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

  displaySelectedOption($event: any) {
    console.log($event, this.control.value);
  }
}
