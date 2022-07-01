import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatTableModule, MatSortModule, BrowserAnimationsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LogoutComponent, LoginComponent, HomeComponent, UsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }  
  ],
  exports: [ MatTableModule, MatSortModule ]
})
export class AppModule { }
