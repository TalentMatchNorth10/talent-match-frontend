import { Dialog } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { ConfirmComponent } from '@tmf/libs-shared/components/dialogs/confirm/confirm.component';
import { AlertComponent } from '@tmf/libs-shared/components/dialogs/alert/alert.component';
import { Observable } from 'rxjs';
import {
  TmfAlertConfig,
  TmfConfirmConfig
} from '@tmf/libs-shared/components/dialogs/dialogs.obj';
import { ReserveComponent } from '@tmf/libs-shared/components/dialogs/reserve/reserve.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: Dialog) {}

  open<T, D>(component: ComponentType<T>, dialogData: D) {
    return this.dialog.open(component, {
      data: dialogData
    });
  }

  openAlertDialog(config?: TmfAlertConfig) {
    const data = config || new TmfAlertConfig();
    return this.dialog.open(AlertComponent, {
      data
    });
  }

  openConfirmDialog(config?: TmfConfirmConfig): Observable<boolean> {
    const data = config || new TmfConfirmConfig();
    return this.dialog.open(ConfirmComponent, {
      data
    }).closed as Observable<boolean>;
  }

  openVideoDialog<T, D>(component: ComponentType<T>, dialogData?: D) {
    return this.dialog.open(component, {
      autoFocus: 'none',
      backdropClass: 'video-mask',
      data: dialogData
    });
  }

  openReserveDialog<D>(dialogData?: D) {
    return this.dialog.open(ReserveComponent, {
      autoFocus: 'none',
      data: dialogData
    });
  }
}
