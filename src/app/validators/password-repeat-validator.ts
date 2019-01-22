import {FormGroup, ValidatorFn} from '@angular/forms';

export const PasswordRepeatValidator: ValidatorFn | null = (fg: FormGroup) => {
  const newPassword = fg.get('newPassword').value;
  const newPasswordRepeat = fg.get('newPasswordRepeat').value;
  return newPassword !== null && newPasswordRepeat !== null && newPassword === newPasswordRepeat ? null : { diff: true };
};

export const PasswordRegisterRepeatValidator: ValidatorFn | null = (fg: FormGroup) => {
  const password = fg.get('password').value;
  const repeatPassword = fg.get('repeatPassword').value;
  return password !== null && repeatPassword !== null && password === repeatPassword ? null : { diff: true };
};
