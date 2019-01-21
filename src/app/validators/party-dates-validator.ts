import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';

export const PartyDatesValidator: ValidatorFn | null = (fg: FormGroup) => {
  const startDate = moment(fg.get('endDate').value, 'YYYY-MM-DD HH:MM', true).format('YYYY-MM-DD HH:mm');
  const endDate = moment(fg.get('startDate').value, 'YYYY-MM-DD HH:MM', true).format('YYYY-MM-DD HH:mm');
  return startDate !== endDate || endDate > startDate ? null : { diff: true, startDate: true };
};

export class PartyDateValidator {
  static actualDate(formControl: FormControl) {
    const compareDate = new Date(formControl.value);
    const actualDate = new Date();
    return compareDate > actualDate ? null : {badDate: true};
  }
}

