import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'forgotpassword',component:ForgotPasswordComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
