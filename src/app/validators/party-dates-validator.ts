import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';

export const PartyDatesValidator: ValidatorFn | null = (fg: FormGroup) => {
  const startDate = new Date(fg.get('startDate').value);
  const endDate = new Date(fg.get('endDate').value);
  return startDate !== endDate && endDate > startDate ? null : { diff: true, startDate: true };
};

export class PartyDateValidator {
  static actualDate(formControl: FormControl) {
    const compareDate = new Date(formControl.value);
    const actualDate = new Date();
    return compareDate > actualDate ? null : {badDate: true};
  }
}

