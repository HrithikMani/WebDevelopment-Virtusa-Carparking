import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { HomeHeaderComponent } from './home-header/home-header.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [LoginComponent,
    LoginFormComponent,
    HomeHeaderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[HomeHeaderComponent]
})
export class LoginModule { }
