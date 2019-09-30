import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AgentLoginComponent } from './agent/agent-login/agent-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'agent-login', component:AgentLoginComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'user-registration', component:UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
