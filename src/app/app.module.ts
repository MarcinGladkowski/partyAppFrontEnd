import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule, ModalModule, ButtonsModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
// services
import { PartyListsService} from './services/party-lists.service';
import { PartyTypeService } from './services/party-type.service';
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
import { ActionComponent } from './action/action.component';
import { PartyTypeComponent } from './party/party-type/party-type.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { PartyFormComponent } from './party/party-form/party-form.component';
import { PartyDetailsComponent } from './party/party-details/party-details.component';
import { PageNoFoundComponent } from './helpers/page-no-found/page-no-found.component';
import { AvatarComponent } from './user/avatar/avatar.component';
import { PasswordComponent } from './user/password/password.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { WavesModule } from 'angular-bootstrap-md';
import { PartyInviteComponent } from './party/party-invite/party-invite.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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
    ActionComponent,
    PartyTypeComponent,
    ProfileComponent,
    UserComponent,
    PartyFormComponent,
    PartyDetailsComponent,
    PageNoFoundComponent,
    AvatarComponent,
    PasswordComponent,
    PartyInviteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    ButtonsModule,
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
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    WavesModule,
    MatAutocompleteModule,
    MatInputModule,
    routerModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PartyListsService,
    PartyTypeService,
    UserService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
