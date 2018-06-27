import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { PartyListsService} from './services/party-lists.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { JwtInterceptor } from './helpers/jwt';
import { HeaderComponent } from './header/header.component';
import { MatComponent } from './mat/mat.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MatComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAt9ym5lJu_8pguSVm6idX0nfQtgy-12dw',
      libraries: ['places']
    }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PartyListsService,
    UserService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
