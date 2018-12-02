import { HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

export class UserValidator implements Validators {

    static userExists(formControl: FormControl) {
        if (!formControl.value) { return of(null); }
        return ajax.get(`${environment.api}/auth/is-exists?email=${formControl.value}`).pipe(
            map((ajaxResponse) => {
                if (ajaxResponse.response.status) { return null; }
            }),
            catchError((res: HttpErrorResponse) => {
                return of({userExists: {message: 'Brak podanego adresu w aplikacji'}});
            })
        );
    }
}
