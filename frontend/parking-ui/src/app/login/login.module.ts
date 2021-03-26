import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeHeaderComponent } from './home-header/home-header.component';


@NgModule({
  declarations: [LoginComponent,
    LoginFormComponent,
    HomeHeaderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
