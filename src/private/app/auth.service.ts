import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;


  constructor(private http: Http) {

  }

  login(password: string): Observable<boolean> {
    //TODO conectar al server para hacer login

    return Observable.of(password).delay(0).map(val => val === '11111111').do(val => {
      this.isLoggedIn = val;
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
