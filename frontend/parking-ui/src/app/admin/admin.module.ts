import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRouteComponent } from './admin-route/admin-route.component';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';
import { AdminUpdateModelComponent } from './admin-update-model/admin-update-model.component';
import { AdminDeleteModelComponent } from './admin-delete-model/admin-delete-model.component';
import { AdminRouteListComponent } from './admin-route-list/admin-route-list.component';
import { AdminModelUpdateCarComponent } from './admin-model-update-car/admin-model-update-car.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminAddCarComponent } from './admin-add-car/admin-add-car.component';



@NgModule({
  declarations: [AdminComponent, AdminHeaderComponent, AdminHomeComponent, AdminRouteComponent, AdminUsersListComponent, AdminUpdateModelComponent, AdminDeleteModelComponent, AdminRouteListComponent, AdminModelUpdateCarComponent, AdminAddUserComponent, AdminAddCarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
