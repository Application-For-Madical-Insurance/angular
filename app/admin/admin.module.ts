import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerQueriesComponent } from './customer-queries/customer-queries.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ViewFormComponent } from './view-form/view-form.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, NewRequestComponent, CustomerListComponent, CustomerQueriesComponent, AdminHeaderComponent, ViewFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
