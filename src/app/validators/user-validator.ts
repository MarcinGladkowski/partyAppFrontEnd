import { HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

export class UserValidator implements Validators {

    static userExistsByEmail(formControl: FormControl) {
        if (!formControl.value) { return of(null); }
        return ajax.get(`${environment.api}/auth/is-exists?email=${formControl.value}`).pipe(
          map((ajaxResponse) => ajaxResponse.response !== null),
          map((hasUser) => hasUser ? null : {usernameExists: true},
            catchError((res: HttpErrorResponse) => {
              return of(null);
            })
          )
        );
    }

    static userExistsByUserName(formControl: FormControl) {
        if (!formControl.value) { return of(null); }
        return ajax.get(`${environment.api}/auth/is-exists?username=${formControl.value}`).pipe(
          map((ajaxResponse) => ajaxResponse.response !== null),
          map((hasUser) => hasUser ? {usernameExists: true} : null),
          catchError((res: HttpErrorResponse) => {
            return of(null);
          })
        );
    }
}
