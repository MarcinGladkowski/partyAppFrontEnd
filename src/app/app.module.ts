import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
// services
import { PartyListsService} from './services/party-lists.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { JwtInterceptor } from './helpers/jwt';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { PartyComponent } from './party/party.component';
// routing
import { routerModule } from './app.routing';
// config
import config from './app.config';
import { AdminComponent } from './admin/admin.component';
import { PartylistComponent } from './party/partylist/partylist.component';
import { PartymainComponent } from './party/partymain/partymain.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MapComponent,
    PartyComponent,
    SettingsComponent,
    AdminComponent,
    PartylistComponent,
    PartymainComponent
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
      apiKey: config.googleApiKey,
      libraries: ['places']
    }),
    AgmSnazzyInfoWindowModule,
    MDBBootstrapModule.forRoot(),
    routerModule
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
