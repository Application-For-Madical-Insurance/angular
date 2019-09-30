import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';


const routes: Routes = [
 
  {path:'agent-dashboard',component:AgentDashboardComponent},
  {path:'agent-home', component:AgentHomeComponent},
  {path:'new-registration', component:NewRegistrationComponent},
 
  {path:'bank-detail', component:BankDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
