import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartyComponent } from './party/party.component';
import { AdminComponent } from './admin/admin.component';

const routesConfig: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'party', component: PartyComponent},
  {path: 'admin', component: AdminComponent}
];

export const routerModule = RouterModule.forRoot(routesConfig);