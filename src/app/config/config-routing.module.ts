import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigLayoutComponent } from './config-layout/config-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StreamsComponent } from './streams/streams.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentProfileComponent } from '../student/student-profile/student-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent, // Layout with Sidebar
    children: [
      {path: '', component:DashboardComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'streams', component: StreamsComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'student/:admissionNumber', component: StudentProfileComponent } // ✅ FIXED
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
