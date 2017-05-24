import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';

import {AppRoutingModule} from './app.routing-module';
import { AppComponent } from './app.component';

import {LoginRoutingModule} from './mods/login/login.routing-module';
import { LoginComponent }          from './mods/login/login.component';

import {PageNotFoundComponent} from './not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    LoginRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
