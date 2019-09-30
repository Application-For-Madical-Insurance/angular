import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { AgentHeaderComponent } from './agent-header/agent-header.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';


@NgModule({
  declarations: [AgentLoginComponent, AgentDashboardComponent, AgentHomeComponent, NewRegistrationComponent, AgentHeaderComponent, BankDetailComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AgentRoutingModule,
    
   
  ]
})
export class AgentModule { }
