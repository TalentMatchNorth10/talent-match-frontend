import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent, InputType } from '@tmf/libs-shared/components';
import { OptionComponent } from '@tmf/libs-shared/components/form/select/option/option.component';
import { SelectComponent } from '@tmf/libs-shared/components/form/select/select.component';
import { SwitchComponent } from '@tmf/libs-shared/components/form/switch/switch.component';
import { PaginationComponent } from '@tmf/libs-shared/components/pagination/pagination.component';
import { PaginationConfig } from '@tmf/libs-shared/components/pagination/pagination.model';

@Component({
  selector: 'app-result-tag-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationComponent,
    SwitchComponent,
    SelectComponent,
    OptionComponent,
    InputComponent
  ],
  templateUrl: './result-tag-page.component.html',
  styleUrl: './result-tag-page.component.scss'
})
export default class ResultTagPageComponent {
  config: PaginationConfig = {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    maxPageDisplay: 3
  };

  control = new FormControl(false, [Validators.required]);

  readonly InputType = InputType;

  items = [
    { label: '依關鍵字', value: 1 },
    { label: '依類別', value: 2 }
  ];

  change(event: number) {
    console.log(event);
  }

  search(event: any) {
    console.log(event);
  }

  ngOnInit() {
    // this.control.disable();
    this.control.valueChanges.subscribe((value) => {});
  }
}
