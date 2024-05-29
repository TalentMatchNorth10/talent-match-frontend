import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { TmfAlertConfig } from '../dialogs.obj';

@Component({
  selector: 'tmf-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  constructor(
    public dialogRef: DialogRef<AlertComponent>,
    @Inject(DIALOG_DATA) public data: TmfAlertConfig
  ) {}

  close() {
    this.dialogRef.close();
  }
}
