import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../../auth-guard.service';
import { AuthService }          from '../../auth.service';
import { LoginComponent }       from './login.component';


// Route Configuration
export const routes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
