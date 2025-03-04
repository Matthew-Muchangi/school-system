import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './config/dashboard/dashboard.component';
import { ConfigModule } from './config/config.module';
import { StudentModule } from './student/student.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
ConfigModule,
StudentModule,
AuthenticationModule
  ],
   
  exports: [RouterModule]
})
export class AppRoutingModule { }
