import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path: 'student-dashboard', component:StudentDashboardComponent},
  {path: 'student-details', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
