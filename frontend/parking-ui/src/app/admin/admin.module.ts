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



@NgModule({
  declarations: [AdminComponent, AdminHeaderComponent, AdminHomeComponent, AdminRouteComponent, AdminUsersListComponent, AdminUpdateModelComponent, AdminDeleteModelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
