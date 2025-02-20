import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotPasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './config/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'forgotpassword',component:ForgotPasswordComponent},
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
