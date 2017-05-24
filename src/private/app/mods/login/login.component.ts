import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  template: `
    <form class="login_input" novalidate #myform="ngForm" ngSubmit="login">
      <img src="assets/images/logo_login.png">
      <md-input-container>
        <input md-input placeholder="Introducir contraseña" ngModel #password="ngModel" name="password" required>
      </md-input-container>
      <span class="error-form" *ngIf="isInvalid">La contraseña no es correcta</span>
      <button (click)="login(password)" md-raised-button color="accent">LOGIN</button> 
    </form>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;
  isInvalid: boolean = false;


  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(password: HTMLInputElement) {
    this.message = 'Trying to log in ...';
    if(!password) return;
    this.isInvalid = false;

    this.authService.login(password.value).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      } else {
        this.isInvalid = true;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }




}