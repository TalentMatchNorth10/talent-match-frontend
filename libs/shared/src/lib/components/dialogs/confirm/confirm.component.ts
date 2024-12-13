import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { IConfirm } from '../dialog.interface';
import { TmfConfirmConfig } from '../dialogs.obj';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tmf-confirm',
  standalone: true,
  imports: [NgClass],
  templateUrl: './confirm.component.html',
  host: {
    class: 'flex justify-center items-center'
  }
})
export class ConfirmComponent {
  constructor(
    public dialogRef: DialogRef<boolean, ConfirmComponent>,
    @Inject(DIALOG_DATA) public data: TmfConfirmConfig
  ) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
