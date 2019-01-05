import { PageNoFoundComponent } from './helpers/page-no-found/page-no-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartyComponent } from './party/party.component';
import { PartylistComponent } from './party/partylist/partylist.component';
import { ActionComponent } from './action/action.component';
import { PartyTypeComponent } from './party/party-type/party-type.component';
import {PartyFormComponent} from './party/party-form/party-form.component';
import {PartyDetailsComponent} from './party/party-details/party-details.component';
import { AuthGuard } from './auth/auth.guard';
import {AvatarComponent} from './user/avatar/avatar.component';
import {PasswordComponent} from './user/password/password.component';
import {PartyInviteComponent} from './party/party-invite/party-invite.component';

const routesConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsComponent},
  {
    path: 'party', component: PartyComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'add', component: PartyFormComponent},
      {path: 'list', component: PartylistComponent},
      {path: 'type', component: PartyTypeComponent},
      {path: 'details/:id', component: PartyDetailsComponent},
      {path: 'invite/:id', component: PartyInviteComponent},
    ]
  },
  {
    path: 'user',
    canActivateChild: [AuthGuard],
    component: UserComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'avatar', component: AvatarComponent},
      {path: 'password', component: PasswordComponent},
    ]
  },
  {path: 'action/activate/:hash', component: ActionComponent},
  {path: '**', component: PageNoFoundComponent}
];
export const routerModule = RouterModule.forRoot(routesConfig);
