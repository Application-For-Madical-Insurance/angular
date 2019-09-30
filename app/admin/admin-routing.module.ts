import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerQueriesComponent } from './customer-queries/customer-queries.component';
import { ViewFormComponent } from './view-form/view-form.component';


const routes: Routes = [
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'new-request', component:NewRequestComponent}, 
  {path:'customer-queries', component:CustomerQueriesComponent},
  {path:'customer-list', component:CustomerListComponent},
  {path:'view-form', component:ViewFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
