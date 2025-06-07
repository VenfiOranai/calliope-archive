import { Routes } from '@angular/router';
import { LoginPage } from '@components/pages/login-page/login-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
