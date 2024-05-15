import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export enum CustomValidatorError {
  NotMatch = 'notMatch'
}

/**
 * 說明：檢查兩個指定欄位的值是否匹配。
 * @param field1 第一個欄位名稱。
 * @param field2 第二個欄位名稱，將與第一個欄位比較。
 * @returns 返回一個 ValidatorFn 函數，該函數檢查兩個欄位的值是否一致。
 */
function matchValidator(field1: string, field2: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control1 = formGroup.get(field1);
    const control2 = formGroup.get(field2);

    if (!control1 || !control2) {
      return null;
    }

    if (control2.errors && !control2.errors[CustomValidatorError.NotMatch]) {
      return null;
    }

    if (control1.value !== control2.value) {
      control2.setErrors({ [CustomValidatorError.NotMatch]: true });
    } else {
      control2.setErrors(null);
    }

    return null;
  };
}

export const CustomValidators = { match: matchValidator };
