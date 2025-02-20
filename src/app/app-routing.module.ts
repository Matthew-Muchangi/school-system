import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './config/dashboard/dashboard.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes: Routes = [
  {path: 'dashboard',component:DashboardComponent},
  {path: 'student-details',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
