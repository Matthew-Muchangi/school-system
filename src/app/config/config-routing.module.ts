import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigLayoutComponent } from './config-layout/config-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { StreamsComponent } from './streams/streams.component';
import { GradesComponent } from './grades/grades.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent, // Layout with Sidebar
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'streams', component: StreamsComponent },
      { path: 'grades', component: GradesComponent },
      { path: 'classes', component: ClassesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
