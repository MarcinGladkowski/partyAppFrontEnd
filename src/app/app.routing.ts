import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartyComponent } from './party/party.component';
import { PartylistComponent } from './party/partylist/partylist.component';
import { PartymainComponent } from './party/partymain/partymain.component';
import { AdminComponent } from './admin/admin.component';
import { ActionComponent } from './action/action.component';
import { PartyTypeComponent } from './admin/party-type/party-type.component';

const routesConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'party', component: PartymainComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'add', component: PartyComponent },
    {path: 'list', component: PartylistComponent },
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'type', pathMatch: 'full'},
    {path: 'type', component: PartyTypeComponent },
  ]},
  {path: 'action/activate/:hash', component: ActionComponent}
];

export const routerModule = RouterModule.forRoot(routesConfig);
