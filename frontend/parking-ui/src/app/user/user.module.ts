import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { CarListComponent } from './car-list/car-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ModelBookingComponent } from './model-booking/model-booking.component';


@NgModule({
  declarations: [UserComponent, HeaderComponent, CarListComponent, UserProfileComponent, ModelBookingComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
