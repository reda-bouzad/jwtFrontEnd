import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SuccessComponent } from './view/success/success.component';
import { LogoutComponent } from './view/logout/logout.component';
import { RegisterComponent } from './view/register/register.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import {AuthInterceptor} from "./service/authconfig.interceptor";

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    SuccessComponent,
    LogoutComponent,
    RegisterComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  exports: [
    // ... other exports
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
