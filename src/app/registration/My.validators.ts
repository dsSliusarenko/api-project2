import {AbstractControl} from '@angular/forms';

export class MyValidators {

  static confirmPass(control: AbstractControl): { [key: string]: boolean } {
    const password = control.get('password').value;
    const confirmPass = control.get('confirmPass').value;
    return password && confirmPass && password !== confirmPass ? {confirmPass: true} : null;
  }
}
