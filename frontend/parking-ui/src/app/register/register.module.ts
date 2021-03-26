import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { LoginModule } from '../login/login.module';

import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LoginModule
  ]
})
export class RegisterModule { }
