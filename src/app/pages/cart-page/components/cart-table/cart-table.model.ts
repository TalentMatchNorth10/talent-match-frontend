import { FormArray, FormControl } from '@angular/forms';

export enum CartTableFormKey {
  SELECTALL = 'selectAll',
  ROWS = 'rows'
}

export interface CartTableForm {
  [CartTableFormKey.SELECTALL]: FormControl<boolean | null>;
  [CartTableFormKey.ROWS]: FormArray<FormControl<boolean | null>>;
}
