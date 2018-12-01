import { Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import {  } from 'rxjs/add/observable/dom/ajax';


export class UserValidator implements Validators {

    static userExists(formControl: FormControl) {
        if (!formControl.value) { return of(null); }
        return true;
    }
}
