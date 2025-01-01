import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject, Inject } from '@angular/core';
import { InputComponent, InputType } from '../../form';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'tmf-account',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './account.component.html'
})
export class AccountComponent {
  private fb = inject(FormBuilder);

  readonly InputType = InputType;

  constructor(
    public dialogRef: DialogRef<AccountComponent>,
    @Inject(DIALOG_DATA)
    public data: any
  ) {}

  fg = this.fb.group({
    bankCode: ['', Validators.required],
    bankAccount: ['', Validators.required],
    accountName: ['', Validators.required]
  });

  onSave() {
    // TODO: 儲存
  }
}
